/* eslint-disable react/jsx-props-no-spreading */
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import {
  FileUploadHelpText,
  FileUploadMuteText,
  StyledDropZone,
} from "./styles";
import { postFile } from "../../../../api/thunks/apiUtil";
import { PrimaryButton } from "../../buttons";
import FileUploadTrackerRow, {
  IFileUploadTracker,
} from "./FileUploadTrackerRow";
import UploadedFileRow from "./UploadedFileRow";
import IApplicationFile from "../../../types/ApplicationFile";
import { isTransactionError } from "../../../types/TransactionError";
import { createRequestErrorToast } from "../../../util/toastUtil";
import { selectAuthToken } from "../../../../state/selectors/authSelectors";

interface IMultiFileInputProps {
  value: Array<IApplicationFile>;
  onChange: (newValue: Array<IApplicationFile>) => void;
  id?: string;
  name?: string;
  uploadUrl?: string;
  disabled?: boolean;
}

const MultiFileInput = ({
  id,
  name,
  uploadUrl = `${process.env.REACT_APP_API_URL}/api/file`,
  disabled,
  value,
  onChange,
}: IMultiFileInputProps) => {
  const [uploading, setUploading] = useState(false);
  const [trackers, setTrackers] = useState<Array<IFileUploadTracker>>([]);
  const token = useSelector(selectAuthToken);

  const onDrop = useCallback(
    (acceptedFiles: Array<File>) => {
      setUploading(true);

      const localTrackers = acceptedFiles.map(
        (file): IFileUploadTracker => ({
          file,
          guid: uuid(),
          percentage: 0,
        })
      );

      const uploadedFiles: Array<IApplicationFile> = [];

      const promises = localTrackers.map((tracker) =>
        postFile(
          uploadUrl,
          tracker.file,
          (percentage) => {
            setTrackers((v) => {
              return v.map((t) => {
                if (t.guid !== tracker.guid) {
                  return { ...t };
                }
                return { ...t, percentage };
              });
            });
          },
          token
        ).then((result) => {
          if (!isTransactionError(result)) {
            uploadedFiles.push(result);
          } else {
            createRequestErrorToast(result);
          }
        })
      );

      Promise.all(promises)
        .catch((reason) => {
          createRequestErrorToast(reason);
        })
        .finally(() => {
          let v = value || [];
          v = [...v, ...uploadedFiles];

          onChange(v);
          setUploading(false);
          setTrackers([]);
        });

      setTrackers(localTrackers);
    },
    [onChange, token, uploadUrl, value]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    disabled: uploading || disabled,
  });

  return (
    <>
      <StyledDropZone {...getRootProps()}>
        <input
          {...getInputProps()}
          id={id}
          name={name}
          disabled={uploading || disabled}
        />
        <FileUploadHelpText>Drag images to upload</FileUploadHelpText>
        <FileUploadMuteText>or</FileUploadMuteText>
        <PrimaryButton disabled={uploading || disabled}>
          Upload from computer
        </PrimaryButton>
      </StyledDropZone>
      {value
        ? value.map((file) => (
            <UploadedFileRow
              key={file.fileId}
              file={file}
              allowDelete
              disabled={uploading || disabled}
              onDelete={() => {
                onChange(
                  (value || [])
                    .filter((x) => x.fileId !== file.fileId)
                    .map((v) => ({ ...v }))
                );
              }}
            />
          ))
        : null}
      {trackers.map((tracker) => (
        <FileUploadTrackerRow key={tracker.guid} tracker={tracker} />
      ))}
    </>
  );
};

export default MultiFileInput;

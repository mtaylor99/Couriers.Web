import DeleteIcon from "@material-ui/icons/Delete";
import { ClickableIcon } from "../../buttons";
import { FileUploadFileRow } from "./styles";
import IApplicationFile from "../../../types/ApplicationFile";

interface IUploadedFileRowProps {
  file: IApplicationFile;
  disabled?: boolean;
  allowDelete?: boolean;
  onDelete?: () => void;
}

const UploadedFileRow = ({
  file,
  allowDelete,
  disabled,
  onDelete,
}: IUploadedFileRowProps) => {
  const { fileName } = file;
  return (
    <FileUploadFileRow>
      <div className="content">{fileName}</div>
      {allowDelete ? (
        <ClickableIcon
          onClick={onDelete}
          disabled={disabled}
          startIcon={DeleteIcon}
        />
      ) : null}
    </FileUploadFileRow>
  );
};

export default UploadedFileRow;

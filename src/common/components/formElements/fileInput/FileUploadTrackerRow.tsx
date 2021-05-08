import { FileUploadFileRow, FileUploadProgressBar } from "./styles";

export interface IFileUploadTracker {
  guid: string;

  file: File;

  percentage: number;
}

interface IFileUploadTrackerRowProps {
  tracker: IFileUploadTracker;
}

const FileUploadTrackerRow = ({ tracker }: IFileUploadTrackerRowProps) => {
  const { percentage } = tracker;

  return (
    <FileUploadFileRow>
      <FileUploadProgressBar variant="determinate" value={percentage} />
      <div className="content">{`${tracker.file.name} (${percentage}%)`}</div>
    </FileUploadFileRow>
  );
};

export default FileUploadTrackerRow;

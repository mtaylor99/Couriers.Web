export default interface IApplicationFile {
  fileId: string;
  fileName: string;
  fileExtension: string;
  uploadedDateTime: string;
  uploadedUser: {
    id: number;
    value: string;
  } | null;
}

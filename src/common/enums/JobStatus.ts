enum JobStatus {
  Created = 1,
  Scheduled = 2,
  Completed = 3,
}

export const JobStatusLanguage: { [key in JobStatus]: string } = {
  [JobStatus.Created]: "Created",
  [JobStatus.Scheduled]: "Scheduled",
  [JobStatus.Completed]: "Completed",
};

export default JobStatus;

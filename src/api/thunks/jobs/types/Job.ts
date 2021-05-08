import JobStatus from "../../../../common/enums/JobStatus";

export default interface IJob {
  jobId: number;

  goods: string;

  customer: string;

  orderedBy: string;

  createdDate: Date;

  jobStatus: JobStatus;

  active: boolean;
}

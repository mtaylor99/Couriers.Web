import IRequestSet from "../../../../common/types/GridRequest";

export default interface IJobsGridRequest extends IRequestSet {
  jobTypeIds: number[];
}

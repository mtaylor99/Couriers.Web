enum ScheduleStatus {
  Draft = 1,
  Ready = 2,
  OnRoute = 3,
  Completed = 4,
}

export const JobStatusLanguage: { [key in ScheduleStatus]: string } = {
  [ScheduleStatus.Draft]: "Draft",
  [ScheduleStatus.Ready]: "Ready",
  [ScheduleStatus.OnRoute]: "On Route",
  [ScheduleStatus.Completed]: "Completed",
};

export default ScheduleStatus;

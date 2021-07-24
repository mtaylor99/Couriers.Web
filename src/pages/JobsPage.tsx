import { Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { unwrapResult } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { H1Label } from "../common/components/typography";
import JobsGrid from "../feature/jobs/JobsGrid";
import getJobsGrid from "../api/thunks/jobs";
import { useAppDispatch } from "../state";
import { selectJobsGridFilters } from "../state/selectors/jobsSelectors";

const JobsPage = () => {
  const dispatch = useAppDispatch();
  const { push } = useHistory();
  const jobsGridFilters = useSelector(selectJobsGridFilters);

  useEffect(() => {
    dispatch(getJobsGrid(jobsGridFilters) as any).then((result: any) =>
      unwrapResult(result)
    );
    // .then(() => {
    //   console.log("Loaded!");
    // })
    // .catch((e) => {
    //   console.log(`Catch!${e.toString()}`);
    // })
    // .finally(() => console.log("Finally!"));
  }, [dispatch, jobsGridFilters]);

  return (
    <>
      <H1Label>Jobs</H1Label>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          push("/job/0");
        }}
      >
        Create Job
      </Button>
      <Paper>
        <JobsGrid />
      </Paper>
    </>
  );
};

export default JobsPage;

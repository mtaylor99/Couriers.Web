/* eslint-disable no-use-before-define */
import { TablePagination } from "@material-ui/core";
import moment from "moment";
import React, { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import {
  Grid,
  GridBody,
  GridCell,
  GridContainer,
  GridHead,
  GridRow,
} from "../../common/components/grid";
import { JobStatusLanguage } from "../../common/enums/JobStatus";
import { useAppDispatch } from "../../state";
import { selectJobs } from "../../state/selectors/jobsSelectors";
import {
  IPaginationRequest,
  setJobsGridPagination,
} from "../../state/slices/jobsReducer";

const JobsGrid = () => {
  const dispatch = useAppDispatch();
  const jobs = useSelector(selectJobs);

  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    page: number
  ) => {
    const paginationRequest: IPaginationRequest = {
      skip: page * rowsPerPage,
      take: rowsPerPage,
    };
    setCurrentPage(page);
    dispatch(setJobsGridPagination(paginationRequest));
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    const localTake = parseInt(event?.target.value, 10);
    const paginationRequest: IPaginationRequest = {
      skip: 0,
      take: localTake,
    };
    setRowsPerPage(localTake);
    dispatch(setJobsGridPagination(paginationRequest));
  };

  return (
    <>
      <GridContainer>
        <Grid stickyHeader aria-label="sticky table">
          <GridHead>
            <GridRow>
              <GridCell>Job Id</GridCell>
              <GridCell>Goods</GridCell>
              <GridCell>Customer</GridCell>
              <GridCell>Ordered By</GridCell>
              <GridCell>Created Date</GridCell>
              <GridCell>Status</GridCell>
            </GridRow>
          </GridHead>
          <GridBody>
            {jobs.result.map((job) => {
              return (
                <GridRow key={job.jobId}>
                  <GridCell>{job.jobId}</GridCell>
                  <GridCell>{job.goods}</GridCell>
                  <GridCell>{job.customer}</GridCell>
                  <GridCell>{job.orderedBy}</GridCell>
                  <GridCell>
                    {moment(job.createdDate).format("DD/MM/YYYY HH:mm")}
                  </GridCell>
                  <GridCell>{JobStatusLanguage[job.jobStatus]}</GridCell>
                </GridRow>
              );
            })}
          </GridBody>
        </Grid>
      </GridContainer>
      <Grid>
        <GridBody>
          <GridRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 20]}
              count={jobs.count}
              rowsPerPage={rowsPerPage}
              page={currentPage}
              onChangePage={(event, page) => handleChangePage(event, page)}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </GridRow>
        </GridBody>
      </Grid>
    </>
  );
};

export default JobsGrid;

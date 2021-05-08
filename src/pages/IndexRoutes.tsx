import { Route, Switch } from "react-router-dom";

import DashboardPage from "./DashboardPage";
import JobsPage from "./JobsPage";
import JobForm from "../feature/jobs/JobForm";
import SchedulesPage from "./SchedulesPage";

const IndexRoutes = () => {
  return (
    <Switch>
      <Route exact={false} path="/jobs">
        <JobsPage />
      </Route>
      <Route exact={false} path="/job/:id">
        <JobForm />
      </Route>
      <Route exact={false} path="/schedules">
        <SchedulesPage />
      </Route>
      <Route path="/">
        <DashboardPage />
      </Route>
    </Switch>
  );
};

export default IndexRoutes;

/* eslint-disable no-nested-ternary */
import { useEffect, useState } from "react";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { ToastContainer } from "react-toastify";
import DateFnsUtils from "@date-io/date-fns";
import { Grid } from "@material-ui/core";
import IndexRoutes from "./pages/IndexRoutes";
import { getJobStatuses } from "./api/thunks/jobs";
import getScheduleStatuses from "./api/thunks/schedules";
import getDrivers from "./api/thunks/drivers";
import { useAppDispatch } from "./state";
import { SpinnerWithLabel } from "./common/components/spinners";
import { ErrorMessage } from "./common/components/errorMessage";
import DefaultTopBar from "./common/components/topBars";
import { Footer } from "./common/components/footer";
import "react-toastify/dist/ReactToastify.css";
// import TokenRefresher from "./feature/authentication/components/tokenRefresher/TokenRefresher";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    Promise.all([
      dispatch(getJobStatuses() as any),
      dispatch(getScheduleStatuses() as any),
      dispatch(getDrivers() as any),
    ])
      .catch(() => {
        setError(true);
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        {/* <TokenRefresher /> */}
        <ToastContainer />
        {loading ? (
          <SpinnerWithLabel centerScreen label="Loading" />
        ) : error ? (
          <ErrorMessage
            centerScreen
            reason="A error occcured while loading the application."
          />
        ) : (
          <Grid container direction="column">
            <Grid item xs={12}>
              <DefaultTopBar />
            </Grid>
            <Grid container item>
              <Grid item xs={12}>
                <IndexRoutes />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Footer />
            </Grid>
          </Grid>
        )}
      </MuiPickersUtilsProvider>
    </>
  );
};

export default App;

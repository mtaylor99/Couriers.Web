/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-nested-ternary */
import { unwrapResult } from "@reduxjs/toolkit";
import jwtDecode, { JwtPayload } from "jwt-decode";
import { ComponentType, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { postAuthorize } from "../../../../api/thunks/auth";
import { ErrorMessage } from "../../../../common/components/errorMessage";
import { SpinnerWithLabel } from "../../../../common/components/spinners";
import { AuthProvider } from "../../AuthContext";
import { TOKEN_KEY } from "../../constants";
import { useAppDispatch } from "../../../../state";
import { selectIsAuthorised } from "../../../../state/selectors/authSelectors";
import {
  setAuthorisedFlag,
  setToken,
} from "../../../../state/slices/authReducer";

const withAuth =
  <P extends {}>(Component: ComponentType<P>) =>
  (props: P) => {
    const authorised = useSelector(selectIsAuthorised);
    const [error, setError] = useState(false);
    const [errorReason, setErrorReason] = useState("");

    const { search } = useLocation();

    const dispatch = useAppDispatch();

    useEffect(() => {
      let mounted = true;

      // Callback used to initiate token
      const doTokenRequest = (key: string) => {
        dispatch(postAuthorize(key) as any)
          .then((result: any) => unwrapResult(result))
          .then((token: string) => {
            if (!mounted) return;
            const decoded = jwtDecode<JwtPayload>(token);
            if (decoded && decoded.exp != null) {
              localStorage.setItem(TOKEN_KEY, token);
              dispatch(setToken(token));
            } else {
              // Unexpected token?
              setError(true);
              dispatch(setAuthorisedFlag(false));
            }
          })
          .catch((result: boolean) => {
            if (!mounted) return;
            if (result === false) {
              setError(true);
              setErrorReason("Unauthorized");
              dispatch(setAuthorisedFlag(false));
            } else if (mounted) {
              setTimeout(() => doTokenRequest(key), 5000);
            }
          });
      };

      if (!authorised) {
        const token = localStorage.getItem(TOKEN_KEY);

        // User clicked link from email, make sure we use the session
        // from the appointment key
        if (search && search.includes("?appointmentkey=")) {
          if (token) localStorage.removeItem(TOKEN_KEY);
          const key = search.replace("?appointmentkey=", "");
          doTokenRequest(key);

          // User refreshed / bookmarked page, check token exists in local storage
        } else if (token) {
          const decoded = jwtDecode<JwtPayload>(token);

          // Check expiry
          if (decoded != null) {
            if (decoded.exp && decoded.exp < Date.now() / 1000) {
              localStorage.removeItem(TOKEN_KEY);
              setError(true);
              setErrorReason(
                "Session expired, please use the link in the email to re-activate the session"
              );
              dispatch(setAuthorisedFlag(false));
            } else {
              dispatch(setToken(token));
              setError(false);
            }
          } else {
            setError(true);
          }
        } else {
          setError(true);
        }
      }

      return () => {
        mounted = false;
      };
    }, [authorised, dispatch, search]);

    return (
      <AuthProvider
        value={{
          authorised,
          setAuthorised: (value) => dispatch(setAuthorisedFlag(value)),
          error,
          setError,
          errorReason,
          setErrorReason,
        }}
      >
        {error ? (
          <ErrorMessage centerScreen accessError reason={errorReason} />
        ) : !authorised ? (
          <SpinnerWithLabel centerScreen label="Authorising" />
        ) : (
          <Component {...props} />
        )}
      </AuthProvider>
    );
  };

export default withAuth;

import { unwrapResult } from "@reduxjs/toolkit";
import jwtDecode, { JwtPayload } from "jwt-decode";
import { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { postAuthorizeRefresh } from "../../../../api/thunks/auth";
import { TOKEN_KEY } from "../../constants";
import AuthContext from "../../AuthContext";
import { useAppDispatch } from "../../../../state";
import { selectAuthToken } from "../../../../state/selectors/authSelectors";
import { setToken } from "../../../../state/slices/authReducer";

const TokenRefresher = () => {
  const dispatch = useAppDispatch();
  const token = useSelector(selectAuthToken);

  const { setAuthorised, setError, setErrorReason } = useContext(AuthContext);

  useEffect(() => {
    let mounted = true;

    const calculateRefreshCallbackTime = (tokenExpTimeInSeconds: number) => {
      const fiveMinsBefore = tokenExpTimeInSeconds - 60 * 5;
      const diff = fiveMinsBefore - Date.now() / 1000;
      const t = Math.max(diff, 0);
      return t * 1000;
    };

    const doRefresh = () => {
      if (mounted) {
        dispatch(postAuthorizeRefresh())
          .then((result) => unwrapResult(result))
          .then((newToken) => {
            if (!mounted) return;
            const decoded = jwtDecode<JwtPayload>(newToken);
            if (decoded && decoded.exp != null) {
              localStorage.setItem(TOKEN_KEY, newToken);
              dispatch(setToken(newToken));
            } else {
              // Unexpected token?
              setError(true);
              setAuthorised(false);
            }
          })
          .catch((result) => {
            if (!mounted) return;
            if (result === false) {
              setError(true);
              setErrorReason("Unauthorized");
              setAuthorised(false);
            } else if (mounted) {
              setTimeout(doRefresh, 5000);
            }
          });
      }
    };

    if (token) {
      const decoded = jwtDecode<JwtPayload>(token);
      if (decoded && decoded.exp != null) {
        setAuthorised(true);
        setTimeout(doRefresh, calculateRefreshCallbackTime(decoded.exp));
      } else {
        // Unexpected token?
        setError(true);
        setAuthorised(false);
      }
    }

    return () => {
      mounted = false;
    };
  }, [dispatch, setAuthorised, setError, setErrorReason, token]);

  return <></>;
};

export default TokenRefresher;

import { createContext } from "react";

export interface IAuthContext {
  authorised: boolean;
  setAuthorised: (val: boolean) => void;
  error: boolean;
  setError: (val: boolean) => void;
  errorReason: string;
  setErrorReason: (val: string) => void;
}

const AuthContext = createContext<IAuthContext>({
  authorised: false,
  setAuthorised: () => {},
  error: false,
  errorReason: "",
  setError: () => {},
  setErrorReason: () => {},
});

export const AuthProvider = AuthContext.Provider;
export default AuthContext;

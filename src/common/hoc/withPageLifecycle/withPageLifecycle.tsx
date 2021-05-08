/* eslint-disable react/jsx-props-no-spreading */
import { ComponentType, useEffect, useRef, useState } from "react";
import { ErrorMessage } from "../../components/errorMessage";
import { SpinnerWithLabel } from "../../components/spinners";
import { isTransactionError } from "../../types/TransactionError";
import { PageComponentWrapper, WithPageLifecycleWrapper } from "./styles";

type OnLoadCallback = () => Promise<any> | Array<Promise<any>>;

export interface IWithPageLifecycleProps {
  onLoad: (callback: OnLoadCallback) => void;
}

const withPageLifecycle = <P extends IWithPageLifecycleProps>(
  Component: ComponentType<P & IWithPageLifecycleProps>
) => (props: Omit<P, "onLoad">) => {
  const onLoadCallbackRef = useRef<OnLoadCallback>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorReason, setErrorReason] = useState("");

  useEffect(() => {
    if (onLoadCallbackRef.current) {
      const promise = onLoadCallbackRef.current();

      Promise.all(Array.isArray(promise) ? promise : [promise])
        .then(() => {
          setLoading(false);
        })
        .catch((e) => {
          setError(true);
          setLoading(false);

          if (isTransactionError(e) && !!e.generalError) {
            setErrorReason(e.generalError);
          }
        });
    }
  }, []);

  return (
    <WithPageLifecycleWrapper>
      <PageComponentWrapper className={error || loading ? "page-hidden" : ""}>
        <Component
          {...(props as P)}
          onLoad={(callback) => {
            onLoadCallbackRef.current = callback;
          }}
        />
      </PageComponentWrapper>

      {loading ? <SpinnerWithLabel label="Loading Page" /> : null}

      {error ? (
        <ErrorMessage
          reason={errorReason || "An unexpected system error occurred"}
        />
      ) : null}
    </WithPageLifecycleWrapper>
  );
};

export default withPageLifecycle;

/* eslint-disable import/prefer-default-export */
import { toast, ToastOptions } from "react-toastify";
import TransactionError, {
  isTransactionError,
} from "../types/TransactionError";

const createToast = (
  message: string,
  options: ToastOptions,
  title?: string
) => {
  toast(`${title ? `${title} - ` : ""}${message}`, options);
};

export const createErrorToast = (message: string, title?: string) =>
  createToast(
    message,
    {
      autoClose: 5000,
      type: "error",
    },
    title
  );

export const createWarningToast = (message: string, title?: string) =>
  createToast(
    message,
    {
      autoClose: 5000,
      type: "warning",
    },
    title
  );

export const createSuccessToast = (message: string, title?: string) =>
  createToast(
    message,
    {
      autoClose: 5000,
      type: "success",
    },
    title
  );

export const createValidationWarningToast = () =>
  createToast("Please correct validation errors", {
    autoClose: 5000,
    type: "warning",
  });

export const createRequestErrorToast = (
  txError?: TransactionError | unknown
) => {
  const generalError = "An error occured and the request could not be complete";
  if (!txError) {
    createErrorToast(generalError);
    return;
  }

  if (isTransactionError(txError) && txError.generalError) {
    createErrorToast(txError.generalError);
  } else {
    createErrorToast(generalError);
  }
};

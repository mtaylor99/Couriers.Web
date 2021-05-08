export default class TransactionError {
  errors!: { [propertyName: string]: Array<string> };

  generalError?: string;
}

export const isTransactionError = (obj: any): obj is TransactionError => {
  if (typeof obj !== "object") return false;

  return "errors" in obj && typeof obj.errors === "object";
};

export const iterateErrors = (
  txError: TransactionError,
  callback: (propName: string, error: string) => void
) => {
  if (txError) {
    Object.entries(txError.errors).forEach(([propName, errors]) => {
      callback(propName, errors[0]);
    });
  }
};

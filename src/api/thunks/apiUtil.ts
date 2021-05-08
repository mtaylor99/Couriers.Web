import { HttpException } from "../exceptions";
import IApplicationFile from "../../common/types/ApplicationFile";
import TransactionError from "../../common/types/TransactionError";

export const getHeaders = (token?: string | null) => {
  return token
    ? new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      })
    : new Headers({
        "Content-Type": "application/json",
      });
};

const makeTransactionError = (data: any) => {
  const getGeneralError = () =>
    Object.entries<any>(data.errors).find(
      (x) => x[0] === "error" && !!x[1]
    )?.[1]?.[0];

  const ret: TransactionError = {
    errors: data.errors,
    generalError: getGeneralError(),
  };
  return ret;
};

export const genericGet = async <R>(
  url: string,
  signal: AbortSignal,
  token?: string | null
): Promise<R | TransactionError> => {
  let response: Response;

  try {
    response = await fetch(url, {
      method: "GET",
      headers: getHeaders(token),
      signal,
    });
  } catch (reason) {
    throw new HttpException(-1, reason);
  }

  switch (response.status) {
    case 200:
      return response.json();
    case 400:
      return makeTransactionError(await response.json());
    case 404:
      throw new HttpException(404, "Not Found");
    default:
      throw new HttpException(response.status, "Unexpected status code");
  }
};

export const genericPost = async <R, B>(
  url: string,
  body: B,
  signal: AbortSignal,
  token?: string | null
): Promise<R | TransactionError> => {
  let response: Response;
  try {
    response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: getHeaders(token),
      signal,
    });
  } catch (reason) {
    throw new HttpException(-1, reason);
  }

  switch (response.status) {
    case 201:
      return response.json();
    case 400:
      return makeTransactionError(await response.json());
    default:
      throw new HttpException(response.status, "Unexpected status code");
  }
};

export const genericPostNoContent = async <B>(
  url: string,
  body: B,
  signal: AbortSignal,
  token?: string | null
): Promise<boolean | TransactionError> => {
  let response: Response;
  try {
    response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: getHeaders(token),
      signal,
    });
  } catch (reason) {
    throw new HttpException(-1, reason);
  }

  switch (response.status) {
    case 204:
      return true;
    case 400:
      return makeTransactionError(await response.json());
    default:
      throw new HttpException(response.status, "Unexpected status code");
  }
};

export const genericPut = async <B>(
  url: string,
  body: B,
  signal: AbortSignal,
  token?: string | null
): Promise<boolean | TransactionError> => {
  let response: Response;
  try {
    response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: getHeaders(token),
      signal,
    });
  } catch (reason) {
    throw new HttpException(-1, reason);
  }

  switch (response.status) {
    case 204:
      return true;
    case 400:
      return makeTransactionError(await response.json());
    default:
      throw new HttpException(response.status, "Unexpected status code");
  }
};

export const genericPutNoBody = async (
  url: string,
  signal: AbortSignal,
  token?: string | null
): Promise<boolean | TransactionError> => {
  let response: Response;
  try {
    response = await fetch(url, {
      method: "PUT",
      headers: getHeaders(token),
      signal,
    });
  } catch (reason) {
    throw new HttpException(-1, reason);
  }

  switch (response.status) {
    case 204:
      return true;
    case 400:
      return makeTransactionError(await response.json());
    default:
      throw new HttpException(response.status, "Unexpected status code");
  }
};

export const genericDelete = async <B>(
  url: string,
  body: B,
  signal: AbortSignal,
  token?: string | null
): Promise<boolean | TransactionError> => {
  let response: Response;
  try {
    response = await fetch(url, {
      method: "DELETE",
      body: JSON.stringify(body),
      headers: getHeaders(token),
      signal,
    });
  } catch (reason) {
    throw new HttpException(-1, reason);
  }
  switch (response.status) {
    case 204:
      return true;
    case 400:
      return makeTransactionError(await response.json());
    default:
      throw new HttpException(response.status, "Unexpected status code");
  }
};

export const genericDeleteNoBody = async (
  url: string,
  signal: AbortSignal,
  token?: string | null
): Promise<boolean | TransactionError> => {
  let response: Response;
  try {
    response = await fetch(url, {
      method: "DELETE",
      headers: getHeaders(token),
      signal,
    });
  } catch (reason) {
    throw new HttpException(-1, reason);
  }
  switch (response.status) {
    case 204:
      return true;
    case 400:
      return makeTransactionError(await response.json());
    default:
      throw new HttpException(response.status, "Unexpected status code");
  }
};

export const postFile = async (
  url: string,
  file: File,
  progress?: (percent: number) => void,
  token?: string | null
): Promise<IApplicationFile | TransactionError> => {
  const promise = new Promise<IApplicationFile | TransactionError>(
    (resolve, reject) => {
      const formData = new FormData();
      formData.append("file", file);

      const xhr = new XMLHttpRequest();
      xhr.open("POST", url);
      xhr.responseType = "json";

      if (token) {
        xhr.setRequestHeader("Authorization", `Bearer ${token}`);
      }

      xhr.onprogress = (e) => {
        if (e.lengthComputable) {
          const complete = (e.loaded / e.total) * 100 || 0;
          if (progress) progress(complete);
        }
      };

      xhr.onload = () => {
        if (progress) progress(100);
        if (xhr.status === 200) {
          resolve(xhr.response as IApplicationFile);
        } else if (xhr.status === 400) {
          resolve(makeTransactionError(xhr.response));
        } else {
          reject();
        }
      };

      xhr.onerror = () => {
        if (xhr.status === 400) {
          resolve(makeTransactionError(xhr.response));
        } else {
          reject();
        }
      };

      xhr.onabort = () => {
        reject();
      };

      xhr.ontimeout = () => {
        reject();
      };

      xhr.send(formData);
    }
  );

  return promise;
};

/* eslint-disable import/prefer-default-export */

export const iterateEnumValues = <E>(obj: any): Array<E> => {
  return Object.keys(obj)
    .filter((k) => !Number.isNaN(+k))
    .map((v) => (+v as unknown) as E) as Array<E>;
};

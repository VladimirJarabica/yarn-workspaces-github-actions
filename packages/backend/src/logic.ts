import { add } from "common";

export const businessLogic = (a: number, b: number) => {
  return { result: add(a, b), params: { a, b } };
};

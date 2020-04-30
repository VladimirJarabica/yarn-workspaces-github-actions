import { businessLogic } from "../src/logic";

test("businessLogic", () => {
  expect(businessLogic(1, 2)).toEqual({ result: 3, params: { a: 1, b: 2 } });
});

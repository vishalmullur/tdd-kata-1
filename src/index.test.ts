import { add } from "./index";

describe('Add numbers test', () => {
  test('Input empty string', () => {
    expect(add('')).toBe(0);
  })
})
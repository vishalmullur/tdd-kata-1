import { add } from "./index";

describe('Add numbers test', () => {
  test('Input empty string', () => {
    expect(add('')).toBe(0);
  });

  test('Input no arguments', () => {
    expect(add()).toBe(0);
  });

  test('Input sigle number returns same number', () => {
    expect(add('1')).toBe(1);
  });
})
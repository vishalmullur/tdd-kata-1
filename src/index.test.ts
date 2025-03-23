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

  test('Input two numbers returns their sum', () => {
    expect(add('1,2')).toBe(3);
  });

  test('Input only delimieter returns 0', () => {
    expect(add(',')).toBe(0);
  });

  test('Input unknown amount of numbers returns sum', () => {
    expect(add('1,2,3,4,5,6')).toBe(21);
  });

  test('Input \\n as delimiter returns sum', () => {
    expect(add("1,2\n3")).toBe(6);
  });

  test('Input custom delimiter returns sum', () => {
    expect(add("//;\n1;2;3")).toBe(6);
  });

  test('Input negative numbers throws error', () => {
    expect(() => add("-1")).toThrow(new Error('Negatives not allowed; -1'))
  });
})
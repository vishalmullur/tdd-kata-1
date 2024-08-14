import { add } from './index';

test('Function adds two numbers from a string', () => {
  expect(add('1,2')).toBe(3);
})

test('Function adds multiple numbers', () => {
  expect(add('1,2,3,4,5')).toBe(15);
})

test('Function accepts newline \\n as delimiter', () => {
  expect(add('1\n2\n3,4,5')).toBe(15);
})

test('Function accepts custom delimiters supplied at beginning', () => {
  expect(add('//;\n1;2;3;4;5')).toBe(15);
})

test('Function does not accept any negative numbers', () => {
  expect(add('1,2,3,-4')).toBe('Negative numbers not allowed: [-4]')
})

test('Function with custom delimiter does not accept any negative numbers', () => {
  expect(add('//;\n1;2;3;-4;-5')).toBe('Negative numbers not allowed: [-4,-5]')
})
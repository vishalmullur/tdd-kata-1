import { add } from './index';

test('Function adds two numbers from a string', () => {
  expect(add('1,2')).toBe(3);
})

test('Function adds multiple numbers', () => {
  expect(add('1,2,3,4,5')).toBe(15);
})
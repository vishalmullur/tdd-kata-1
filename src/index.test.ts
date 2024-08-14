import { add } from './index';

test('Function adds two numbers from a string', () => {
  expect(add('1,2')).toBe(3);
})
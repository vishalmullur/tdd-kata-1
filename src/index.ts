export const add = (numberString: string) => {
  const numbers = numberString.split(',');
  return numbers.reduce((acc, cur) => acc + (+cur), 0);
}
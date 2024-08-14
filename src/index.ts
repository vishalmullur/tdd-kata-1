export const add = (numberString: string) => {
  const numbers = numberString.split(/[\n,]+/g);
  return numbers.reduce((acc, cur) => acc + (+cur), 0);
}
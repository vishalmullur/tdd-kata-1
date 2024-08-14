export const add = (numberString: string) => {
  // Check to see if there is a customer delimiter at the beginning
  const match = numberString.match(/\/\/([^\n])\n/);

  if (match) {
    const [, numbersPart] = numberString.split('\n');
    return getAddedValue(numbersPart, match[1]);
  }
  
  // No custom delimiter, use '\n' or ',' as delimiters
  return getAddedValue(numberString, /[\n,]+/g);
}

const getAddedValue = (numbersPart: string, delimiter: RegExp | string) => {
  const negativeNumbers = numbersPart.split(delimiter).filter((number) => (+number) < 0);
  if (negativeNumbers.length > 0) {
    return `Negative numbers not allowed: [${negativeNumbers}]`;
  }

  return numbersPart.split(delimiter).reduce((acc, cur) => {
    if (+cur > 1000) {
      return acc;
    }

    return acc + (+cur);
  }, 0);
}
export const add = (numberString: string) => {
  // Check to see if there is a customer delimiter at the beginning
  const match = numberString.match(/\/\/([^\n])\n/);

  if (match) {
    const [, numbersPart] = numberString.split('\n');
    return numbersPart.split(match[1]).reduce((acc, cur) => acc + (+cur), 0);  
  }

  // No custom delimiter, use '\n' or ',' as delimiters
  return numberString.split(/[\n,]+/g).reduce((acc, cur) => acc + (+cur), 0);
}
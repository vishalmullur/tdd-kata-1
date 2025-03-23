export const add = (numbers?: string) => {
  if (!numbers || numbers.length <= 0) {
    return 0;
  }

  let numbersArray;

  // For customer delimiters, the string 'numbers' starts with '//'
  if (numbers.startsWith('//')) {
    const stringParts = numbers.split('\n');
    const delimieter = stringParts[0].slice(2, 3);

    numbersArray = stringParts[1].split(delimieter);
  } else {
    numbersArray = numbers.split(/,|\n/g);
  }

  if (numbersArray.length === 1) {
    const number = Number(numbersArray[0]);
    if (number < 0) {
      throw new Error(`Negatives not allowed; ${number}`);
    }
    return number;
  } else {
    return numbersArray.reduce((total, current) => total + Number(current), 0);
  }
}
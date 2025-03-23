export const add = (numbers?: string) => {
  if (!numbers || numbers.length <= 0) {
    return 0;
  }

  let numbersArray;

  // For custom delimiters, the string 'numbers' starts with '//'
  if (numbers.startsWith('//')) {
    const stringParts = numbers.split('\n');
    let delimieter;

    // When delimiter includes multiple chars, it is enclosed within square brackets
    // Hence, we start slice at 3 (//[) and end with 'length -1' (]) to find the actual chars in between
    if (stringParts[0].endsWith(']')) {
      delimieter = stringParts[0].slice(3, stringParts[0].length - 1);
    } else {
      // If delimieter is not enclosed within square brackets, the delimieter is a single char
      delimieter = stringParts[0].slice(2, 3);
    }

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
    const negatives = numbersArray.filter((number) => Number(number) < 0);
    if (negatives.length > 0) {
      throw new Error(`Negatives not allowed; ${negatives.join(', ')}`)
    }
    return numbersArray.reduce((total, current) => {
      const currentNum = Number(current);
      return currentNum > 1000 ? total : total + currentNum;
    }, 0);
  }
}
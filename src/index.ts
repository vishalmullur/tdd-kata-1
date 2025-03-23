export const add = (numbers?: string) => {
  if (!numbers || numbers.length <= 0) {
    return 0;
  }

  const numbersArray = numbers.split(',');
  if (numbersArray.length === 1) {
    return Number(numbersArray[0]);
  }
}
export const add = (numbers?: string) => {
  if (!numbers || numbers.length <= 0) {
    return 0;
  }

  const numbersArray = numbers.split(',');
  if (numbersArray.length === 1) {
    return Number(numbersArray[0]);
  } else {
    return numbersArray.reduce((total, current) => total + Number(current), 0);
  }
}
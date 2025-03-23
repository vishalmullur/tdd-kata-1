export const add = (numbers?: string) => {
  if (!numbers || numbers.length <= 0) {
    return 0;
  }

  let numbersArray;

  // For custom delimiters, the string 'numbers' starts with '//'
  if (numbers.startsWith('//')) {
    const stringParts = numbers.split('\n');
    const openBrackets = stringParts[0].match(/\[/g)?.length;
    
    // If there are any open square brackets ([), there can be either of - 
    // Type 1: [****] Ex: '//[****]\n1****2****3'
    // Type 2: [*][;][$] Ex: '//[*][;][$]\n1*2;3$4'
    // Type 3: [***][;;;][$$$] Ex: '//[***][;;;][$$$]\n1***2;;;3$$$4'
    if (openBrackets) {
      let valueString = stringParts[1];
      const delimieters = getDelimiters(stringParts[0]);
      delimieters.forEach((d) => {
        // We need to escape each char in the delimiter, so -
        // [****] becomes [*\\*\\*\\*]
        // [*][;] remains [*][;]
        // [***][;;;] becomes [*\\*\\*][;\\;\\;]
        const del = d.split('').join('\\');

        // Finally, we escape the first char in each type above so the RegExp becomes `\\${d}`
        // Note: backticks are being used to replace the delimter dynamically.
        // Hence, we have ${d}. This is not part of the RegExp itself.
        valueString = valueString.replace(new RegExp(`\\${del}`, 'g'), '');
      });
      numbersArray = Array.from(valueString);
    } else {
      // The delimiter is a single char
      // It is the 3rd char. Ex: '//;\n1;2;3'
      let delimieter = stringParts[0].slice(2, 3);
      numbersArray = stringParts[1].split(delimieter);
    }
  } else {
    // For non custom delimeters, we accept ',' or '\n' as delimiters
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

/**
 * Given a string of delimiters enclosed in square brackets []
 * returns array of delimiters
 * 
 * @param delimitersString string of type [***] OR [*][;][,] OR [***][;;;][$$$]
 * @returns string array [***] OR ['*',';',','] OR ['***',';;;','$$$']
 */
const getDelimiters = (delimitersString: string) => {
  const noOfDelimieters = (delimitersString.match(/\[/g) || []).length;

  let newIndex = 0;
  let dels = [];

  for (let i = 0; i < noOfDelimieters; i++) {
    const subString = delimitersString.slice(newIndex);
    const start = subString.indexOf('[');
    const end = subString.indexOf(']');

    const delimieter = subString.slice(start + 1, end);
    dels.push(delimieter);
    newIndex = newIndex + end + 1;
  }
  
  return dels;
}
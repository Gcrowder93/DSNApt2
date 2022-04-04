function reverseTitleCase(sentence) {
  return sentence
    .split(' ')
    .map((word) => {
      return word[0].toLowerCase() + word.slice(1).toUpperCase();
    })
    .join(' ');
}

console.log(reverseTitleCase('This is my sentence'));

function reverseWords(sentence) {
  return sentence
    .split(' ')
    .map((word) => {
      return word.split('').reverse().join('');
    })
    .join(' ');
}
console.log(reverseWords('alchemy rocks gold'));

function oddishOrEvenish(number) {
  const numberArray = number.toString().split('');
  const sum = numberArray.reduce(
    (previousValue, currentValue) =>
      Number(previousValue) + Number(currentValue),
    0
  );
  if (sum % 2 === 0) {
    return 'Evenish';
  } else {
    return 'Oddish';
  }
}

console.log(oddishOrEvenish(121));

const array = ['a', 'b', 'c', 'd'];

function at(arr, index) {
  if (index >= 0) {
    return arr[index];
  } else {
    return arr[arr.length + index];
  }
}

console.log(at(array, -3));

function fizzBuzz(number) {
  const arr = [];
  for (let i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      arr.push('FizzBuzz');
    } else if (i % 3 === 0) {
      arr.push('Fizz');
    } else if (i % 5 === 0) {
      arr.push('Buzz');
    } else {
      arr.push(i);
    }
  }

  return arr;
}
console.log(fizzBuzz(16));

function anagrams(wordOne, wordTwo) {
  const str1 = wordOne.split('').sort().join('');
  const str2 = wordTwo.split('').sort().join('');
  if (str1 === str2) {
    return 'True';
  } else {
    return 'False';
  }
}

console.log(anagrams('pictorialness', 'documentarily'));

//unique string

//unique char

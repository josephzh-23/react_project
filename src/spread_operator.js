const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];

// can be used with array BrowseRouter
const numbersCombined = [...numbersOne, ...numbersTwo];


const numbers = [1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers;
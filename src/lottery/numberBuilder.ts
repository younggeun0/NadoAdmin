/* eslint-disable no-plusplus */
/* eslint-disable no-continue */
const GetLotto645Number: () => Array<number> = () => {
  const numbers = new Set<number>();

  while (numbers.size < 6) {
    let number: number = Math.floor((Math.random() * 100) % 46);
    if (number === 0) {
      number = 1;
    }
    if (numbers.has(number)) continue;
    numbers.add(number);
  }

  return Array.from(numbers).sort((a, b) => a - b);
};

const GetPensionLotteryNumber: () => Array<number> = () => {
  const numbers = [];
  for (let i = 0; i < 6; i++) {
    numbers.push(Math.floor(Math.random() * 100) % 10);
  }
  return numbers;
};

export { GetLotto645Number, GetPensionLotteryNumber };

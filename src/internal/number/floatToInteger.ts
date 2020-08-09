import decimalLength from './decimalLength';
import repair from './repair';

function floatToInteger(num: number): number {
  const dLenght = decimalLength(num);
  return dLenght > 0 ? repair(num * 10 ** dLenght) : num;
}

export default floatToInteger;
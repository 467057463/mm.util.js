import decimalLength from '../internal/number/decimalLength';

/**
 *
 * @param num1 被减数
 * @param num2 减数
 * @returns 相减得到的差
 * @example
 *  1 - 0.9 = 0.1
 *  5 - 1 - 1 = 3
 */
const sub = (num1: number, num2: number, ...otherNums: number[]): number => {
  if (otherNums.length) {
    return sub(sub(num1, num2), otherNums[0], ...otherNums.slice(1));
  }
  const baseNum = 10 ** Math.max(decimalLength(num1), decimalLength(num2));
  return (num1 * baseNum - num2 * baseNum) / baseNum;
};
export default sub;

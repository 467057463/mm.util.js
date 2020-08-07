import decimalLength from '../internal/number/decimalLength';

/**
 * 精确加法
 * @param num1 加数
 * @param num2 加数
 * @returns 返回相加的和
 * @example
 *  mmUtil.add(0.1, 0.2) //0.3  不是0.3000000001
 * @example
 *  mmUtil.add(1, 1, 2) //4  多个数相加
 */
const add = (num1: number, num2: number, ...otherNums: number[]): number => {
  if (otherNums.length) {
    return add(add(num1, num2), otherNums[0], ...otherNums.slice(1));
  }
  const baseNum = 10 ** Math.max(decimalLength(num1), decimalLength(num2));
  return (num1 * baseNum + num2 * baseNum) / baseNum;
};

export default add;

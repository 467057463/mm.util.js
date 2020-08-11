import decimalLength from '../internal/number/decimalLength';

/**
 * This comment _supports_
 * @param num1 被减数
 * @param num2 减数
 * @returns 相减得到的差
 * @example
 * ``` js
 *  1 - 0.9 = 0.1 // not 0.09999999999999998
 *  5 - 1 - 1 = 3 // 多个数相减
 * ```
 */
export default function sub(num1: number, num2: number, ...otherNums: number[]): number {
  if (otherNums.length) {
    return sub(sub(num1, num2), otherNums[0], ...otherNums.slice(1));
  }
  // 只有一个参数时返回改参数
  if (num1 !== undefined && num2 === undefined) {
    return num1;
  }

  const baseNum = 10 ** Math.max(decimalLength(num1), decimalLength(num2));
  return (num1 * baseNum - num2 * baseNum) / baseNum;
}

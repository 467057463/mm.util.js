import decimalLength from '../internal/number/decimalLength';
import floatToInteger from '../internal/number/floatToInteger';

const mul = (num1: number, num2: number, ...otherNums: number[]): number => {
  if (otherNums.length) {
    return mul(mul(num1, num2), otherNums[0], ...otherNums.slice(1));
  }
  // 只有一个参数时返回该参数
  if (num1 !== undefined && num2 === undefined) {
    return num1;
  }

  const baseNum1 = floatToInteger(num1);
  const baseNum2 = floatToInteger(num2);
  const baseNum = 10 ** (decimalLength(num1) + decimalLength(num2));
  return baseNum1 * baseNum2 / baseNum;
}

export default mul;
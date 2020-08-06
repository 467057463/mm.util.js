import decimalLength from '../internal/number/decimalLength';

/**
 * 精确加法
 * @param value1
 * @param value2
 * @param othersValue
 */
const add = (value1: number, value2: number, ...othersValue: number[]): number => {
  if (othersValue.length) {
    return add(add(value1, value2), othersValue[0], ...othersValue.slice(1));
  }
  const baseNum = 10 ** Math.max(decimalLength(value1), decimalLength(value2));
  return (value1 * baseNum + value2 * baseNum) / baseNum;
};

export default add;

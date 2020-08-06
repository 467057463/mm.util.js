/**
 * @param num
 * @returns 返回参数的小数位数
 */

function decimalLength(num: number): number {
  return (String(num).split('.')[1] || '').length;
}

export default decimalLength;

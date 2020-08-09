/**
 * 
 * @param num 要修复的数字
 * @param {*} precision 有效的小数位
 * @returns 返回正确的数
 * @example
 * 0.30000000000000004 => 0.3
 * 1.0999999999999999 => 1.1
 */
function repair(num: number, precision = 15): number {
  return +parseFloat(Number(num).toPrecision(15));
}

export default repair;
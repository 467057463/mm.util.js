/**
 * @description 生成某个内区间随机数
 * @param start 开始数
 * @param end 结束数（不包括该数）
 */
function random(start: number, end: number): number {
  return Math.floor(Math.random() * (end - start) + start)
}

export default random;
/**
 * @description 查找区间中的位置
 * @param range 区间数组
 * @param value 查找的值
 * @param includeStart 数组中的第一项是否是起始项，默认值为 true 。如果设置为false时，则第一段区间的起始数为无线小的数
 * @param includeEnd 数组中最后一项是否为最后一个区间的结束项，默认值为true, 设置为false 时，则最后一段区间为最后一项到无限大的数
 * @returns index
 */
function findInRange(range: number[], value: number, includeStart = true, includeEnd = true){
  // const length = range.length;
  // const first = range[0];
  // const last = range[length - 1];
  // if(includeStart && value < first || (includeEnd && value > last)){
  //   return -1;
  // }
  // if(!includeStart){
  //   range.unshift(Number.MIN_SAFE_INTEGER)
  // }
  // if(!includeEnd){
  //   range.push(Number.MAX_SAFE_INTEGER)
  // }
  // let index = range.findIndex(item =>  item > value);
  // if(includeEnd && last === value){
  //   index = length - 1;
  // }
  // return index - 1;

  const length = range.length;
  const first = range[0];
  const last = range[length - 1];
  // 当数组小于两项时建议用if判断，这里直接返回-1
  if(length < 2){
    return -1;
  }
  if(includeStart && value < first || (includeEnd && value > last)){
    return -1;
  }
  if(!includeStart && value < first){
    return 0;
  }  
  let index = range.findIndex(item =>  item > value)
  if(includeEnd && last === value){
    index = length - 1;
  }
  if(!includeEnd && value >= last){
    index = length;
  } 
  return index - (includeStart ? 1 : 0);
}

export default findInRange;
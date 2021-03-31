interface types {
  [k: string]: string;
}
let class2type: types ={};
"Boolean Number String Function Array Date RegExp Object Error Null Undefined".split(" ")
.map((item)=>{
  class2type["[object " + item + "]"] = item.toLowerCase();
})

export default function type(obj: any):string {
  return typeof obj === 'object' || typeof obj === 'function' ?
    class2type[Object.prototype.toString.call(obj)] || 'object' :
    typeof obj;
}
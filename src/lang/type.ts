const reg = /\[object ([\w-]+)\]/;
export default function type(obj: any):string {
  if(typeof obj === 'object' || typeof obj === 'function'){
    const match = Object.prototype.toString.call(obj).match(reg)
    return match ? match[1].toLowerCase() : 'object'
  }else{
    return typeof obj;
  }
}
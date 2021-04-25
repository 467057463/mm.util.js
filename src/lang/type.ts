const reg = /\[object ([\w-]+)\]/;
export default function type(obj: any):string {
  if(typeof obj === 'object' || typeof obj === 'function'){
    const match = Object.prototype.toString.call(obj).match(reg);
    if(match){
      const type = match[1]
      return type[0].toLowerCase() + type.slice(1)
    }else{
      return 'object';
    }
  }else{
    return typeof obj;
  }
}
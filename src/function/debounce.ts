export default function debounce(fn: Function, wait: number, immediate: boolean){
  let timer: any;
  let result: any;
  return function(){
     // @ts-ignore
    let context = this;
    let args = arguments
    if(timer) clearTimeout(timer);
    if(immediate){
      let callNow = !timer;
      timer = setTimeout(function(){
        timer = null;
      }, wait)
      if(callNow) result = fn.apply(context, args)
    }else{
      timer = setTimeout(function(){
        fn.apply(context, args)
      }, wait)
    }    
    return result;
  }
}

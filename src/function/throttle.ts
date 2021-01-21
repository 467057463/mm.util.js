export default function throttle(fn: Function, wait: number, leading = true, trailing = true){
  let timer: any;
  let previous = 0;
  return function(){
    // @ts-ignore
    let context = this;
    let args = arguments;
    let now = Number(new Date());
    if(!previous && !leading){
      previous = now;
    }
    let remaining = wait - (now - previous);
    if(remaining <= 0 || remaining > wait){  
      if(timer){
        clearTimeout(timer)
        timer = null;
      }
      fn.apply(context, args)
      previous = now;
    }else if(!timer && trailing){
      timer = setTimeout(function(){
        previous = leading ? Number(new Date()) : 0;
        timer = null;
        fn.apply(context, args)
      }, remaining)
    }
  }
}
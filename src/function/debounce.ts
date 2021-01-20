export default function debounce(fn: Function, wait: number, immediate: boolean){
  var timer: any;
  var result: any;
  return function(){
     // @ts-ignore
    var context = this;
    var args = arguments
    if(timer) clearTimeout(timer);
    if(immediate){
      var callNow = !timer;
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

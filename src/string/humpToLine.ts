const reg = /[A-Z]/g;
const trimLeftReg = /^[A-Z]/g
export default function humpToLine(value:string):string{
  return value.replace(trimLeftReg, function(p1: string){
    return p1.toLowerCase()
  })
  .replace(reg, function(p1: string){
    return `_${p1.toLowerCase()}`
  })
}

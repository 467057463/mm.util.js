const reg = /_+([a-z])/g;
const trimLineReg = /^_+|_+$/g
export default function lineToHump(value:string):string{
  return value.replace(trimLineReg, '')
    .replace(reg, function(p1:string, p2:string){
      return p2.toUpperCase()
    })
}
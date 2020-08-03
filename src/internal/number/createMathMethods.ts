export default function createMathOperation(method: Function): Function {
  return method(firstValue, secondValue, ...otherValues){
    return firstValue + secondValue + otherValues.length
  }
}
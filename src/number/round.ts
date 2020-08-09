import repair from '../internal/number/repair';
import mul from './mul';
import divide from './divide';

function round(num: number, ratio = 0): number {
  const baseNum = repair(10 ** ratio);
  return divide(Math.round(mul(num, baseNum)), baseNum)
}

export default round;
let fraction = ['角', '分'];
let digit = [
  '零', '壹', '贰', '叁', '肆',
  '伍', '陆', '柒', '捌', '玖'
];
let unit = [
  ['元', '万', '亿'],
  ['', '拾', '佰', '仟']
];

// 向右移位
function shiftRight(number: number, digit: any) {
  digit = parseInt(digit, 10);
  var value = number.toString().split('e');
  return +(value[0] + 'e' + (value[1] ? (+value[1] + digit) : digit))
}

// 向左移位
function shiftLeft(number: number, digit: any) {
  digit = parseInt(digit, 10);
  var value = number.toString().split('e');
  return +(value[0] + 'e' + (value[1] ? (+value[1] - digit) : -digit))
}

const digitUppercase = function (num: number): string {
  let result = '';
  const head = num < 0 ? '欠' : '';
  num = Math.abs(num);

  for (var i = 0; i < fraction.length; i++) {
    result += (digit[Math.floor(shiftRight(num, 1 + i)) % 10] + fraction[i]).replace(/零./, '');
  }

  result = result || '整';
  num = Math.floor(num);
  for (var i = 0; i < unit[0].length && num > 0; i++) {
    var p = '';
    for (var j = 0; j < unit[1].length && num > 0; j++) {
      p = digit[num % 10] + unit[1][j] + p;
      num = Math.floor(shiftLeft(num, 1));
    }
    result = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + result;
  }
  return head + result.replace(/(零.)*零元/, '元')
    .replace(/(零.)+/g, '零')
    .replace(/^整$/, '零元整');
}

export default digitUppercase;
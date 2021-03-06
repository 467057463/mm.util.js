function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/**
 * @param num
 * @returns 返回参数的小数位数
 */
function decimalLength(num) {
  return (String(num).split('.')[1] || '').length;
}

/**
 * 加法
 * @category number 
 * @param num1 加数
 * @param num2 加数
 * @returns 返回相加的和
 * @example
 * ``` js
 *  mmUtil.add(0.1, 0.2) //0.3  不是0.3000000001
 *  mmUtil.add(1, 1, 2) //4  多个数相加
 *  mmUtil.add(10) //10
 * ```
 */

var add = function add(num1, num2) {
  for (var _len = arguments.length, otherNums = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    otherNums[_key - 2] = arguments[_key];
  }

  if (otherNums.length) {
    return add.apply(void 0, [add(num1, num2), otherNums[0]].concat(_toConsumableArray(otherNums.slice(1))));
  } // 只有一个参数时返回改参数


  if (num1 !== undefined && num2 === undefined) {
    return num1;
  } // return repair(num1 + num2)


  var baseNum = Math.pow(10, Math.max(decimalLength(num1), decimalLength(num2)));
  return (num1 * baseNum + num2 * baseNum) / baseNum;
};

/**
 * This comment _supports_
 * @param num1 被减数
 * @param num2 减数
 * @returns 相减得到的差
 * @example
 * ``` js
 *  1 - 0.9 = 0.1 // not 0.09999999999999998
 *  5 - 1 - 1 = 3 // 多个数相减
 * ```
 */

function sub(num1, num2) {
  for (var _len = arguments.length, otherNums = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    otherNums[_key - 2] = arguments[_key];
  }

  if (otherNums.length) {
    return sub.apply(void 0, [sub(num1, num2), otherNums[0]].concat(_toConsumableArray(otherNums.slice(1))));
  } // 只有一个参数时返回改参数


  if (num1 !== undefined && num2 === undefined) {
    return num1;
  }

  var baseNum = Math.pow(10, Math.max(decimalLength(num1), decimalLength(num2)));
  return (num1 * baseNum - num2 * baseNum) / baseNum;
}

/**
 * 
 * @param num 要修复的数字
 * @param {*} precision 有效的小数位
 * @returns 返回正确的数
 * @example
 * 0.30000000000000004 => 0.3
 * 1.0999999999999999 => 1.1
 */
function repair(num) {
  return +parseFloat(Number(num).toPrecision(15));
}

function floatToInteger(num) {
  var dLenght = decimalLength(num);
  return dLenght > 0 ? repair(num * Math.pow(10, dLenght)) : num;
}

var mul = function mul(num1, num2) {
  for (var _len = arguments.length, otherNums = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    otherNums[_key - 2] = arguments[_key];
  }

  if (otherNums.length) {
    return mul.apply(void 0, [mul(num1, num2), otherNums[0]].concat(_toConsumableArray(otherNums.slice(1))));
  } // 只有一个参数时返回该参数


  if (num1 !== undefined && num2 === undefined) {
    return num1;
  }

  var baseNum1 = floatToInteger(num1);
  var baseNum2 = floatToInteger(num2);
  var baseNum = Math.pow(10, decimalLength(num1) + decimalLength(num2));
  return baseNum1 * baseNum2 / baseNum;
};

var divide = function divide(num1, num2) {
  for (var _len = arguments.length, otherNums = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    otherNums[_key - 2] = arguments[_key];
  }

  if (otherNums.length) {
    return divide.apply(void 0, [divide(num1, num2), otherNums[0]].concat(_toConsumableArray(otherNums.slice(1))));
  } // 只有一个参数时返回该参数


  if (num1 !== undefined && num2 === undefined) {
    return num1;
  }

  var baseNum1 = floatToInteger(num1);
  var baseNum2 = floatToInteger(num2);
  var baseNum = repair(Math.pow(10, decimalLength(num1) - decimalLength(num2)));
  return baseNum1 / baseNum2 / baseNum;
};

function round(num) {
  var ratio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var baseNum = repair(Math.pow(10, ratio));
  return divide(Math.round(mul(num, baseNum)), baseNum);
}

/**
 * @description 生成某个内区间随机数
 * @param start 开始数
 * @param end 结束数（不包括该数）
 */
function random(start, end) {
  return Math.floor(Math.random() * (end - start) + start);
}

/**
 * @internal
 */
var fraction = ['角', '分'];
/**
 * @internal
 */

var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
/**
 * @internal
 */

var unit = [['元', '万', '亿'], ['', '拾', '佰', '仟']];
/**
 *  向右移位
 * @internal
 * @param number 
 * @param digit 
 */

function shiftRight(number, digit) {
  var value = number.toString().split('e');
  return Number(value[0] + 'e' + (value[1] ? Number(value[1]) + digit : digit));
}
/**
 *  向左移位
 * @internal
 * @param number 
 * @param digit 
 */


function shiftLeft(number, digit) {
  var value = number.toString().split('e');
  return Number(value[0] + 'e' + (value[1] ? Number(value[1]) - digit : -digit));
}
/**
 * @category number
 * @param num 
 */


var digitUppercase = function digitUppercase(num) {
  var result = '';
  var head = num < 0 ? '欠' : '';
  var number = Math.abs(num);

  for (var i = 0; i < fraction.length; i++) {
    result += (digit[Math.floor(shiftRight(number, 1 + i)) % 10] + fraction[i]).replace(/零./, '');
  }

  result = result || '整';
  number = Math.floor(number);

  for (var _i = 0; _i < unit[0].length && number > 0; _i++) {
    var p = '';

    for (var j = 0; j < unit[1].length && number > 0; j++) {
      p = digit[number % 10] + unit[1][j] + p;
      number = Math.floor(shiftLeft(number, 1));
    }

    result = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][_i] + result;
  }

  return head + result.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
};

/**
 * @description 查找区间中的位置
 * @param range 区间数组
 * @param value 查找的值
 * @param includeStart 数组中的第一项是否是起始项，默认值为 true 。如果设置为false时，则第一段区间的起始数为无线小的数
 * @param includeEnd 数组中最后一项是否为最后一个区间的结束项，默认值为true, 设置为false 时，则最后一段区间为最后一项到无限大的数
 * @returns index
 */
function findInRange(range, value) {
  var includeStart = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var includeEnd = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var length = range.length;
  var first = range[0];
  var last = range[length - 1]; // 当数组小于两项时建议用if判断，这里直接返回-1

  if (length < 2) {
    return -1;
  }

  if (includeStart && value < first || includeEnd && value > last) {
    return -1;
  }

  if (!includeStart && value < first) {
    return 0;
  }

  var index = range.findIndex(function (item) {
    return item > value;
  });

  if (includeEnd && last === value) {
    index = length - 1;
  }

  if (!includeEnd && value >= last) {
    index = length;
  }

  return index - (includeStart ? 1 : 0);
}

var reg = /\[object ([\w-]+)\]/;
function type(obj) {
  if (_typeof(obj) === 'object' || typeof obj === 'function') {
    var match = Object.prototype.toString.call(obj).match(reg);

    if (match) {
      var _type = match[1];
      return _type[0].toLowerCase() + _type.slice(1);
    } else {
      return 'object';
    }
  } else {
    return _typeof(obj);
  }
}

var reg$1 = /_+([a-z])/g;
var trimLineReg = /^_+|_+$/g;
function lineToHump(value) {
  return value.replace(trimLineReg, '').replace(reg$1, function (p1, p2) {
    return p2.toUpperCase();
  });
}

var reg$2 = /[A-Z]/g;
var trimLeftReg = /^[A-Z]/g;
function humpToLine(value) {
  return value.replace(trimLeftReg, function (p1) {
    return p1.toLowerCase();
  }).replace(reg$2, function (p1) {
    return "_".concat(p1.toLowerCase());
  });
}

var index = {
  add: add,
  sub: sub,
  mul: mul,
  divide: divide,
  round: round,
  random: random,
  digitUppercase: digitUppercase,
  findInRange: findInRange,
  type: type,
  lineToHump: lineToHump,
  humpToLine: humpToLine
};

export default index;

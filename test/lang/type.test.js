import mmUtil from '../../src';

test('type 类型', () => {
  expect(mmUtil.type([])).toBe('array')
  expect(mmUtil.type({})).toBe('object')
  expect(mmUtil.type('s')).toBe('string')
  expect(mmUtil.type(new String('s'))).toBe('string')
  expect(mmUtil.type(5)).toBe('number')
  expect(mmUtil.type(new Number(5))).toBe('number')
  expect(mmUtil.type(new Date())).toBe('date')
  expect(mmUtil.type(/reg/gi)).toBe('regExp')
})
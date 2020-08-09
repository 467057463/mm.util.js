import mmUtil from '../src';

test('add 加法', () => {
  expect(mmUtil.add(0.1, 0.2)).toBe(0.3)
  expect(mmUtil.add(0.1, 0.2, 1)).toBe(1.3)
  expect(mmUtil.add(0.1)).toBe(0.1)
})

test('mul 乘法', () => {
  expect(mmUtil.mul(3, 3)).toBe(9)
  expect(mmUtil.mul(0.3, 3)).toBe(0.9)
  expect(mmUtil.mul(1, 1, 1)).toBe(1)
  expect(mmUtil.mul(1.005, 10)).toBe(10.05)
})

test("divide 除法", () => {
  expect(mmUtil.divide(1.21, 1.1)).toBe(1.1)
  expect(mmUtil.divide(121, 1.1)).toBe(110)
  expect(mmUtil.divide(121, 0)).toBe(Infinity)
  expect(mmUtil.divide(1.005, 10)).toBe(0.1005)
})


test("round 四舍五入", () => {
  expect(mmUtil.round(1.005, 2)).toBe(1.01)
})
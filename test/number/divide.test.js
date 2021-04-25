import mmUtil from '../../src';

test("divide 除法", () => {
  expect(mmUtil.divide(1.21, 1.1)).toBe(1.1)
  expect(mmUtil.divide(121, 1.1)).toBe(110)
  expect(mmUtil.divide(121, 0)).toBe(Infinity)
  expect(mmUtil.divide(1.005, 10)).toBe(0.1005)
})

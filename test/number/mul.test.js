import mmUtil from '../../src';

test('mul 乘法', () => {
  expect(mmUtil.mul(3, 3)).toBe(9)
  expect(mmUtil.mul(0.3, 3)).toBe(0.9)
  expect(mmUtil.mul(1, 1, 1)).toBe(1)
  expect(mmUtil.mul(1.005, 10)).toBe(10.05)
})
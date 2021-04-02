import mmUtil from '../../src';

test('sub 减法', () => {
  expect(mmUtil.sub(1, 0.9)).toBe(0.1)
  expect(mmUtil.sub(5, 1, 1)).toBe(3)
  expect(mmUtil.sub(5)).toBe(5)
})

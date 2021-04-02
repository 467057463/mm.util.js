import mmUtil from '../../src';

test('random 随机数', () => {
  expect(mmUtil.random(1, 10)).toBeLessThan(10)
  expect(mmUtil.random(1, 10)).toBeGreaterThanOrEqual(1)
})

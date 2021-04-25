import mmUtil from '../../src';

test('add 加法', () => {
  expect(mmUtil.add(0.1, 0.2)).toBe(0.3)
  expect(mmUtil.add(0.1, 0.2, 1)).toBe(1.3)
  expect(mmUtil.add(0.1)).toBe(0.1)
})






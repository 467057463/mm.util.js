import mmUtil from '../../src';

let rang = [0, 60, 80, 100];

test('findInRange 区间位置查询', () => {
  expect(mmUtil.findInRange(rang, -1)).toBe(-1)
  expect(mmUtil.findInRange(rang, 0)).toBe(0)
  expect(mmUtil.findInRange(rang, 1)).toBe(0)
  expect(mmUtil.findInRange(rang, 99)).toBe(2)
  expect(mmUtil.findInRange(rang, 100)).toBe(2)
  expect(mmUtil.findInRange(rang, 101)).toBe(-1)

  expect(mmUtil.findInRange(rang, -1, false, false)).toBe(0)
  expect(mmUtil.findInRange(rang, 0, false, false)).toBe(1)
  expect(mmUtil.findInRange(rang, 1, false, false)).toBe(1)
  expect(mmUtil.findInRange(rang, 99, false, false)).toBe(3)
  expect(mmUtil.findInRange(rang, 100, false, false)).toBe(4)
  expect(mmUtil.findInRange(rang, 101, false, false)).toBe(4)

  expect(mmUtil.findInRange(rang, 0, true, false)).toBe(0)
  expect(mmUtil.findInRange(rang, 1, true, false)).toBe(0)
  expect(mmUtil.findInRange(rang, -1, true, false)).toBe(-1)
  expect(mmUtil.findInRange(rang, 99, true, false)).toBe(2)
  expect(mmUtil.findInRange(rang, 100, true, false)).toBe(3)
  expect(mmUtil.findInRange(rang, 101, true, false)).toBe(3)

  expect(mmUtil.findInRange(rang, -1, false)).toBe(0)
  expect(mmUtil.findInRange(rang, 1, false)).toBe(1)
  expect(mmUtil.findInRange(rang, 0, false)).toBe(1)
  expect(mmUtil.findInRange(rang, 99, false)).toBe(3)
  expect(mmUtil.findInRange(rang, 100, false)).toBe(3)
  expect(mmUtil.findInRange(rang, 101, false)).toBe(-1)
})






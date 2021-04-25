import mmUtil from '../../src';

test("round 四舍五入", () => {
  expect(mmUtil.round(1.005, 2)).toBe(1.01)
})
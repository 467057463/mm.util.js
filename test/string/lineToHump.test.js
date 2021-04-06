import mmUtil from '../../src';

test('lineToHump 下划线转驼峰', () => {
  expect(mmUtil.lineToHump('get_name')).toBe('getName')
  expect(mmUtil.lineToHump('_get_name')).toBe('getName')
  expect(mmUtil.lineToHump('___get_name___')).toBe('getName')
  expect(mmUtil.lineToHump('___get_____name___')).toBe('getName')
})
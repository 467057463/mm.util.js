import mmUtil from '../../src';

test('humpToLine 驼峰转下划线', () => {
  expect(mmUtil.humpToLine('getName')).toBe('get_name')
  expect(mmUtil.humpToLine('GetName')).toBe('get_name')
  expect(mmUtil.humpToLine('GetNameS')).toBe('get_name_s')
  expect(mmUtil.humpToLine('GETNAME')).toBe('g_e_t_n_a_m_e')
})
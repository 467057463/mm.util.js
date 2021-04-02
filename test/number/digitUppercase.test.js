import mmUtil from '../../src';

test('digitUppercase 人民币转大写金额', () => {
  expect(mmUtil.digitUppercase(100)).toBe('壹佰元整')
  expect(mmUtil.digitUppercase(-55.11)).toBe('欠伍拾伍元壹角壹分')
})

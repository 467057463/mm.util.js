import { cat } from '../src/add';

test('add 1 + 2 = 3', () => {
  expect(cat(1, 2)).toBe(3)
})
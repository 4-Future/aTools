import { upperCase } from '@/string';

describe('upperCase cases', () => {
  test('upperCase', () => {
    expect(upperCase('abc')).toBe('ABC');
  });
});

import cipher from './index';

test('cipher function exists', () => {
  expect(cipher).toBeDefined();
});

test('cipher abcz!ABCZ#', () => {
  expect(cipher('abcz!ABCZ#')).toBe('bcda!BCDA#');
});

test ('unaltered string', () => {
  expect(cipher('123!!')).toBe('123!!');
});

test ('symbols keeps', () => {
  expect(cipher('dulce:)')).toBe('evmdf:)');
});

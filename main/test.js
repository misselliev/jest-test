import analyzer from './analyzer';
const calculator = require('./calculator');
const capitalize = require('./capitalize');
import cipher from './cipher';
const reverse = require('./reverse');


// ======= Array Analyzer =======
test('analyzer function exists', () => {
  expect(analyzer).toBeDefined();
});

const arr = [1, 2, 3, 4, 5, 20];
const obj = analyzer(arr);

test('obj.average is 6', () => {
  expect(obj.average).toBe(6);
});

test('obj.length is 6', () => {
  expect(obj.length).toBe(6);
});

test('obj.min is 1', () => {
  expect(obj.min).toBe(1);
});

test('obj.max is 20', () => {
  expect(obj.max).toBe(20);
});


// ======= Calculator =======

test('calculator function exists', () => {
  expect(calculator).toBeDefined();
});

test('add 2 + 2', () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test('add 2 + (-3)', () => {
  expect(calculator.add(2, -3)).toBe(-1);
});

test('substract 2 - 2', () => {
  expect(calculator.subtract(2, 2)).toBe(0);
});

test('substract 2 - (-2)', () => {
  expect(calculator.subtract(2, -2)).toBe(4);
});

test('multiply 2 * 3', () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});

test('divide 8/2', () => {
  expect(calculator.divide(8, 2)).toBe(4);
});


// ======= Capitalize =======

test('capitalize function exists', () => {
  expect(capitalize).toBeDefined();
});

test('capitalize capitalizes a string', () => {
  expect(capitalize('abcde')).toEqual('Abcde');
});

test('capitalize capitalizes a string', () => {
  expect(capitalize('dulce')).toEqual('Dulce');
});


// ======= Caesar Cipher =======

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


// ======= Reverse String =======

test('reverse function exists', () => {
  expect(reverse).toBeDefined();
});

test('reverse reverses a string', () => {
  expect(reverse('abcde')).toEqual('edcba');
});

test('reverse reverses a string', () => {
  expect(reverse('ab ab')).toEqual('ba ba');
});

import analyzer from './analyzer';

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
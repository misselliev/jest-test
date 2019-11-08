const analyzer = (array) => {
  const data = {};
  data['average'] = Math.round((array.reduce((a, b) => a + b)) / array.length);
  data['max'] = Math.max(...array);
  data['min'] = Math.min(...array);
  data['length'] = array.length;
  return data;
};
console.log(analyzer([1, 2, 3, 4, 5, 20]));
module.exports = analyzer;
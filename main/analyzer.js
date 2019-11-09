const analyzer = (array) => {
  return {
    average: Math.round((array.reduce((a, b) => a + b)) / array.length),
    length: array.length,
    max: Math.max(...array),
    min: Math.min(...array)
  };
};

module.exports = analyzer;
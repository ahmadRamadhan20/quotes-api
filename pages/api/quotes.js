const quotes = require("../../data");

const getNumberBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export default (req, res) => {
  const id = getNumberBetween(1, quotes.length);
  const result = quotes.find((item) => item.id == id);
  console.log(id);
  res.statusCode = 200;
  res.json(result);
};

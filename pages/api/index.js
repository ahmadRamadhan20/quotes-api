const quotes = require("../../data");
export default (req, res) => {
  res.statusCode = 200;
  res.json(quotes);
};

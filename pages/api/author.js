import quotes from "../../data";

export default (req, res) => {
  const author = quotes.map((index) => index.author);
  let yeay = Array.from(new Set(author));
  console.log(yeay);
  if (yeay !== undefined) {
    res.json(yeay);
  }
};

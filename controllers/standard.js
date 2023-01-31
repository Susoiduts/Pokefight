//say hello response
const sayHello = (req, res) => {
  res.status(200).send("Hello World");
};

module.exports = {
  sayHello,
};

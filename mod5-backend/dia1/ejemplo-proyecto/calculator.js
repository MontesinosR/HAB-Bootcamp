const calculator = ({ a, b, operationType }) => {
  switch (operationType) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
  }
};

module.exports = calculator;

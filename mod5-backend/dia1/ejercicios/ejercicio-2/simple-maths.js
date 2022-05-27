// Si num es una string que no se puede multiplicar, lanzamos un error (si es una string de un número, no hay problema)

const double = (num) => {
  try {
    if (isNaN(num)) {
      throw new TypeError("Num debe de ser un valor numérico");
    }

    return num * 2;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = double;

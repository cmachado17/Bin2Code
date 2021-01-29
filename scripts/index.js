const convertir = () => {
  let x = 75;
  respuesta = "";

  while (x >= 1) {
    y = x % 2;

    x = Math.floor(x / 2);

    respuesta = respuesta + y;
  }
  invertir(respuesta);
};

const invertir = (resultado) => {
  x = resultado.length;
  binario = "";

  while (x >= 0) {
    binario = binario + resultado.charAt(x);
    x--;
  }
  return console.log(binario);
};

convertir();



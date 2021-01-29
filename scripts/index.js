const convertir = (e) => {
  e.preventDefault();
  respuesta = "";
  let lugarResultado = document.querySelector('#resultado');
  let lugarDecimal = document.querySelector('#lugarDecimal')
  let x = document.querySelector("#decimal").value;

  if (x == 0){
    lugarResultado.innerHTML = 0
    lugarDecimal.innerHTML = 0
  }else{
    lugarDecimal.innerHTML = x
    while (x >= 1) {
        y = x % 2;
    
        x = Math.floor(x / 2);
    
        respuesta = respuesta + y;
      }
      invertir(respuesta);
  }
  document.querySelector("#decimal").value = 0

};

const invertir = (resultado) => {
let lugarResultado = document.querySelector('#resultado');

  x = resultado.length;
  binario = "";

  while (x >= 0) {
    binario = binario + resultado.charAt(x);
    x--;
  }
  return lugarResultado.innerHTML = binario;
};

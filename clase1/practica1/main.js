const boton = document.getElementById('boton');

boton.addEventListener('click', () => {
  const select = document.getElementById('select');
  const input = document.getElementById('input');
  const output = document.getElementById('output');

  //No cambiar nada por encima de esta linea
  //Usar este espacio para seguir las instrucciones

  //No cambiar nada por debajo de esta linea

  if (nacionalidad == 'venezuela') {
    frase = 'Hablame el mio, escuche que andan buscando un tal';
  } else if (nacionalidad == 'colombia') {
    frase = 'Que hubo parcero, por ahi andan pendiente disque de un tal';
  } else {
    frase = `Wasup doggy, I'm told they're looking for a`;
  }

  const texto = `${frase} ${nombre}`;

  output.innerHTML = texto;
});

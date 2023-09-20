//puedes ignorar lo que sigue
const boton = document.getElementById('boton');
const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', (e) => e.preventDefault());

boton.addEventListener('click', (e) => {
  e.preventDefault();
  const formulario = document.getElementById('formulario');
  const formData = new FormData(formulario);
  const output = document.getElementById('output');
  output.innerHTML = '';
  //puedes ignorar hasta aqui

  //En las siguientes variables estan guardados los datos introducidos en el formulario
  const nombre = document.getElementById('nombre').value; //string
  const edad = document.getElementById('edad').value; //number
  const genero = formData.get('genero'); //string
  const facebook = formData.get('facebook'); //boolean
  const instagram = formData.get('instagram'); //boolean
  const discord = formData.get('Discord'); //boolean

  //Aqui creamos la pregunta pregunta que titula la respuesta
  const nodoTextoPregunta = document.createElement('p');
  nodoTextoPregunta.appendChild(document.createTextNode(`¿Que cosas podria hacer ${nombre} con ${edad}?`));

  //Aqui procesamos el texto relacionado con la edad
  const nodoTextoEdad = document.createElement('p');
  let textoEdad;
  if (edad >= 18) {
    textoEdad = 'Puede comprar cerveza';
  } else {
    textoEdad = 'No puede comprar cerveza';
  }
  nodoTextoEdad.appendChild(document.createTextNode(textoEdad));

  //Aqui procesamos el texto relacionado con el genero
  const nodoTextoGenero = document.createElement('p');
  let textoGenero;
  if (true) {
    textoGenero = '';
  } else {
    textoGenero = '';
  }
  nodoTextoGenero.appendChild(document.createTextNode(textoGenero));

  //Aqui procesamos el texto relacionado con las redes sociales
  const nodoTextoSocial = document.createElement('p');
  let textoSociales;
  if (true) {
    textoSociales = '';
  } else {
    textoSociales = '';
  }
  nodoTextoSocial.appendChild(document.createTextNode(textoSociales));

  output.appendChild(nodoTextoPregunta);
  output.appendChild(nodoTextoEdad);
  output.appendChild(nodoTextoGenero);
  output.appendChild(nodoTextoSocial);

  //formulario.reset();
});

import { pizzas } from "./db.js"


export  const buscarPizzaNombre = (resultado) => {
  pizzas.map(pizza => {
    const h2 = document.querySelector("#card > h2")
    const h4 = document.querySelector("#card > h4")
    const img = document.querySelector("#card > img")
    const parrafo = document.querySelector("#card > p")
    
    if (resultado == pizza.name)  {
      h2.textContent = `Nombre: ${pizza.name} `
      h4.textContent = `Precio: ${pizza.precio}`
      img.src = `${pizza.url}`
      parrafo.textContent = `Ingredientes: ${pizza.ingredientes}`
    }  else {if ((pizzas.find(pizza => pizza.name == resultado)) == undefined) {
      mostrarError("Esta pizza no existe")
      console.log("Entra aca")
    } 
    } 
  })
  
}


export function mostrarError(mensaje) {
  const h2 = document.querySelector("#card > h2")
  const h4 = document.querySelector("#card > h4")
  const img = document.querySelector("#card > img")
  const parrafo = document.querySelector("#card > p")
  const inputBusqueda = document.querySelector("#search")

  h2.textContent = mensaje;
  inputBusqueda.style = 'background-color: red;'
  h4.textContent = "-";
  img.src = "./assets/pagina-error-404-distorsion_23-2148105404.jpg"
  parrafo.textContent = `-`
  setTimeout(() => {
    inputBusqueda.style = 'background-color: withe;'
    h2.innerText = 'Realiza tu busqueda';
    img.src = './assets/52076787-ilustración-de-una-mascota-cocinero-italiano.jpg';
    h4.innerText = '';
    parrafo.innerText = '';
  }, 4500)
  
}
import {buscarPizzaNombre, mostrarError } from "./buscarPizzas.js";


const formBusqueda = document.querySelector(".Form-busqueda")
const inputBusqueda = document.querySelector("#search")
const boton = document.querySelector("body > form > button")



formBusqueda.addEventListener("submit", (e) => {
  e.preventDefault();
  const resultado2 = inputBusqueda.value; 
  buscarPizzaNombre(resultado2)

  if(!resultado2) {
    const h2 = document.querySelector("#card > h2")
    mostrarError('Por favor complete el campo')
  } else {
      const resultado2 = inputBusqueda.value; 
      buscarPizzaNombre(resultado2)  
    } 
});


/* window.addEventListener("load", () => {
	localStorage.setItem("pizzas", JSON.stringify(pizzas));
})

const pizzasLocal = localStorage.getItem('pizzas')
const strPizzasLocal = JSON.parse(pizzasLocal) */
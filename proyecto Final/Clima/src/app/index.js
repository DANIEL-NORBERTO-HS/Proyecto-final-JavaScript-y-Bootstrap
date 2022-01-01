/*
Autor:DANIEL NORBERTO HERNANDEZ SANTIAGO

este archivo: index.js es el que permite poder empezar a llamar otras clases, componentes y demas
de otros js*/

const {Clima} = require('./Clima');
//const clima = new Clima('Chetumal', 'mx');
const {UI} = require("./UI");
const {Store}= require("./Store");

const store= new Store();
const {ciudad, countryCode }= store.getLocationData();

const ui= new UI();
const clima = new Clima(ciudad, countryCode);
require('./index.css');

async function fetchClima(){
    const data = await clima.getClima();
    console.log(data);
    ui.render(data);
}
document.getElementById('w-change-btn').addEventListener('click',(e) =>{
   const ciudad= document.getElementById('ciudad').value;
   const countryCode= document.getElementById('countryCode').value;
   clima.cambioLacali(ciudad, countryCode);
   store.setLocationData(ciudad, countryCode);
   fetchClima();
   e.preventDefault();
});



document.addEventListener('DOMContentLoaded',fetchClima);
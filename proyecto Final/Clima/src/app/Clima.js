/*
esta clase se encarga solo de pedir los datos de la APi

este es el archivo encargado de pedir los datos del clima a la API openweathermap
*/
export class Clima{
    constructor(ciudad, countryCode){
        this.apikey ='7b4ccade8096bb4deb08e7f187035f7b';
        this.ciudad = ciudad;
        this.countryCode = countryCode;
    }
//este metodo toma la ciudad,apikey y el countryCode para hacer una peticion a internet, una vez obtenidos retorna esos datos
   async getClima(){
        const URI = `http://api.openweathermap.org/data/2.5/weather?q=${this.ciudad},${this.countryCode}&appid=${this.apikey}&units=metric`;
       const response = await fetch(URI);
       const data = await response.json();
       return data;
    }

    cambioLacali(ciudad,countryCode){
        this.ciudad = ciudad;
        this.countryCode = countryCode;
    }
}
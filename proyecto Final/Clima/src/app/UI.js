//este archivo o clase se encarga de manipular el DOM y cambiar la interfaz

export class UI{
    constructor(){
        this.location= document.getElementById("localizacion-clima");
        this.desc = document.getElementById("descripcion-clima");
        this.string= document.getElementById("clima-cadena");
        this.humedad= document.getElementById("Humedad");
       this.viento= document.getElementById("viento");

    }

    render(clima){
        this.location.textContent = clima.name + '/' + clima.sys.country;
        this.desc.textContent= clima.weather[0]['descripton'];
        this.string.textContent=clima.main.temp + '°c';
        this.humedad.textContent= 'Humedad: '+ clima.main.humidity + '%';
        this.viento.textContent="Velocidad del viento: "+ clima.wind.speed+ "km/s";
    }
}
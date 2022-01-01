//Este archivo se encarga de almacenar los datos de localStorage

export class Store{
    constructor(){
        this.ciudad;
        this.contryCode;
        this.defaultCity= "cancun";
        this.defaultCountry = "mx";
    }
    getLocationData(){
        if(localStorage.getItem("ciudad")== null){
            this.ciudad= this.defaultCity;
        }else{
            this.ciudad = localStorage.getItem("ciudad");
        }
        if(localStorage.getItem("countryCode")== null){
            this.contryCode = this.defaultCountry;
        }else{
            this.contryCode= localStorage.getItem("countryCode");
        }
        return{
            ciudad: this.ciudad,
            contryCode: this.contryCode
        }
    }

    setLocationData(ciudad,countryCode){
        localStorage.setItem("ciudad", ciudad);
        localStorage.setItem("countryCode", countryCode);
    }

}
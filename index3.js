/**
 * Función Flecha
 */

a = function(param1){
     console.log("Esto es una función anónima como ya las conocemos. Param1 : "+param1);
};

b = (param1) => { 
    console.log("Esto es una función flecha. Param1 : "+param1); 
};

a("Valor1");
b("Valor2");



/**
 * Variable THIS en Función Flecha
 */

function Persona() {
    var self = this;
    self.edad = 0;

    //Ponemos un timer para cada segundo llamar a la función crecer
    setInterval(function crecer() {
      console.log(this);
      self.edad++;
      console.log("Ahora tengo: "+self.edad+" años");
    }, 1000);
}

function PersonaFlecha() {
    this.edad = 0;

    //Ponemos un timer para cada segundo llamar a la función flecha
    setInterval( () => { 
      this.edad++;
      console.log("Ahora tengo: "+self.edad+" años");
    }, 1000);
}

p = new Persona();
var nombre = "sergio";
//estructura switch
switch (nombre) {
    case "sergio":
        console.log("el nombre es sergio");
        break;
    case "rolando":
        console.log("el nombre es sergio");
        break;
    case "victor":
        console.log("el nombre es sergio");
        break;

    default:
        console.log("el nombre no esta dentro de los propuestos");
        break;
}
//estructura dowhile
do {
    var a=5;
    var b=5;
    var resultado=a+b;
    console.log(resultado);
} while (resultado<20);//se repetira el bucle si el resultado es menor que 20

//estructura while

var resp="si";
while (resp=="si") {
    console.log("se ejecutara este codigo?");

}

//bucle for
for(var i=0;i<10;i++){//se ejecutara mientras la i sea menor que 10
    console.log("este codigo se ejecuto"+i);
}
//estructura try catch
var nom="juan";
try {
   var num= parseFloat(juan)
} catch (error) {
    console.log("no se pudo convertir la cadena");
}
//codigo del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

//const perimetroCuadrado = ladoCuadrado * 4;
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");
function perimetroCuadrado(lado){
    return lado *4;
}

//const areaCuadrado = ladoCuadrado * ladoCuadrado;
//console.log("El area del cuadrado es: " + areaCuadrado + " cm^2");
function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();


//codigo del triangulo
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.group("Triangulos")

console.log(
    "Los lados del Triangulo miden: "
     + ladoTriangulo1 
     + "cm, "  
     + ladoTriangulo2 
     + "cm, "
    + baseTriangulo 
    + "cm");

console.log("la altura del triangulo es: " + alturaTriangulo + " cm");

//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
//console.log("El perimetro del Triangulo es: " + perimetroTriangulo + " cm");
function perimetroTriangulo(lado1,lado2,base){
    return lado1 +lado2 + base;
}

//const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
//console.log("El area del Triangulo es: " + areaTriangulo + " cm^2");
function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

console.groupEnd();

//codigo del círculo
console.group("Círculo");

//Radio
//const radioCirculo = 4;
//console.log("El radio del circulo es: " + radioCirculo + " cm");

//Diámetro
//const diametroCirculo = radioCirculo * 2;
//console.log("El diametro del circulo: " + diametroCirculo + " cm");
function diametroCirculo(radio){
    return radio * 2;
}

//PI
const PI = Math.PI;
console.log("PI es: " + PI  );

//Circuenferencia
//const perimetroCirculo = diametroCirculo * PI;
//console.log("El perimetro del circulo es : " + perimetroCirculo + " cm");
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro *PI;
}

//Area Circulo
//const areaCirculo = (radioCirculo * radioCirculo) * PI;
//console.log("El area del circulo es: " + areaCirculo + " cm^2");
function areaCirculo(radio){
    return (radio * radio) * PI;
}
console.groupEnd();

//Aqui interactuamos con el html
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado"); //capturamos la entrada del usuario en el Html
    const value = input.value;                              //convertimos esa captura en una variable para manipulkarla

    const perimetro = perimetroCuadrado(value);             //utilizamos una funcion
    alert(perimetro);                                       //Mostramos al usuario el resultado
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado"); //capturamos la entrada del usuario en el Html
    const value = input.value;                              //convertimos esa captura en una variable para manipulkarla

    const area= areaCuadrado(value);             //utilizamos una funcion
    alert(area);                                       //Mostramos al usuario el resultado
}

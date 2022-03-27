const lista1 = [
    100,
    200,
    300,
    500
];

//calcular la media aritmetica
/*
let sumaLista1 = 0;
for(let i=0; i < lista1.length; i++){
    sumaLista1 = sumaLista1 + lista1[i];
}
const promedioLista1 = sumaLista1 / lista1.length;
*/
//Creamos funcion para calcular el promedio de cualquier lista
function calcularmediaAritmetica(lista){
    //let sumaLista = 0;
    //for(let i=0; i < lista.length; i++){
      //  sumaLista = sumaLista + lista[i];
    //}

    const sumaLista = lista.reduce(
        function (valorAcomulado = 0, nuevoElemento){
            return valorAcomulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}
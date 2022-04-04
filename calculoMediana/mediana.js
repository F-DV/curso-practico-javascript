function calcularmediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcomulado = 0, nuevoElemento){
            return valorAcomulado + nuevoElemento;
        });
        const promedioLista = sumaLista / lista.length;

        return promedioLista;
}

function aOrdenar(lista){
    return lista.sort();
}

function calcularMediana(lista){

    const mitadLista1 = parseInt(lista.length / 2); // Convertimos a entero ya que las posiciones de los array no admiten decimales

    //funcion para calcular si la lista es par
    function esPar(numerito){
        if(numerito % 2 === 0){
            return true;
        }else{
             return false;
        }
    }
    
    let mediana;
    let ordenada = lista.sort();

    if(esPar(ordenada.length)){
        const elemento1 = ordenada[mitadLista1];
        const elemento2 = ordenada[mitadLista1 - 1];
        const promedioElemento1y2 = calcularmediaAritmetica([
            elemento1,
            elemento2,
        ]);  
    
       mediana = promedioElemento1y2;
       return mediana
    }else{
        mediana = lista[mitadLista1];
        return mediana;
    }
}



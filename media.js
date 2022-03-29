//lista a la cual le calcularemos la media
const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1
];

function calcularmoda(lista1){

    const lista1Count = {};                 //Declaramos objeto y lop inicializamos vacio

    lista1.map(                                 //el map recorre toda la lista
        function (elemento){                    //El map recibe una funcion anonima y dentro de () recibe cada elemento del array    
            
            if(lista1Count[elemento]){          //si la propiedad ya existe en el objeto
                lista1Count[elemento] += 1;     //sumamos al valor de esa propiedad 1
    
            }else{
                lista1Count[elemento] = 1;      //Estamos definiendo cada elemento como una propiedad del objeto y le damos valor de 1, recordemos clave : valor    
                                                 //La clave entonces será el elemento y el valor 1
            }
        } 
    );
    
    //Ahora ya que tenemos todo organizado, volvemos a convertir el objeto en un array
    const lista1Array = Object.entries(lista1Count).sort(       //a Object.entries() podemos enviar como argumento el objeto que queremos convertir en un array
       function (elementoA, elementoB){                   //El metodo sort tambien ordena, enciandole como parametros 0,1,-1. Enviaremos una funcion anonima que clasifiqie para ordenar a nuestro gusto
            return elementoA[1] - elementoB[1];
        } 
    );
    
    const moda = lista1Array[lista1Array.length -1];
    
    return moda;
    
}

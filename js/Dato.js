//Clase padre
class Dato{
    //Constructor para los atributos, que recibe la descripcion y el valor
    constructor(descripcion, valor, fecha){ 
        //Se inicializan estas variables para esta clase
        this._descripcion = descripcion; 
        this._valor = valor;
        this._fecha = fecha;
    }
    //Metodos get (obtener) y set (poner o cambiar )para cada atributo
    get descripcion(){
        return this._descripcion; //Este metodo solo devuelve el atributo descripcion del objeto
    }
    set descripcion(descripcion){
        this._descripcion = descripcion; //Este metodo actuliza el valor del atributo descripcion del objeto
    }
    
    get valor(){
        return this._valor;
    }
    set valor(valor){
        this._valor = valor;
    }
    
    get fecha(){
        return this._fecha;
    }
    set fecha(fecha){
        this._fecha = fecha;
    }
}
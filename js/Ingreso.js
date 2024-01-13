//Clase hija
class Ingreso extends Dato{
    static contadorIngresos = 0; //Esto permite crear como una variable pero que es un atributo para realizar un incrementador

    constructor(descripcion,valor){ //El constructor de la clase hija debe recibir tambien los atributos de la clase padre
        super(descripcion,valor); //Mandamos a llamar el constructo del clase padre y le enviamos la descripcion y el valor
        this._id = ++Ingreso.contadorIngresos;
    }
    get id(){
        return this._id;
    }
}
//Clase hija
class Egreso extends Dato{
    static contadorEgresos = 0; //Esto permite crear como una variable pero que es un atributo para realizar un incrementador

    constructor(descripcion,valor, fecha){ //El constructor de la clase hija debe recibir tambien los atributos de la clase padre
        super(descripcion,valor, fecha); //Mandamos a llamar el constructo del clase padre y le enviamos la descripcion y el valor
        this._id = ++Egreso.contadorEgresos;
    }
    get id(){
        return this._id;
    }
}
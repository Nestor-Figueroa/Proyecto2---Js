//Arreglo de ingresos
const ingresos = [
    //new Ingreso('Salario',2200.00,'04/02/2003'),
    //new Ingreso('Venta carro',1500,'05/08/2009')
];

//Arreglo de egresos
const egresos = [   
    //new Egreso('Renta',900.00, '04/02/2003'),
    //new Egreso('Ropa',400.00, '04/02/2003')
];

//Funcion flecha, en ella se mandan a llamar la funciones para cargar los resultados
let cargarApp = () =>{
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}

//Funcion para calular el total de los ingreos
let totalIngresos = () =>{
    let totalIngreso = 0;
    for(let ingreso of ingresos){
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
}
//Funcion para calcular el total de los egresos
let totalEgresos = () =>{
    let totalEgreso = 0;
    for(let egreso of egresos){
        totalEgreso += egreso.valor;
    }
    return totalEgreso;
}


let cargarCabecero = () =>{
    let presupuesto = totalIngresos() - totalEgresos(); //Manda a llamar la funciones
    let porcentajeEgreso = totalEgresos()/totalIngresos();
    //Recuperamos los elementos div con los id's y mostramos los resultados
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
}


//Dar formato de moneda a los valores
const formatoMoneda = (valor) =>{
    return valor.toLocaleString('es-CO',{style:'currency', currency:'COP', minimumFractionDigits:2});
}
//Dar formaot a los porcentajes
const formatoPorcentaje = (valor) =>{
    return valor.toLocaleString('es-CO',{style: 'percent',minimumFractionDigits:2});
}


const cargarIngresos = () =>{
    let ingresosHTML = '';
    //Este for va a estar enviando cada objeto de tipo ingreso a la funcion crearIngresoHTML para generar un nuevo codigo HTML
    for(let ingreso of ingresos){
        ingresosHTML += crearIngresoHTML(ingreso); //En ingresosHTML se van concatenando cada uno de los codigos HTML
    }
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
}

//Por cada objeto de tipo ingreso que se envia desde la funcion cargarIngresos se va a crea un nuevo codigo HTML
const crearIngresoHTML = (ingreso) =>{
    let ingresoHTML = `<div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${ingreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">+ ${formatoMoneda(ingreso.valor)}</div>
        <div class="elemento_fecha"> ${ingreso.fecha}</div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn">
                <ion-icon name="close-circle-sharp" 
                onclick="eliminarIngreso(${ingreso.id})"></ion-icon>
            </button>
        </div>
    </div>
</div>`
    return ingresoHTML;
}

const eliminarIngreso = (id) => {
    let indiceEliminar = ingresos.findIndex(ingreso => ingreso.id === id); //Encontrar el indice del objeto de tipo ingreso con el id indicado
    ingresos.splice(indiceEliminar,1); //Para eliminar 
    cargarCabecero(); //Hay que volver a cargar 
    cargarIngresos();
}


const cargarEgresos = () =>{
    let egresosHTML = '';
    //Este for va a estar enviando cada objeto de tipo egreso a la funcion crearEgresoHTML para generar un nuevo codigo HTML
    for(let egreso of egresos){
        egresosHTML += crearEgresoHTML(egreso); 
    }
    document.getElementById('lista-egresos').innerHTML = egresosHTML;
}

//Por cada objeto de tipo ingreso que se envia desde la funcion cargarIngresos se va a crea un nuevo codigo HTML
const crearEgresoHTML = (egreso) =>{
    let egresoHTML = `<div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${egreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">- ${formatoMoneda(egreso.valor)}</div>
        <div class="elemento_fecha"> ${egreso.fecha}</div>
        <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalEgresos())}</div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn">
                <ion-icon name="close-circle-sharp"
                onclick="eliminarEgreso(${egreso.id})"></ion-icon>
            </button>
        </div>
    </div>
</div>`
    return egresoHTML;
}

const eliminarEgreso = (id) => {
    let indiceEliminar = egresos.findIndex(egreso => egreso.id === id); //Encontrar el indice del objeto de tipo egreso con el id indicado
    egresos.splice(indiceEliminar,1); //Para eliminar 
    cargarCabecero(); //Hay que volver a cargar 
    cargarEgresos();
}

const agregarDato = () =>{
    let forma = document.forms['forma']; //Recuperacion del formulario
    let tipo = forma['tipo']; //Recuperamos todo el objeto del selector
    let descripcion = forma['descripcion']; //Recuperamos todo el objeto input texto donde esta la descripcion
    let valor = forma['valor']; //Recuperamos todo el objeto input numbre donde esta el valor
    let fecha = forma['fecha']; //Recuperamos todo el objeto de input fecha


    if(descripcion.value !== '' && valor.value !== ''){
        if(tipo.value    === 'ingreso'){
            ingresos.push(new Ingreso(descripcion.value, Number(valor.value), fecha.value)); //El metodo push ingresa un nuevo elemento objeto del tipo ingreso al arreglo, con sus atributios descripcion, valor y fecha
            cargarCabecero(); 
            cargarIngresos();
        }
        else if(tipo.value === 'egreso'){
            egresos.push(new Egreso(descripcion.value, Number(valor.value), fecha.value));
            cargarEgresos();
            cargarCabecero();
        }
    }
}
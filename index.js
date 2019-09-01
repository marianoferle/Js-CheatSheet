var str_ = "nombre";
var arr_ = [1,2,3,4];
var fu_ = function(){};

var obj_ = {
    nombre:'nombre',
    apellido:'apellido'
};
console.log(obj_[nombre], obj_.nombre);


//---------------parsear json--------------------
var obj1_ = '{"personas":['+
    '{"nombre":"nombre1","apellido":"apellido1"},'+
    '{"nombre":"nombre2","apellido":"apellido2"},'+
    '{"nombre":"nombre3","apellido":"apellido3"},'+
']}';

var json1_ = JSON.parse(obj1_);


//------------Convertir objeto a Json--------------
var obj2 = {"nombre":"nombre1","edad":18,"ciudad":"ciudad1"};
var json2_ = JSON.stringify(obj2_);
var url_= "ejemplo.php?datos="+json2_;
function enviar(url_){ window.location = url_; }

//--------------if -- ---------------------
if(true) ? false : true ;


//------------------ function return ---------------------
function func_(v_){
var valor = v_;
    return valor;
}
var result__= func_(10);


//-------------for--------------------
for(var i = 0;i<10; i++){ 
    console.log(i); 
}


//---------try catch-------------
try{
   // undefinedFunction();
}catch(err){
    console.log(err);
}




//-------------- Objetos js - Prototype ----------------
function Persona(nombre1_){ this.nombre1 = nombre1_; } 
Persona.prototype.saludar = function(){ console.log('Hola'+ this.nombre1_); }

var persona1_ = new Persona('NombrePersona1');
var functionSaludar = persona1.saludar;
persona1_.saludar();



//------------------------------------------------------


//######################## NEW ########################################################


// (``````````````````)  <-- Tilder invertida para template string
const nombre_= "nombre1";
const mensaje_ = `Hola ${nombre_}`;
console.log(mensaje_); 

// (``````````````````)  <-- Tilder invertida para template string
const str_ = `
    varias
    lineas
    de
    texto
`;




//------- Promesas ----------------------
function suma(a,b){
    return new Promise(function(resolve,reject){
        if(typeof a !== "number" || typeof b !== "number"){
            return reject('false');
        }else{
            resolve(a+b);
        }
    });
}
var prom_ = suma(1,2);
prom_.then(function(result){  console.log(result); 
}).catch(function(err){       console.error(err);  });




//---------Async Await------------
async function fun2_(){
    var resultado_ = await otraFunction();
    return resultado_;
}



//------------------------



//-------------- Class Js -----------------------------
class PrimeraClass_{
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
    //----getter----
    get getterSuma_(){
        return this.metodo1_();
    }

    //-----Metodo----
    metodo1_(){
        return this.a + this.b;
    }
}

const c_ = new PrimeraClass_(1, 2);

console.log(c_.getterSuma_);


//-----------------


//---------- funcion flecha -----------------
const variable_= (a,b)=>{
    let result_= a+b;
    return result_;
}

//---------modulos--------------------

import Libreria from 'libreria_';

export default function(){ }





//################################ React JS ######################################

//--------componentes----------------

import React, {Fragment, Component} from "react";
import ReactDOM from "react-dom";

class Saludar extends Component{
    constructor(props){
        super(props);
        this.state = {visible = true}
    }
    render(){
        this.setState({visible=false});
        const {nombre_,apellido}=this.props;
        return(
            <Fragment>
                <UsarNombre nombre={nombre_} /> 
            </Fragment>
        )
    }    
}
const r_ = document.body;
ReactDOM.render(<Saludar nombre="nombre1_" />, r_);

//----------------------
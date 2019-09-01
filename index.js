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
        const {nombre_,apellido}=this.props;
        const visible_ = this.state;
        return(
            <Fragment>
                <UsarNombre nombre={nombre_} onClic={(visible_)=>{
                    this.setState({visible_=false});
                }}/> 
            </Fragment>
        )
    }    
}
const r_ = document.body;
ReactDOM.render(<Saludar nombre="nombre1_" />, r_);

//----------------------





//###################### mongoose #########################################

'use strict'
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Router_ = express.Router();

//----------express - app-----------
var app = express();

//----------Esquema de modelo---------------
const personaSchema = new mongoose_.Schema({
    nombre:String,
    edad:Number,
    comentario:String,
    fecha:{dia:Number,mes:Number,año:Number} 
});

//--------------Modelo-----(esquema)--------------
var Model_ = mongoose_.model('usuario',personaSchema);

//--------------- controlador ---(modelo)------------
var getPersona = async function(req,res){
    var nombre_ = req.params.nombre;
    await Model_.findOne({'nombre':nombre_,'edad':'32'},function(err,user_){
        console.log(user_);
        res.send(            
            user_.get('nombre') + 
            '<br/>'+         
            user_.get('edad')
            );
    });    
}

//------ruta---(controlador)--------------------
var ruta_ = Router_.get('/Persona/:nombre', getPersona);

//-------Express App ----(ruta)--------------
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/api', ruta_);

//----------mongoose Connect-(app express listen)------------
var port = 5000;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/Persona', {useNewUrlParser: true}).then( async function(err,client){
    app.listen(port, () => {
        console.log("servidor corriendo en http://localhost:5000");
    });    
}).catch(err => console.log(err));

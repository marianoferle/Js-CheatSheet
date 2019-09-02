//############ JS ###################################

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













//###################### mongoose #########################################

'use strict'
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Router_ = express.Router();

//----------express - app-----------
var app = express();

//----------Esquema de modelo---------------
const personaSchema = new mongoose.Schema({
    nombre:String,
    edad:Number,
    comentario:String,
    fecha:{dia:Number,mes:Number,año:Number} 
});

//--------------Modelo-----(esquema)--------------
var Model_ = mongoose.model('usuario',personaSchema);

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












//################################ React JS ######################################

//----------JSX-----------------
function nombreCompleto_(us_){return us_.nombre+' '+us_.apellido}
const user_={nombre:'nombre1_',apellido:'apellido1_'};
const elemento = <h1>Hola, {nombreCompleto_(user_)}</h1>;
ReactDOM.render(elemento,document.getElementById('root'));

//--------
const elemento = <h1 className="index"/> Hola </h1>;
//---ejemplo sin jsx-----------
const elemento = React.createElement('h1',{className:'index'},'Hola');
//----------------------
const elemento2_ = (
    <div>
        <h1>Hola</h1>
    </div>
);
//-------------------------------
function reloj(){
    const elemento = ( 
        <div>  <h1> {new Date().toLocaleDateString()} </h1> </div> 
    );
    ReactDOM.render(elemento,document.getElementById('root'));
}
setInterval(reloj,1000);

//---------componentes ReactJS-----(props)--> solo lectura-------------------

//la forma mas basica es en una function
function function1_(props){ return <h1>Hola,{props.nombre}</h1>; }

//Componente con ES6
class Function1_ extends React.Component{ 
    render(){ return <h1>Hola,{this.props.nombre}</h1>; }
}
const elemento = <Function1_ nombre="nombre1" />;
ReactDOM.render(elemento,document.getElementById('root'));

//-----(app (componente))---------
function Func1_(props){return <h1>Hola,{props.nombre}</h1>};
function App_(){ 
    return ( <div> <Func1_ nombre="nombre1" /> </div> ); 
};
ReactDOM.render(<App_/>,document.getElementById('root'));

//#### ReactJs - ES6 => ( function => Class ), ( props => this.props) #####
//--------estados locales en una class .......this.state...........
class Func1_ extends React.Component{
    constructor(props){ //constructor base
        super(props);
        this.state = {nombre:'...'}; //this.state solo en constructor
    }
    //-------metodos de ciclo de vida de un componente------------
    componentDidMount(){ //despues del renderizado
        this.setState({nombre:'nombre2'}) 
        this.setState((state,props)=>({ //function setState --> (state - previo) / (props - actualizar)
            nombre: state.nombre +".."+props.nombre
        }));
    } 
    componentWillMount(){  } //se invoca antes de desmontar y eliminar un componente

    render(){ //se invoca cada ves que se actualiza algo.
        return (
            <h1>Hola,{this.state.nombre}</h1>
        );
    }
}
class App_ extends React.Component{
    render(){ 
        return( <div> <Func1_ nombre="nombre1" /> </div> ); 
    }
}
ReactDOM.render(<App_/>,document.getElementById('root'));

//--------componentes---------------------------
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


//------------Eventos Reactjs-------evento function en etiqueta JSX---
function ModuloBoton(){
    function activarBoton(e){
        e.preventDefault(); //desactiva comportamiento por defecto (href="#")
    }
    return(
        <a href="#" onClick={activarBoton}> activar </a>
    );    
}
//------ES6 class Event Reactjs----------------
class Boton_ extends React.Component{
    constructor(props){
        super(props);
        const activo_=props.activo_;
        this.state={tipoClick_:true};
        //------------hace que (this) funcione en el callback-----
        this.setClick_=this.setClick_.bind(this);
    }
    setClick(){
        console.log(this);
        this.setState(state=>({tipoCLick_:!state.tipoCLick_}));
    }
    render(){
        let activo_=this.state.activo_;
        let mensaje_;
        if(activo_){
            mensaje_='el boton esta activo';
        }else{
            mensaje_='el boton esta inactivo';
        }

        return (
            <div>
                //----if Reactjs---(activo_ == true)--
                {activo_ &&
                    <button onClick={(e)=>this.setClick_(e)}>
                        {this.state.tipoClick_ ? 'ON' : 'OFF'}                        
                    </button>
                }                
                {mensaje_}
            </div>
        )
    }
}
const act_=true;
ReactDOM.render(<Boton_ activo_={act_}/>, document.getElementById('root'));

//-----------function (flecha y bind)------------------
<button onClick={ (e)=>this.eliminar(id,e) }>Eliminar</button>
<button onClick={ this.eliminar.bind(this,id) }>Eliminar</button>

//---------render listar--------------------------
function Lista_(props){
    return <li>{props.valor}</li>;
}

function Numeros_(props){
    const numeros_=props.numeros_;
    const listarNumeros= numeros_.map((num_)=>
        <Lista_ key={num_.toString()} valor={num_} />
    );
    return (        
        <ul>           
            {listarNumeros}
        </ul>
        /*-----Ejemplo- map() dentro de Render-------*/
        <ul>
            {numeros_.map((num_)=> 
                <Lista_ key={num_.toString()} valor={num_} /> 
            )}
        </ul>
    );
}
const n_=[1,2,3,4,5];
ReactDOM.render(<Numeros_ numeros_={n_} />, document.getElementById('root'));


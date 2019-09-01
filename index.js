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






//######################## NEW ########################################################


//---------- funcion flecha -----------------
const variable_= (a,b)=>{
    return a+b;
}

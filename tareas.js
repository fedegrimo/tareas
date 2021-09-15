const fs = require ("fs");
const acciones = require ("./acciones_archivo");
var myArgs = process.argv[2];
var cadenaTexto = process.argv[3];
var ruta_json = './tareas.json';
var nuevo_json = "./alumnos.json";
var alumnosAprobados =[] ;

var alumnos = [{
        "nombre":"Alumno 5",
        "promedio" : "8",
        "aprobado":true
    },{
        "nombre":"Alumno 6",
        "promedio" : "7",
        "aprobado":true
    },
    {
        "nombre":"Alumno 7",
        "promedio" : "5",
        "aprobado":false
    }];
    
function tareas (){
    switch(myArgs){
        case "listar" : 
            console.log(leerJSON(ruta_json));
            break;
        case "escribir" : 
            guardarTarea();
            break;
        case "crear" : 
            crearObjeto();
        case "filtrar":
            filtrarPorEstado()
            break;
        default:
            console.log("No entiendo qué quieres hacer.");
    }
}


let leerJSON = archivo => {
    let data = fs.readFileSync(archivo);
    let alumnos = JSON.parse(data);
    return alumnos;
}
let guardarTarea = () => {
    let leerAlumnos = leerJSON(ruta_json);
    leerAlumnos.push(alumnos);
    cadena = JSON.stringify(leerAlumnos);

    fs.writeFile(nuevo_json,cadena,(error) =>{
        if (error) {
            console.log(`Error: ${error}` );
        }
        console.log("Archivo JSON generado correctamente")
    });
}

let crearObjeto = () =>{
    let nuevoObjeto = {
        titulo: cadenaTexto,
        estado: "pendiente"
    }
    alumnos.push(nuevoObjeto);
    guardarTarea();
}

 let leerPorEstados = () => {
     let data = leerJSON(nuevo_json);
     let buscar = data.filter(function(elemento){
         return elemento >= 7;
     });
     console.log(buscar);
 }

let  filtrarPorEstado = () => {
    let obj = leerJSON(ruta_json);
    if (cadenaTexto){
        obj.forEach(element => {
            if (element.promedio == cadenaTexto){
                alumnosAprobados.push(element.nombre);
            }
        });
        console.log(alumnosAprobados);
    }  else {
        console.log("Ingresar valor de filtrado");
    }
    
   
}

module.exports = tareas;
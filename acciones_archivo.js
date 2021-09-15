const path = require ("path");

function verificarArchivo(err,data){
    if (err) {
        console.log("Error de lectura " + err);
    }

    let fileExtension = path.extname(data);
    if (fileExtension == ".json"){
        return JSON.parse(data);
    } else {
        console.log(data);
    }
}

module.exports = verificarArchivo;
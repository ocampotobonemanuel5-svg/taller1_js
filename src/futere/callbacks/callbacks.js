const baseDatos1 = ['Canada', 'EUA', 'Mexico', 'Ecuador', 'Brazil', 'Argentina', 'Uruguay'];
const baseDatos2 = ['Japón', 'Irán', 'Corea del Sur', 'Alemania', 'Croacia', 'España', 'Inglaterra'];

function encontrado(pais) {
    document.getElementById('res').innerHTML = `<span class="text-success">País encontrado: ${pais}</span>`;
}

// Convertimos el array a minúsculas para comparar fácilmente
function busquedaBaseDatos2(pais, cbExito) {
    // .map(p => p.toLowerCase()) crea una copia de la lista en minúsculas
    const db2Minusculas = baseDatos2.map(p => p.toLowerCase());
    
    if (db2Minusculas.includes(pais.toLowerCase())) {
        cbExito(pais);
    } else {
        document.getElementById('res').innerHTML = `<span class="text-danger">Dato no encontrado</span>`;
    }
}

function busquedaBaseDatos1(pais, cbExito, cbFallo) {
    const db1Minusculas = baseDatos1.map(p => p.toLowerCase());

    if (db1Minusculas.includes(pais.toLowerCase())) {
        cbExito(pais);
    } else {
        cbFallo(pais, cbExito);
    }
}

function ejecutar() {
    const input = document.getElementById('pais').value.trim();
    if(input === "") return alert("Escribe un país");
    
    // Llamamos a la búsqueda
    busquedaBaseDatos1(input, encontrado, busquedaBaseDatos2);
}
// Descripción: Las promesas representan el éxito o fracaso de una operación 
// asíncrona, permitiendo manejar procesos que no son inmediatos.

const checkVocal = (cadena) => {
    return new Promise((resolve, reject) => {
        const ultima = cadena.slice(-1);
        if (/[aeiouAEIOU]/.test(ultima)) {
            resolve(ultima);
        } else {
            reject('El caracter no es una vocal');
        }
    });
};

function procesar() {
    const val = document.getElementById('texto').value;
    checkVocal(val)
        .then(vocal => alert("Éxito: " + vocal))
        .catch(err => alert("Error: " + err));
}
// Descripción: Async/Await es una forma más legible de trabajar con promesas,
// permitiendo escribir código asíncrono que parece síncrono.

const calcularDoble = (n) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(n * 2), 2000);
    });
};

async function ejecutarAsync() {
    const n = document.getElementById('num').value;
    document.getElementById('res').innerText = "Calculando...";
    const resultado = await calcularDoble(n);
    document.getElementById('res').innerText = "El doble es: " + resultado;
}
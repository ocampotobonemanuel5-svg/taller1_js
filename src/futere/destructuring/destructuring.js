// Descripción: La desestructuración permite extraer valores de objetos o 
// arreglos y asignarlos a variables de forma rápida y limpia.

const person = {
    name: 'Juan Carlos Valencia',
    age: 30,
    city: 'Cali',
    profession: 'Desarrollador'
};

function mostrarDestruct() {
    const { name, age, profession } = person;
    const output = `Nombre: ${name}, Edad: ${age}, Profesión: ${profession}`;
    document.getElementById('res').innerText = output;
}
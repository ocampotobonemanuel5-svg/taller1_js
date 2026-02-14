const form = document.getElementById('formDatos');
const tabla = document.getElementById('listaDatos');
const btnGuardar = document.getElementById('btnGuardar');

const getDB = () => JSON.parse(localStorage.getItem('db_crud')) || [];

const render = () => {
    const data = getDB();
    tabla.innerHTML = data.map((item, index) => `
        <tr>
            <td>${item.email}</td>
            <td>${item.nombre}</td>
            <td>${item.documento}</td>
            <td>
                <button class="btn btn-outline-info btn-sm" onclick="edit(${index})">Editar</button>
                <button class="btn btn-outline-danger btn-sm" onclick="remove(${index})">Eliminar</button>
            </td>
        </tr>
    `).join('');
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const documento = document.getElementById('documento').value.trim();
    const email = document.getElementById('email').value.trim();
    const index = parseInt(document.getElementById('editIndex').value);

    let db = getDB();

    // Actividad 2: Validación de Unicidad
    const exists = db.some((item, i) => (item.email === email || item.documento === documento) && i !== index);

    if (exists) {
        alert("Error: El correo o el documento ya existen.");
        return;
    }

    const obj = { nombre, documento, email };

    if (index === -1) {
        db.push(obj); // Agregar
    } else {
        db[index] = obj; // Editar
        document.getElementById('editIndex').value = "-1";
        btnGuardar.innerText = "Guardar";
    }

    localStorage.setItem('db_crud', JSON.stringify(db));
    form.reset();
    render();
});

// Actividad 1: Eliminar y Editar
window.remove = (i) => {
    let db = getDB();
    db.splice(i, 1);
    localStorage.setItem('db_crud', JSON.stringify(db));
    render();
};

window.edit = (i) => {
    const item = getDB()[i];
    document.getElementById('nombre').value = item.nombre;
    document.getElementById('documento').value = item.documento;
    document.getElementById('email').value = item.email;
    document.getElementById('editIndex').value = i;
    btnGuardar.innerText = "Actualizar";
};

window.borrarTodo = () => {
    if(confirm("¿Seguro?")) { localStorage.removeItem('db_crud'); render(); }
};

render();
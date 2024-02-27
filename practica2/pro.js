function guardarRegistro() {
    var nombres = document.getElementById('nombres').value;
    var apellidos = document.getElementById('apellidos').value;
    var curso = document.getElementById('curso').value;

    if (nombres.trim() === '' || apellidos.trim() === '' || curso.trim() === '') {
        alert('complete todos los campos');
        return;
    }

    var alumno = {
        nombres: nombres,
        apellidos: apellidos,
        curso: curso
    };

    alumnos.push(alumno);

    document.getElementById('regForm').reset();

    mostrarAlumnos();
}

function mostrarAlumnos() {
    var tbody = document.querySelector('#tablaAlumnos tbody');
    tbody.innerHTML = ''; 
    
    alumnos.forEach(function(alumno) {
        var row = '<tr>';
        row += '<td>' + alumno.nombres + '</td>';
        row += '<td>' + alumno.apellidos + '</td>';
        row += '<td>' + alumno.curso + '</td>';
        row += '</tr>';
        tbody.innerHTML += row;
    });
}

var alumnos = [];

mostrarAlumnos();
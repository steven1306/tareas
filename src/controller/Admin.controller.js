const {
    firebase
} = require('../configFirebase');

const controlador = {};
const db = firebase.firestore();

controlador.inicio = (req, res) => {
    res.render('index');
}

controlador.admin = (req, res) => {
    res.render('./admin')
}

controlador.agregar = (req, res) => {
    console.log(req.body);
  
    db.collection("usuario").add({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            edad: req.body.edad,
            sexo: req.body.sexo,
            profesion: req.body.profession,
            telefono: req.body.telefono,
            perfil: req.body.perfil,
           
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            alert('Reserva realizada', docRef.id);
            limpiarDatos();
        })
        .catch((error) => {
            console.error("Error: ", error);
        });

    res.render('./admin');
}



controlador.leerDatos = (req, res) => {
    console.log(req.body);

    listaCliente.innerHTML = "";
    btnActualizar.classList.add('d-none');
    db.collection("clientes").get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                listaCliente.innerHTML += `
                  <tr>
                      <td>${doc.data().nombre}</td>
                      <td>${doc.data().apellido}</td>
                      <td>${doc.data().correoe_lectronico}</td>
                      <td>${doc.data().telefono}</td>
                      <td>${doc.data().fecha_de_entrada}</td>
                      <td>${doc.data().fecha_de_salida}</td>
                      <td>${doc.data().tipo_habitacion}</td>
                      <td>${doc.data().estado_cliente}</td>
                      <td>
                           <button onclick="eliminar('${doc.id}')" class="btn btn-danger"><i class="far fa-trash-alt"></i></button>
                           <button onclick="editar('${doc.id}')" class="btn btn-info"><i class="far fa-edit"></i></button>
                       </td>                  
                  </tr>           
              `;
            });
        })
        .catch(function (error) {
            console.log("Error: ", error);
        });

    res.render('./admin');
}






module.exports = controlador;
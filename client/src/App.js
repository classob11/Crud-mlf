import './App.css';
import { useState } from "react";
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [puesto, setPuesto] = useState("");
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [pass, setPass] = useState("");
  const [ocho, setOcho] = useState("");
  const [mycase, setMycase] = useState("");

  const [empleadosList, setEmpleados] = useState([]);

  const add = () => {
    Axios.post("http://localhost:3001/create", {
      puesto: puesto,
      nombre: nombre,
      correo: correo,
      pass: pass,
      ocho: ocho,
      mycase: mycase
    }).then(() => {
      getEmpleados();
      alert("Empleado Registrado");
    });
  }

  const getEmpleados = () => {
    Axios.get("http://localhost:3001/empleados").then((response) => {
      setEmpleados(response.data);
    });
  }

  //getEmpleados();


  return (
    <div class="container">
      <div className="App">

        <div className='lista'>
          <button onClick={getEmpleados}>Listar</button>
          {
            empleadosList.map((val, key) => {
              return <div className=''> {val.puesto} </div>
            })
          }
        </div>

      </div>
      <div class="card text-center">
        <div class="card-header">
          Gestion de empleados
        </div>
        <div class="card-body">
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Puesto:</span>
            <input 
            onChange={(event) => {
              setPuesto(event.target.value);
            }}
            type="text" class="form-control" placeholder="Puesto" aria-label="Puesto" aria-describedby="basic-addon1"/>
          </div>


          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Nombre:</span>
            <input 
            onChange={(event) => {
              setNombre(event.target.value);
            }}
            type="text" class="form-control" placeholder="Nombre Completo" aria-label="Nombre Completo" aria-describedby="basic-addon1"/>
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">@</span>
            <input 
            onChange={(event) => {
              setCorreo(event.target.value);
            }}
            type="email" class="form-control" placeholder="Correo" aria-label="Correo" aria-describedby="basic-addon1"/>
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Contraseña</span>
            <input 
            onChange={(event) => {
              setPass(event.target.value);
            }}
            type="password" class="form-control" placeholder="Contraseña" aria-label="Contraseña" aria-describedby="basic-addon1"/>
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Celular</span>
            <input 
            onChange={(event) => {
              setOcho(event.target.value);
            }}
            type="text" class="form-control" placeholder="+52" aria-label="Numero" aria-describedby="basic-addon1"/>
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Celular</span>
            <input 
            onChange={(event) => {
              setMycase(event.target.value);
            }}
            type="text" class="form-control" placeholder="MyCase" aria-label="MyCase" aria-describedby="basic-addon1"/>
          </div>

        </div>
        <div class="card-footer text-muted">
          <button className='btn btn-success' onClick={add}>Registrar</button>
        </div>
      </div>

    </div>
  );
}

export default App;

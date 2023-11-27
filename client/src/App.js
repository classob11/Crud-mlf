import './App.css';
import {useState} from "react";

function App() {

  const [puesto,setPuesto] = useState("");
  const [nombre,setNombre] = useState("");
  const [correo,setCorreo] = useState("");
  const [pass,setPass] = useState("");
  const [ocho,setOcho] = useState("");
  const [mycase,setMycase] = useState("");

  const mostrarDatos = ()=>{
    alert(puesto);
  }

  return (
    <div className="App">
      <div className='datos'>
        <label>Puesto: <input 
        onChange={(event)=>{
          setPuesto(event.target.value);
        }}
        type='text'/> </label>

        <label>Nombre: <input 
        onChange={(event)=>{
          setNombre(event.target.value);
        }}
        type='text'/> </label> 

        <label>Correo: <input 
        onChange={(event)=>{
          setCorreo(event.target.value);
        }}
        type='text'/> </label>

        <label>Contraseña: <input 
        onChange={(event)=>{
          setPass(event.target.value);
        }}
        type='text'/> </label>

        <label>8x8: <input 
        onChange={(event)=>{
          setOcho(event.target.value);
        }}
        type='text'/> </label> 

        <label>MyCase: <input 
        onChange={(event)=>{
          setMycase(event.target.value);
        }}
        type='text'/> </label>

        <button onClick={mostrarDatos}>Registrar</button>
      </div>
    </div>
  );
}

export default App;

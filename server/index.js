const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"empleados_crud"
})

app.post("/create",(req,res)=>{
    const puesto = req.body.puesto;
    const nombre = req.body.nombre;
    const correo = req.body.correo;
    const pass = req.body.pass;
    const ocho = req.body.ocho;
    const mycase = req.body.mycase;
    

    db.query('INSERT INTO empleados(puesto,nombre,correo,pass,ocho,mycase) VALUES(?,?,?,?,?,?)',[puesto,nombre,correo,pass,ocho,mycase],
        (err,result)=>{
            if (err) {
                console.log(err);
            }else{
                res.send("Empleado registrado con exito!!")
            }
    }
    );
})

app.get("/empleados",(req,res)=>{
    db.query('SELECT * FROM empleados',
        (err,result)=>{
            if (err) {
                console.log(err);
            }else{
                res.send(result);
            }
    }
    );
})

app.listen(3001,()=>{
    console.log("Corriendo en el puerto 3001")
})
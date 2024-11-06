import React, { useState, useEffect } from 'react';
import "./Matricula.css";
import axios from "axios"
import {  useNavigate } from 'react-router-dom';


function Matricula({ Manejador }) {
  const URL = "http://localhost:8000/Matricula/"
   const url2 = "http://localhost:8000/Instrumento/"
  const [alumnos, setAlumnos] = useState([]);
  const [valor, setValor] = useState("");
  const [filtrarinstrument, setfiltrarinstrument] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
      getAlumnos();
  }, [])



  const getAlumnos = async () => {
      const res = await axios.get(URL)
     
      setAlumnos(res.data)
      
      
  }

  const deleteAlumnos = async (alum) => {
    
      await axios.delete(`${URL}${alum.id}`)
      await axios.put(`${url2}${alum.id_instrumento}`, {
     
        Nombre:alum.Instrumento.Nombre,
        Marca:alum.Instrumento.Marca,
        Tamaño: alum.Instrumento.Tamaño,
        Codigo:alum.Instrumento.Codigo,
        Estado:"Deposito",
        Id_Deposito:alum.id_modulo,
        createdAt: "2024-10-23",
        updatedAt: "2024-10-23"
      })    
      getAlumnos();
  }
 
  const confirmacion=(id)=>{
    swal({
    title:"Eliminar",
    text:"Seguro que deseas eliminar?",
    icon: "warning",
    buttons:["no","si"]
    }).then(respuesta=>{
      if(respuesta){
        swal({text:"El archivo se a borrado con exito",icon:"success", timer:"1000"})
      
        deleteAlumnos(id)
         }
    })
    
    
    };


    const filtradoInstrumento=async(instrument)=>{
      setAlumnos([])
      const res = await axios.get(url2)
      res.data.map((instru)=>(
        instru.Nombre===instrument? setAlumnos(instru.Nombre):null
      ))
    }
    
  const Mandaraeditar=(id)=>{
    navigate(`/Matricula/EditarAlumno/${id}`)
  }
  
  return (
    <div className="container-matricula">
      <div className="cabeza">
        <div className="top">
          <button id="menu-btn">
            <span className="material-icons-sharp"> menu</span>
          </button>
          <div className="theme-toggler" onClick={Manejador}>
            <span className="material-icons-sharp active"> light_mode</span>
            <span className="material-icons-sharp"> dark_mode</span>
          </div>
          <div className="profilee">
            <div className="info">
              <p>
                Hey, <b>Daniel</b>
              </p>
              <small className="text-muted">Admin</small>
            </div>
            <div className="profile-photo">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="contenedor-opcioness">
        <a href='/Matricula/nuevoalumno'>+ Nuevo Registro</a>
        <div className="opciones">
          <label htmlFor="">
            F
            <input type="checkbox" value="n" />
          </label>
          <label htmlFor="">
            V
            <input type="checkbox" value="n" />
          </label>
          <label htmlFor="">
            Ambos
            <input type="checkbox" value="n" />
          </label>
        </div>
      </div>
      <div className="contenedor-tabla">
        <div className="contenedor-formularioo">
          <form action="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#5f6368"
            >
              <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
            <input type="text" placeholder="BUSCAR" />

            
             
                 <select name="" id="" onChange={(e)=>setValor(e.target.value)}>
                 <option value="">Selecciona</option>
                  <option value="Instrumento">Instrumento</option>
                  <option value="Programa">Programa</option>
                  <option value="Cedula">Cedula</option>
                  <option value="Modulo">Modulo</option>
                  <option value="Edad">Edad</option>
                  <option value="Sexo">Sexo</option>
                 </select>
           
           {
            valor==="Instrumento" &&  <select name="" id="" onChange={e=>filtradoInstrumento(e.target.value)}>
            <option value="Flauta">Flauta</option>
            <option value="Violin">Violin</option>
            <option value="Cuatro">Cuatro</option>
            <option value="Bajo">Bajo</option>
           </select>
           }
             {
            valor==="Modulo" &&  <select name="" id="">
            <option value="">San Jose</option>
            <option value="">CUmbo</option>
            <option value="">Pueblo Nuevo</option>
          
           </select>
           }
             

             {
            valor==="Programa" &&  <select name="" id="">
            <option value="">Coral</option>
            <option value="">Alma llanera</option>
            <option value="">Sinfonico</option>
            
           </select>
           }

{
            valor==="Edad" &&  <select name="" id="">
            <option value="">11</option>
            <option value="">12</option>
            <option value="">13</option>
            
           </select>
           }
           {
            valor==="Sexo" &&  <select name="" id="">
            <option value="">Femenino</option>
            <option value="">Masculino</option>
          
           </select>
           }


            <button className='buscarbtn'>Buscar</button>
          </form>
          
          
        </div>
        <div className="contenedor-registro">
          <table>
            <thead>
              <tr>
              <th>id</th>

                <th>Nombre</th>
                <th>Apellidos</th>
      
                <th>Cedula</th>
                <th>Edad</th>
                <th>Programa</th>
                <th>Acciones</th>

              </tr>
            </thead>
            <tbody>

              {
                alumnos.map((alumno) => (
                  <tr key={alumnos.id}>
                   
                    <td>{alumno.id}</td>
                    <td>{alumno.Nombre}</td>
                    <td>{alumno.Apellido}</td>
                    <td>{alumno.Cedula}</td>
                    <td>{alumno.Edad}</td>
                    <td>{alumno.programa.Nombre}</td>
                    <td className="primary">
                  <button onClick={()=>confirmacion(alumno)}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg> </button>
                  <button onClick={(e)=>Mandaraeditar(alumno.id)}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" /></svg></button></td>

                  </tr>
                ))
              }

              <tr>
                <td>Foldable Mini Drone</td>
                <td>85331</td>
                <td>Due</td>
                <td>Due</td>
                <td>Due</td>
                <td >Datale</td>
                <td className="primary">
                  <button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg> </button>
                  <button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" /></svg></button></td>

              </tr>


            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Matricula;

import React, { useState, useEffect } from 'react';
import "./Matricula.css";
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import Tabla from './Tabla';


function Matricula({ Manejador }) {
  const URL = "http://localhost:8000/Matricula/"
  const url2 = "http://localhost:8000/Instrumento/"
  const [alumnos, setAlumnos] = useState([]);
  const [alumnospor, setAlumnospor] = useState([]);
  const [valor, setValor] = useState("");
  const [isCheckedFe, setIsCheckedFe] = useState(false);
  const [isCheckedMa, setIsCheckedMa] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    getAlumnos();
  }, [])

  useEffect(() => {

  }, [alumnos])


  const getAlumnos = async () => {
    const res = await axios.get(URL)

    setAlumnos(res.data)
    setAlumnospor(res.data)

  }

  const deleteAlumnos = async (alum) => {

    await axios.delete(`${URL}${alum.id}`)
    await axios.put(`${url2}${alum.id_instrumento}`, {

      Nombre: alum.Instrumento.Nombre,
      Marca: alum.Instrumento.Marca,
      Tamaño: alum.Instrumento.Tamaño,
      Codigo: alum.Instrumento.Codigo,
      Estado: "Deposito",
      Id_Deposito: alum.id_modulo,
      createdAt: "2024-10-23",
      updatedAt: "2024-10-23"
    })
    getAlumnos();
  }

  const confirmacion = (id) => {
    swal({
      title: "Eliminar",
      text: "Seguro que deseas eliminar?",
      icon: "warning",
      buttons: ["no", "si"]
    }).then(respuesta => {
      if (respuesta) {
        swal({ text: "El archivo se a borrado con exito", icon: "success", timer: "1000" })

        deleteAlumnos(id)
      }
    })


  };


  const filtradoInstrumento = (instrument) => {

    const alumnosnew = alumnospor.filter(alum =>

      alum.Instrumento !== null && alum.Instrumento.Nombre === instrument
    )
    setAlumnos(alumnosnew)

  }

  const filtradoPrograma = (progra) => {

    const alumnosnew = alumnospor.filter(alum =>

      alum.programa.Nombre === progra
    )
    setAlumnos(alumnosnew)

  }

  
  const filtradoModulo = (modu) => {

    const alumnosnew = alumnospor.filter(alum =>

      alum.Modulo.Nombre === modu
    )
    setAlumnos(alumnosnew)

  }

  const filtradoEdad = (eda) => {

    const alumnosnew = alumnospor.filter(alum =>

      alum.Edad ===  parseInt(eda)
    )
    setAlumnos(alumnosnew)

  }


  const filtradoSexo = (e) => {
 

    if(  e.target.checked===true){
      const alumnosnew = alumnospor.filter(alum =>

        alum.Sexo === e.target.value
      )
      setAlumnos(alumnosnew)
    }
    
    else if(e.target.checked===false) {
      setAlumnos(alumnospor)
    }
        
          
  
  }
 



  const BuscarOption=(inp)=>{

    if(valor==="Cedula"){
     
      const alumnosnew = alumnospor.filter(alum =>

        alum.Cedula!=="No posee" &&  alum.Cedula.includes(inp)
      )
      setAlumnos(alumnosnew)
    }

    else{
      
      const alumnosnew = alumnospor.filter(alum =>

        alum.Nombre.includes(inp)
      )
      setAlumnos(alumnosnew)
    }
  }


  const BuscarPintar = (va) => {
    setValor(va)
    if (va === "") {
      setAlumnos(alumnospor)
    }
  }

  const Mandaraeditar = (id) => {
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
       
      </div>
      <div className="contenedor-tabla">
        <div className="contenedor-formularioo">
          <form action="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
            
              height="24px"
              viewBox="0 -960 960 960"
              width="70px"
              fill="#5f6368"
            >
              <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
            <input type="text" placeholder={`BUSCAR POR ${valor==="Cedula"? "CEDULA":"NOMBRE"}`}  onChange={(e) => BuscarOption(e.target.value)} />



            <select name="" id="" onChange={(e) => BuscarPintar(e.target.value)}>
              <option value="">Selecciona</option>
              <option value="Instrumento">Instrumento</option>
              <option value="Programa">Programa</option>
              <option value="Cedula">Cedula</option>
              <option value="Modulo">Modulo</option>
              <option value="Edad">Edad</option>
            </select>

            {
              valor === "Instrumento" && <select name="" id="" onChange={e => filtradoInstrumento(e.target.value)}>
                <option value="">Seleccione</option>
                <option value="Flauta">Flauta</option>
                <option value="Violin">Violin</option>
                <option value="Cuatro">Cuatro</option>
                <option value="Mandolina">Mandolina</option>
                <option value="Mandola">Mandola</option>
                <option value="Guitarra">Guitarra</option>
                <option value="Clarinete">Clarinete</option>
                <option value="Oboe">Oboe</option>
                <option value="Viola">Viola</option>
                <option value="Cello">Cello</option>
                <option value="Trompeta">Trompeta</option>
                <option value="Trombon">Trombon</option>
                <option value="Fagot">Fagot</option>
                <option value="Percusion">Percusion</option>
                <option value="Corno">Corno</option>
              </select>
            }
            {
              valor === "Modulo" && <select name="" id=""  onChange={e => filtradoModulo(e.target.value)}>
                 <option value="">Seleccione</option>
                <option value="San Jose">San Jose</option>
                <option value="Cumbo">Cumbo</option>
                <option value="Pueblo Nuevo">Pueblo Nuevo</option>
                <option value="Mato">Mato</option>
              </select>
            }


            {
              valor === "Programa" && <select name="" id="" onChange={e => filtradoPrograma(e.target.value)}>
                <option value="">Seleccione</option>
                <option value="Coro">Coral</option>
                <option value="Alma llanera">Alma llanera</option>
                <option value="Orquestal">Orquestal</option>
                <option value="Kinder Musical">Kinder Musical</option>
              </select>
            }

            {
              valor === "Edad" && <select name="" id="" onChange={e => filtradoEdad(e.target.value)}>
                 <option value="">Seleccione</option>
                <option value="15">15</option>
                <option value="26">26</option>
                <option value="12">12</option>

              </select>
            }
            

            <div className="opciones-buscar">
          <label htmlFor="">
            Femenino
            <input type="checkbox" value="femenino"   onChange={e => filtradoSexo(e)}/>
          </label>
          <label htmlFor="">
            Masculino
            <input type="checkbox" value="masculino"   onChange={e => filtradoSexo(e)}/>
          </label>
      
        </div>
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



              <Tabla alumnos={alumnos}></Tabla>



            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Matricula;

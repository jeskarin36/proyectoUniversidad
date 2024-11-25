import React, { useState, useEffect } from 'react';
import "./Inventario.css";
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import Tabla from './Tabla';

function Inventario({ Manejador }) {

  const URL = "http://localhost:8000/Instrumento/"
  const [instrumentos, setInstrumentos] = useState([])
  const [instrumentos2, setInstrumentos2] = useState([])
  const [busqueda, setBusqueda] = useState("");
  const UsuarioCabeza1=sessionStorage.getItem('Nombre');
  const UsuarioCabeza2=sessionStorage.getItem('Cargo');
  const UsuarioCabeza4=sessionStorage.getItem('Rol');
  const navigate = useNavigate();
  useEffect(() => {
    getInstrumentos();
  }, [])


  const getInstrumentos = async () => {

    const res = await axios.get(URL)
    console.log(res)
    setInstrumentos(res.data)
    setInstrumentos2(res.data)

  }

  const deleteInstrument = async (id) => {
    await axios.delete(`${URL}${id}`)
    getInstrumentos();
  }

  const buscar = (textt) => {
 
    const alumnosnew = instrumentos2.filter(inst =>

      inst.Nombre.toLowerCase().includes(textt.toLocaleLowerCase())
    )
    setInstrumentos(alumnosnew)


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

        deleteInstrument(id)
      }
    })



  };

  const VerIntrumento=(id)=>{
    navigate(`/Inventario/DetalleInstrumento/${id}`)
  }

  const Mandaraeditar = (id) => {
    navigate(`/Inventario/EditarInstrumento/${id}`)
  }

  const filtradoPrograma = (e) => {



    if (e.target.checked === true) {
      const alumnosnew = instrumentos2.filter(inst =>


        inst.Nombre === "Flauta" && e.target.value === "Orquestal" ||
        inst.Nombre === "Clarinete" && e.target.value === "Orquestal" ||
        inst.Nombre === "Corno" && e.target.value === "Orquestal" ||
        inst.Nombre === "Fagot" && e.target.value === "Orquestal" ||
        inst.Nombre === "Trombon" && e.target.value === "Orquestal" ||
        inst.Nombre === "Trompeta" && e.target.value === "Orquestal" ||
        inst.Nombre === "Cello" && e.target.value === "Orquestal" ||
        inst.Nombre === "Oboe" && e.target.value === "Orquestal" ||
        inst.Nombre === "Viola" && e.target.value === "Orquestal" ||

        inst.Nombre === "Mandolina" && e.target.value === "Alma Llanera" ||
        inst.Nombre === "Cuatro" && e.target.value === "Alma Llanera" ||
        inst.Nombre === "Mandola" && e.target.value === "Alma Llanera" ||
        inst.Nombre === "Bandola" && e.target.value === "Alma Llanera" ||
        inst.Nombre === "Guitarra" && e.target.value === "Alma Llanera"

      )
      setInstrumentos(alumnosnew)
    }

    else if (e.target.checked === false) {
      setInstrumentos(instrumentos2)
    }



  }


  
  
      
  
  
   

  return (
    <div className='contenedor-inventario'>
      <div className="cabeza">
        <div className="top">
          <button id="menu-btn">
            <span className="material-icons-sharp active"> menu</span>
          </button>
          <div className="theme-toggler" onClick={Manejador}>
            <span className="material-icons-sharp active"> light_mode</span>
            <span className="material-icons-sharp"> dark_mode</span>
          </div>
          <div className="profilee">
            <div className="info">
            <p>
                
                Hey, <b>{UsuarioCabeza1}</b>
              </p>
              <small className="text-muted">{UsuarioCabeza2}</small>
            </div>
            <div className="profile-photo">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="contenedor-opcionesss">
        {
          UsuarioCabeza4==="Visor"?null:<a href='/Inventario/NuevoInstrumento'>+ Nuevo Registro</a>
        }

        
      </div>

      <div className="contenedor-formulario-Instrumento">
          <form action="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="50px"
              fill="#5f6368"
            >
              <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
            <input onChange={e=>buscar(e.target.value)} type="text" placeholder="BUSCAR POR NOMBRE" />
            <div className="opciones-inventario">
              <label htmlFor="">
              
                <input type="checkbox" value="Orquestal" id='or' onChange={e => filtradoPrograma(e)} />
             <span>Orquestal</span>
              </label>
              <label htmlFor="">
               
                <input type="checkbox" value="Alma Llanera" id='al' onChange={e => filtradoPrograma(e)} />
                <span>Alma llanera</span>
              </label>

            </div>
          </form>
        </div>
      <div className="contenedor-tabla-inventario">
        <div className="contenedor-registro-inventario">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Codigo</th>
                <th>Marca</th>
                <th>Tamaño</th>
                <th>Estado</th>
              {
                UsuarioCabeza4==="Visor"?null:  <th>Acciones</th>
              }
              </tr>
            </thead>
            <tbody>
              <Tabla busqueda={busqueda} UsuarioCabeza4={UsuarioCabeza4} VerIntrumento={VerIntrumento} instrumentos={instrumentos} Mandaraeditar={Mandaraeditar} confirmacion={confirmacion}></Tabla>




            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}

export default Inventario

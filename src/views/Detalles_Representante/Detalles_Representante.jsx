import React, { useState,useEffect }  from 'react'
import "./Detalles_Representante.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';



function Detalles_Representante({Manejador}) {

    let { id } = useParams();
  

  
    const navigate = useNavigate();
    const URL = "http://localhost:8000/Representante/"
   const URL2 = "http://localhost:8000/Audiografia/"
   

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [cedula, setCedula] = useState("");
    const [telefono, setTelefono] = useState("");
    const [estado, setEstado] = useState("");
    const [municipio, setMunicipio] = useState("");
    const [sector, setSector] = useState("");
    const [calle, setCalle] = useState("");
    const [representant, setRepresentante] = useState([]);
    const UsuarioCabeza1=sessionStorage.getItem('Nombre');
    const UsuarioCabeza2=sessionStorage.getItem('Cargo');
    const [img, setimg] = useState("");

    useEffect(() => {
      getRepresentante();
      
    }, [])
  
  
    const getRepresentante = async () => {
      
      const res = await axios.get(`${URL}${id}`);
      const res2 = await axios.get(`${URL2}${res.data.Id_Audiografia}`);
      setRepresentante(res.data.Nombre);
      setNombre(res.data.Nombre)
      setApellido(res.data.Apellido)
      setCedula(res.data.Cedula)
      setTelefono(res.data.Telefono)
      setEstado(res.data.Estado);
      setMunicipio(res.data.Municipio)
      setSector(res.data.Sector)
      setCalle(res.data.Calle)
     

     

   
      setimg(res2.data.File)
     
    
    

    }
  


  return (
    <div className="contenedor_editar-representante">
    <div className="cabeza-usuario">
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

    <div className="contenedor-opciones-representante">

      <div className='contenedor-back-re'>
        <button onClick={() => navigate("/Representante")}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" /></svg></button>
        <h6>regresar</h6>
      </div>
   

    </div>



    <div className="contenedor-formulario-Editar-representante">

      <form action="" >
      <div className="container-form-info">
                    <h3>Datos Del Representante</h3>
      </div>

      <div className="envoltorio-Matricula">
      <div className="form-group-matricula-img">
    
          <img src={`http://localhost:8000/${img}`} alt="" />
        
         </div>

         <div className="envoltorio-datos-Matricula-alum">
         <div className="form-group-Matricula2">
          <label htmlFor="">Nombre*</label>
          <input type="text" value={nombre}  readOnly />

        </div>
        <div className="form-group-Matricula2">
          <label htmlFor="">Apellido *</label>
          <input type="text" value={apellido}  readOnly  />

        </div>
        <div className="form-group-Matricula2">
          <label htmlFor="">CEDULA *</label>
          <input type="number" value={cedula}  readOnly/>

        </div>
        <div className="form-group-Matricula2">
          <label htmlFor="">TELEFONO*</label>
          <input type="number" value={telefono}  readOnly  />

        </div>
      

        <div className="form-group-Matricula2">
          <label htmlFor="">ESTADO*</label>
          <select>
               <option value={estado}>{estado}</option>
          </select>


        </div>
        <div className="form-group-Matricula2">
          <label htmlFor="">MUNICIPIO*</label>
          <select>
          <option value={municipio}>{municipio}</option>
          </select>


        </div>
        <div className="form-group-Matricula2">
          <label htmlFor="">SECTOR*</label>
          <select >
          <option value={sector}>{sector}</option>
          </select>

        </div>
        <div className="form-group-Matricula2">
          <label htmlFor="">CALLE*</label>
          <select >
          <option value={calle}>{calle}</option>
          </select>


        </div>
        <div className="container-form-info">
                
                    </div>
         </div>
      

       
     </div>
      </form>



    </div>

  </div>
  )
}

export default Detalles_Representante

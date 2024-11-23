import React,{useState, useEffect} from 'react'
import "./DetalleInstrumento.css"
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import axios from 'axios'

function DetalleInstrumento({Manejador}) {

    let { id } = useParams();
    const navigate=useNavigate();
    const URL = "http://localhost:8000/Instrumento/"
      const URL2 = "http://localhost:8000/Modulo/"
    const [modulos,setModulos]=useState([]);
    const [nombre,setNombre]=useState("");
    const [marca,setMarca]=useState("");
    const [tamaño,setTamaño]=useState("");
    const [programa,setPrograma]=useState("");
    const [codigo,setCodigo]=useState("");
    const [modulo,setModulo]=useState(null);
    const [modulo2,setModulo2]=useState("");
    const [estado,setEstado]=useState("");
    const UsuarioCabeza1=sessionStorage.getItem('Nombre');
    const UsuarioCabeza2=sessionStorage.getItem('Cargo');
    useEffect(() => {
      getInstrumento();
      getModulo();
    }, [])
  
  
    const getInstrumento = async () => {
      
      const res = await axios.get(`${URL}${id}`);
     
      setNombre(res.data.Nombre);
      setMarca(res.data.Marca);
      setTamaño(res.data.Tamaño)
      setCodigo(res.data.Codigo)
      setEstado(res.data.Estado);
      setModulo2(res.data.Deposito.Nombre) 
    
    }
  
  
    const getModulo= async () => {
  
      const res = await axios.get(URL2)
      console.log(res.data)
      setModulos(res.data)
      
  }
  


  return (
    <div className='container-Editar-instrumento'>
      
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

    <div className="contenedor-opciones-instrumento">
    
    <div className='contenedor-back-instrumento'>
    <button onClick={()=>navigate("/Inventario") }><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg></button>
    <h6>regresar</h6>
    </div>
    
     
    </div>
    <div className='contenedor-formulario-editar-instrumento'>

    <form action="">
    <div className="container-form-info">
                    <h3>Datos Del Instrumento</h3>
                    </div>
<div className="form-group-instrumento">

      <label htmlFor="">INSTRUMENTO*</label>
      <select  onChange={(e) => setNombre(e.target.value)}>
      <option value={nombre}>{nombre}</option>
     </select>
     

    </div>

    <div className="form-group-instrumento">

<label htmlFor="">MARCA*</label>
<select  onChange={(e) => setMarca(e.target.value)}>
<option value="">{marca}</option>

</select>


</div>
    
    <div className="form-group-instrumento">
      <label htmlFor="">TAMAÑO*</label>
      <select   onChange={(e) => setTamaño(e.target.value)}>
      <option value="">{tamaño}</option>
    
     </select>
  

    </div>
   
    
      
  
    
    <div className="form-group-instrumento">
      <label htmlFor="">Codigo*</label>
      <input type="text" value={codigo}  readOnly/>
     
    </div>
    <div><bt /></div>
   
      
       <div className="form-group-instrumento">
      <label htmlFor="">ESTADO*</label>
     <select  >
     <option value="">{estado}</option>
   
     </select>
     

    </div>
    
    {
      estado==="Deposito"? <div className="form-group-instrumento">
      <label htmlFor="">Deposito*</label>
     <select  onChange={(e) => setModulo(e.target.value)}>
    { modulo2?<option value="">{modulo2}</option>:<option value="">"No Tiene Modulo Asignado"</option>
   }
    
   {
    modulos.map(mon=>(
      <option value={mon.id}>{mon.Nombre}</option>
    ))
   }
     </select>
    

    </div>:null
    }
          
   
   
</form>

 </div>
    </div>
  )
}

export default DetalleInstrumento
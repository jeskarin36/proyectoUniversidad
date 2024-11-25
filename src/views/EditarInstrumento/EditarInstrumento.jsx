import React,{useState, useEffect} from 'react';
import "./EditarInstrumento.css";
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import axios from 'axios'


function NuevoRegistroInstru({Manejador}) {


  const UsuarioCabeza1=sessionStorage.getItem('Nombre');
    const UsuarioCabeza2=sessionStorage.getItem('Cargo');
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

  const agregar=async(e)=>{
   
    e.preventDefault()
    
   estado==="Asignado"? setModulo(null): null
   
    await axios.put(`${URL}${id}`,{
      
      Nombre:nombre,
      Marca:marca,
      Tamaño:tamaño,
      Programa:programa,
      Codigo:codigo,
      Estado:estado,
      Id_Deposito:modulo,
      createdAt:"2024-10-23",
      updatedAt:"2024-10-23"
    })
    navigate("/Inventario")
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

    <form action="" onSubmit={agregar}>
    <div className="container-form-info">
                    <h3>Datos Del Instrumento</h3>
                    </div>
    <div className="envoltorio-Matricula">
      <div className="envoltorio-datos-Matricula-alum">
      <div className="form-group-Matricula">

<label htmlFor="">INSTRUMENTO*</label>
<select  onChange={(e) => setNombre(e.target.value)}>
<option value={nombre}>{nombre}</option>
<option value="flauta">Flauta</option>
        <option value="violin">Violin</option>
        <option value="cuatro">Cuatro</option>
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


</div>

<div className="form-group-Matricula">

<label htmlFor="">MARCA*</label>
<select  onChange={(e) => setMarca(e.target.value)}>
<option value="">{marca}</option>
<option value="Yamaha">Yahama</option>
        <option value="Sherechazde">Sherechazde</option>
        <option value="Quirma">Quirma</option>
        <option value="Jiplf">Jiplf</option>
        <option value="Optelf">Optelf</option>
        <option value="Britest">Britest</option>
</select>


</div>

<div className="form-group-Matricula">
<label htmlFor="">TAMAÑO*</label>
<select   onChange={(e) => setTamaño(e.target.value)}>
<option value="">{tamaño}</option>
<option value="2/4">2/4</option>
        <option value="3/4">3/4</option>
        <option value="4/4">4/4</option>
        <option value="Estandar">Estandar</option>
</select>


</div>


<div className="form-group-Matricula">
<label htmlFor="">Codigo*</label>
<input type="text" value={codigo}  onChange={(e) => setCodigo(e.target.value)} id="" placeholder='ESCRIBA EL CODIGO' readOnly/>

</div>
<div><bt /></div>


 <div className="form-group-Matricula">
<label htmlFor="">ESTADO*</label>
<select  onChange={(e) => setEstado(e.target.value)}>
<option value="">{estado}</option>
<option value="Asignado">Asignado</option>
<option value="Deposito">Deposito</option>
</select>


</div>

{
estado==="Deposito"? <div className="form-group-Matricula">
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
    
      </div>
    </div>
   
    <div className='bloquee'>
      
      
      
   </div>
    <input type="submit" value="Registrar" />
</form>

 </div>
    </div>
  )
}

export default NuevoRegistroInstru


import React, { useState,useEffect } from "react"
import "./EditarRepresentante.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';



const EditarRepresentante = ({ Manejador }) => {

  let { id } = useParams();
  

  
  const navigate = useNavigate();
  const URL = "http://localhost:8000/Representante/"
  const URL2 = "http://localhost:8000/upload/"
    const URL3 = "http://localhost:8000/Audiografia/"

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
  const [ruta, setRuta] = useState("");
  const [ImagetBase, setImagetBase] = useState("");
  const [CambiolaImagen, setCambiolaImagen] = useState(false);
  const [codigoImagenVieja, setCodigoImagenVieja] = useState("");

  useEffect(() => {
    getRepresentante();
    
  }, [])


  const getRepresentante = async () => {
    
    const res = await axios.get(`${URL}${id}`);
    const res2 = await axios.get(`http://localhost:8000/Audiografia/${res.data.Id_Audiografia}`);
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
    setCodigoImagenVieja(res.data.Id_Audiografia)
    setRuta(`http://localhost:8000/${res2.data.File}`)
  }


  const cambiarImg=(e)=>{
    e.preventDefault()
  
    setRuta(null)
    setRuta(e.target.files[0])
    setImagetBase(e.target.files[0])
   
    setRuta(window.URL.createObjectURL(e.target.files[0]))
   setCambiolaImagen(true)
}

  const agregar = async (e) => {
   e.preventDefault()
  
   const res2 = await axios.get(`http://localhost:8000/Audiografia/`);

   const dat= res2.data.filter(re=>re.File===ImagetBase.name)

  if(dat.length!==0){
   console.log(dat)
   alert("El Nombre de esa Imagen no esta disponible")
  }else{
    await axios.put(`${URL3}${codigoImagenVieja}`,{
      id:codigoImagenVieja,
      Nombre:nombre,
      File:ImagetBase.name,
      createdAt:"2024-10-23",
      updatedAt:"2024-10-23"
    })

    await axios.put(`${URL}${id}`, {
      Nombre: nombre,
      Apellido: apellido,
      Cedula: cedula,
      Telefono: telefono,
      Estado: estado,
      Municipio: municipio,
      Sector: sector,
      Calle: calle,
      Id_Audiografia:codigoImagenVieja,
      createdAt:"2024-10-23",
      updatedAt:"2024-10-23"
    })
    

    const formData = new FormData();
    formData.append('file', ImagetBase);
    await axios.post(URL2,formData)
 navigate("/Representante")
    if(CambiolaImagen===true){
      await axios.delete(`http://localhost:8000/EliminarFoto/${img}`)
    }

   
  }
    
    

  
  }






  return (<div className="contenedor_editar-representante">
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

      <form action="" onSubmit={agregar}>
      <div className="container-form-info">
                    <h3>Datos Del Representante</h3>
      </div>

      <div className="envoltorio-Matricula">
        <div className="form-group-matricula-img">
          <img src={ruta}  alt="" />
          <label htmlFor="foto" className="foto">Subir Imagen aqui+</label>
         <input type="file" name="foto" id="foto" onChange={e=>cambiarImg(e)} />
         </div>
 
 
      <div className="envoltorio-datos-Matricula-alum">
      <div className="form-group-Matricula">
          <label htmlFor="">Nombre*</label>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder='ESCRIBA SU NOMBRE' />

        </div>
        <div className="form-group-Matricula">
          <label htmlFor="">Apellido *</label>
          <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} placeholder='ESCRIBA SU APELLIDO' />

        </div>
        <div className="form-group-Matricula">
          <label htmlFor="">CEDULA *</label>
          <input type="number" value={cedula} onChange={(e) => setCedula(e.target.value)} placeholder='ESCRIBA SU CEDULA' readOnly/>

        </div>
        <div className="form-group-Matricula">
          <label htmlFor="">TELEFONO*</label>
          <input type="number" value={telefono} onChange={(e) => setTelefono(e.target.value)} placeholder='ESCRIBA SU TELEFONO' />

        </div>
        <div className="form-group-Matricula">
          <label htmlFor="">ESTADO*</label>
          <select onChange={(e) => setEstado(e.target.value)}>
               <option value={estado}>{estado}</option>
          </select>


        </div>
        <div className="form-group-Matricula">
          <label htmlFor="">MUNICIPIO*</label>
          <select onChange={(e) => setMunicipio(e.target.value)}>
          <option value={municipio}>{municipio}</option>
          </select>


        </div>
        <div className="form-group-Matricula">
          <label htmlFor="">SECTOR*</label>
          <select onChange={(e) => setSector(e.target.value)}>
          <option value={sector}>{sector}</option>
          </select>

        </div>
        <div className="form-group-Matricula">
          <label htmlFor="">CALLE*</label>
          <select onChange={(e) => setCalle(e.target.value)} >
          <option value={calle}>{calle}</option>
          </select>


        </div>
      </div>
      </div>

       
        <div className="container-form-info">
                
                    </div>
        <button type="Submit" >Registrar</button>
      </form>



    </div>






  </div>
  )
}

export default EditarRepresentante;

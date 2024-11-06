import React from 'react'
import "./NuevoRegistroAlum.css"
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const URL = "http://localhost:8000/Matricula/"
const url2="http://localhost:8000/Instrumento/";
const url3="http://localhost:8000/Representante/";
const url4="http://localhost:8000/Programa/";
const url5="http://localhost:8000/Modulo/";

function NuevoRegistroAlum({ Manejador }) {

  const [nombre, setnombre] = useState("")
  const [apellido, setapellido] = useState("")
  const [cedula, setcedula] = useState("")
  const [edad, setedad] = useState("")
  const [sexoo, setsexoo] = useState("")
  const [id_instrumento, setid_instrumento] = useState("")
  const [id_representante, setid_representante] = useState("")
  const [modulo, setmodulo] = useState("")
  const [colegio, setcolegio] = useState("")
  const [turno, setturno] = useState("")
  const [grado, setgrado] = useState("")
  const [enfermedad, setenfermedad] = useState("")
  const [codigo, setcodigo] = useState([])
 
  
  //insturmento
  const [instrumento, setinstrumento] = useState("")
  const [marca, setmarca] = useState("")
  const [tamaño, settamaño] = useState("")
  const [programa, setprograma] = useState("")
  const [moduloinstru, setmoduloinstru] = useState("")
  const [estadoinstr, setestadoinstr] = useState("")
  
  //REPRESNETANTE
  const [nombrerepre, setnombrerepre] = useState("")
  const [apellidorepre, setapellidorepre] = useState("")
  const [cedularepresen, setcedularepresen] = useState([])
  const [telefonorepresenta, settelefonorepresenta] = useState("")
  const [estadoubica, setestadoubica] = useState("")
  const [municipioubica, setmunicipioubica] = useState("")
  const [sectorrepresen, setsectorrepresen] = useState("")
  const [callerepresenta, setcallerepresenta] = useState("")

  const [getprogr, setGetprogr] = useState([])
  const [getmodulo, setModel] = useState([])

  const [id_modulo, setid_modulo] = useState("")
  const [id_programa, setid_programa] = useState("")
  const [codigo2,setcodigo2]=useState("")
  const [essss,setessss]=useState("Asignado")
  const navigate = useNavigate();
  
 
  const subirAlumno = async (e) => {
    alert("gfdgdfgdfg")
 e.preventDefault();


alert(id_instrumento)
alert(id_representante)
alert(id_modulo)
alert(id_programa)

await axios.post(URL, {
  Nombre: nombre,
  Apellido: apellido,
  Cedula: cedula,
  Edad: edad,
  Sexo: sexoo,
  Modulo: modulo,
  Colegio: colegio,
  Turno: turno,
  Grado: grado,
  Enfermedad: enfermedad,
  id_representante: id_representante,
  id_instrumento: id_instrumento,
  id_modulo:id_modulo,
  id_programa:id_programa,
  createdAt: "2024-10-23",
  updatedAt: "2024-10-23"
})



await axios.put(`${url2}${id_instrumento}`, {
     
  Nombre: instrumento,
  Marca: marca,
  Tamaño: tamaño,
  Codigo: codigo2,
  Estado:essss,
  Id_Deposito:null,
  createdAt: "2024-10-23",
  updatedAt: "2024-10-23",
  Deposito: null
})    

   


    navigate("/Matricula")

  }

  useEffect(() => {
    Cargarcodigos();
}, [])

  const Cargarcodigos= async()=>{
      const co= await axios.get(url2);
      const co2= await axios.get(url3);
      const co3= await axios.get(url4);
      const co4= await axios.get(url5);
      setcodigo(co.data)
      setcedularepresen(co2.data)
      setGetprogr(co3.data)
      setModel(co4.data)
      
  }
 
  
  

const BuscarInstrumento= async(id)=>{
  const instru= await axios.get(`${url2}${id}`);
  console.log(instru.data)
  setid_instrumento(instru.data.id)
  setcodigo2(instru.data.Codigo)
    setinstrumento(instru.data.Nombre)
    setmarca(instru.data.Marca)
    settamaño(instru.data.Tamaño)
    setprograma(instru.data.Programa)
  
    setestadoinstr(instru.data.Estado)
    setmoduloinstru(instru.data.Deposito.Nombre)
 
}

const BuscarRepresentante= async(id)=>{
  const represen= await axios.get(`${url3}${id}`);
  console.log(represen.data)
  setid_representante(represen.data.id)
  
   setnombrerepre(represen.data.Nombre);
   setapellidorepre(represen.data.Apellido);
   settelefonorepresenta(represen.data.Telefono);
   setestadoubica(represen.data.Estado);
   setmunicipioubica(represen.data.Municipio);
   setsectorrepresen(represen.data.Sector);
   setcallerepresenta(represen.data.Calle);
 
}


  return (
    <div className="container-nuevo-alumno2">
      <div className="cabeza-usuario2">
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
      <div className="contenedor-opciones-alumnos">

        <div className='contenedor-back-alumnos'>
          <buttonn onClick={() => navigate("/Matricula")}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" /></svg></buttonn>
          <h6>regresar</h6>
        </div>
      

      </div>

      <div className='contenedor-formulario-nuevo-alumno'>

        <form action="" onSubmit={subirAlumno}>
        <div className="container-form-info">
                    <h3>Datos Del Alumno</h3>
                    </div>
          <div className="form-group-alumno">
            <label htmlFor="">NOMBRES* </label>
            <input type="text" name="" value={nombre} onChange={(e) => setnombre(e.target.value)} id="" placeholder='ESCRIBA LOS NOMBRES' />
          </div>
          <div className="form-group-alumno">
            <label htmlFor="">APELLIDOS*</label>
            <input type="text" name="" value={apellido} onChange={(e) => setapellido(e.target.value)} id="" placeholder='ESCRIBA LOS APELLIDOS' />
          </div>
          <div className="form-group-alumno">
            <label htmlFor="">CEDULA*</label>
            <input type="text" name="" value={cedula} onChange={(e) => setcedula(e.target.value)} id="" placeholder='ESCRIBA LA CEDULA' />
          </div>
          <div className="form-group-alumno">
            <label htmlFor="">SEXO*</label>
            <div>
              <label htmlFor="">Femenino  <input type="checkbox" name="sexo" value="femenino" id="" onChange={(e) => setsexoo("femenino")} /></label>
              <label htmlFor="">Masculino  <input type="checkbox" name="sexo" value="masculino" id="" onChange={(e) => setsexoo("masculino")} /></label>
            </div>
          </div>
          <div className="form-group-alumno">
            <label htmlFor="">EDAD*</label>
            <input type="number" value={edad} onChange={(e) => setedad(e.target.value)} name="" id="" placeholder='ESCRIBA LA EDAD' />
          </div>

          <div className="form-group-alumno">
            <label htmlFor="">PROGRAMA*</label>
            <select name="" id="" onChange={e=>setid_programa(e.target.value)}>
            <option value="">Seleccione una Opcion</option>
            {  getprogr.map(prog=>(
              <option value={prog.id}>{prog.Nombre}</option>
            ))}
              
            </select>
          </div>

          <div className="form-group-alumno">
            <label htmlFor="">MODULO*</label>
            <select name="" id=""  onChange={e=>setid_modulo(e.target.value)} >
              <option value="">Selecciones una Opcion</option>
              {  getmodulo.map(mo=>(
              <option value={mo.id}>{mo.Nombre}</option>
            ))}
            </select>
          </div>

          <div className="container-form-info">
                    <h3>Datos Del Instrumento</h3>
                    </div>
          <div className="form-group-alumno">
            <label htmlFor="">Codigo*</label>
            <select name="" id=""  onChange={(e)=>BuscarInstrumento(e.target.value)}>
              <option key="15"  value="">SELECCIONA UNA OPCION</option>
               {codigo.map((codi)=>(
               
               (codi.Estado==="Deposito")? <option key={codi.Codigo}  value={codi.id} >{codi.Codigo}</option> : <h1></h1>
           
               ))}
              
            </select>
          </div>
          <div className="form-group-alumno">
            <label htmlFor="">INSTRUMENTO*</label>
            <select name="" id="" >
              <option value="Alma Llanera">{instrumento}</option>
            </select>
          </div>
          <div className="form-group-alumno">
            <label htmlFor="">MARCA*</label>
            <select name="" id="" >
              <option value="Alma Llanera">{marca}</option>
            </select>
          </div>
          <div className="form-group-alumno">
            <label htmlFor="">TAMAÑO*</label>
            <select name="" id="" >
              <option value="">{tamaño}</option>
              
            </select>
          </div>
          
         
          
          <div className="form-group-alumno">
            <label htmlFor="">ESTADO*</label>
            <select name="" id="" >
              <option value="">{estadoinstr}</option>
             
            </select>
          </div>
          <div className="form-group-alumno">
            <label htmlFor="">Deposito*</label>
            <select name="" id="">
              <option value="">{moduloinstru}</option>
            
            </select>
          </div>
          <div className='bloque'>
            <hr />
          </div>

          <div className="container-form-info">
                    <h3>Datos Del Representante</h3>
                    </div>


          <div className="form-group-alumno">
            <label htmlFor="">CEDULA*</label>
            <select name="" id="" onChange={(e)=>BuscarRepresentante(e.target.value)}>
            <option value="">"SELECCIONA UNA OPCION"</option>
              {cedularepresen.map((cedu)=>(
               
               <option key={cedu.id}  value={cedu.id} >{cedu.Cedula}</option>
           
               ))}
            </select>
          </div>
          <div className="form-group-alumno">
            <label htmlFor="">NOMBRE*</label>
            <select name="" id="" >
              <option value="">{nombrerepre}</option>
             
            </select>
          </div>
          <div className="form-group-alumno">
            <label htmlFor="">APELLIDO*</label>
            <select name="" id="" >
              <option value="">{apellidorepre}</option>
             
            </select>
          </div>
          <div className="form-group-alumno">
            <label htmlFor="">TELEFONO*</label>
            <select name="" id="" >
              <option value="">{telefonorepresenta}</option>
             
            </select>
          </div>

          <div className="form-group-alumno">
            <label htmlFor="">ESTADO*</label>
            <select name="" id="">
              <option value="">{estadoubica}</option>
            </select>
          </div>
          <div className="form-group-alumno">
            <label htmlFor="">MUNICIPIO*</label>
            <select name="" id="" >
              <option value="">{municipioubica}</option>
            
            </select>
          </div>
          <div className="form-group-alumno">
            <label htmlFor="">SECTOR*</label>
            <select name="" id="" >
              <option value="">{sectorrepresen}</option>
              
            </select>
          </div>
          <div className="form-group-alumno">
            <label htmlFor="">CALLE*</label>
            <select name="" id="" >
              <option value="">{callerepresenta}</option>
             
            </select>
          </div>
         
          <div className="container-form-info">
                    <h3>Datos Del Alumno</h3>
                    </div>
          <div className="form-group-alumno">
            <label htmlFor="">Donde Estudia*</label>
            <select name="" id="" onChange={(e) => setcolegio(e.target.value)}>
              <option value="">SELECCIONA UNA OPCION</option>
              <option value="Lander">Lander</option>
              <option value="Zapico">Zapico</option>
              <option value="San Jose">San Jose</option>
            </select>
          </div>
          <div className="form-group-alumno">
            <label htmlFor="">Turno del cole*</label>
            <select name="" id="" onChange={(e) => setturno(e.target.value)}>
              <option value="">SELECCIONA UNA OPCION</option>
              <option value="mañana">mañana</option>
              <option value="tarde">tarde</option>

            </select>
          </div>
          <div className="form-group-alumno">
            <label htmlFor="">Grado*</label>
            <select name="" id="" onChange={(e) => setgrado(e.target.value)}>
              <option value="">SELECCIONA UNA OPCION</option>
              <option value="1 grado">1 grado</option>
              <option value="2 grado">2 grado</option>
              <option value="3 grado">3 grado</option>
              <option value="4 grado">4 grado</option>
              <option value="5 grado">5 grado</option>
              <option value="6 grado">6 grado</option>
              <option value="1 año">1 año</option>
              <option value="2 año">2 año</option>
              <option value="3 año">3 año</option>
              <option value="4 año">4 año</option>
              <option value="5 año">5 año</option>
              <option value="Universitario">Universitario</option>
              
            </select>
          </div>
          <div className="container-form-info">
                  
                    </div>
          <div className="form-group-alumno">
            <label htmlFor="">Padece alguna Enfermedad*</label>
            <input type="text" name="" placeholder='Escriba la Enfermedad' id="" onChange={(e) => setenfermedad(e.target.value)} />
          </div>
          
          <div className="container-form-info">
                   
                    </div>
          <button type="Submit" >Registrar</button>
        </form>

      </div>
      <div></div>
    </div>

  )
}

export default NuevoRegistroAlum

import React,{ useState,useEffect }  from 'react'
import "./Detalles_Alumnos.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';


function Detalles_Alumnos({Manejador}) {

   let { id } = useParams();

   const URL = "http://localhost:8000/Matricula/"
   const URL2 = "http://localhost:8000/Modulo/"
   const URL3 = "http://localhost:8000/Programa/"
    const URL4 = "http://localhost:8000/Instrumento/"
     const URL5 = "http://localhost:8000/Representante/"
      const URL6 = "http://localhost:8000/Audiografia/"

  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [cedula, setCedula] = useState("")
  const [edad, setEdad] = useState("")
  const [sexoo, setSexoo] = useState("")
  const [id_instrumento2, setid_instrumento] = useState("")
  const [id_representante, setid_representante] = useState("")
  const [modulo2, setModulo2] = useState([])
  const [modulo3, setModulo3] = useState([])
  const [programa2, setPrograma2] = useState([])
  const [programa3, setPrograma3] = useState([])
  const [colegio, setcolegio] = useState("")
  const [turno, setturno] = useState("")
  const [grado, setgrado] = useState("")
  const [enfermedad, setenfermedad] = useState("")
  const [enfermedad2, setenfermedad2] = useState("")
  const [codigo, setcodigo] = useState([])
  const [mostrarIns, setmostrarIns] = useState(true)
  const [mostrarDatos, setmostrarDatos] = useState(true)
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
  const [cedularepresen, setcedularepresen] = useState("")
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
  const [instrumentoidviejo,setinstrumentoidviejo]=useState(0)
  const [instrumentonombreviejo,setinstrumentonombreviejo]=useState(0)
  const [instrumentocodigoviejo,setinstrumentocodigoviejo]=useState(0)
  const [instrumentomarcaviejo,setinstrumentomarcaviejo]=useState(0)
  const [instrumentotamañoviejo,setinstrumentotamañoviejo]=useState(0)
  const [deposito,setdeposito]=useState(null)
  const [estadoo,setestadoo]=useState("Asignado")
  const [imgRepre,setImgRepre]=useState("")
  const [imgAlumno,setImgAlumno]=useState("")
  const [cedulaRe,setcedulaRe]=useState("")
  const UsuarioCabeza1=sessionStorage.getItem('Nombre');
  const UsuarioCabeza2=sessionStorage.getItem('Cargo');

  const navigate = useNavigate();
  

  useEffect(() => {
    getAlumno()
    getModulo();
    getPrograma();
    Cargarcodigos()
  }, [])


  const getAlumno = async () => {
    
    const res = await axios.get(`${URL}${id}`);
    const res2 = await axios.get(`${URL6}${res.data.id_audiografia}`);
    setNombre(res.data.Nombre)
    setApellido(res.data.Apellido)
    setCedula(res.data.Cedula)
    setEdad(res.data.Edad)
    setSexoo(res.data.Sexo)
    BuscarModulo(res.data.id_modulo)
    BuscarPrograma(res.data.id_programa)
    BuscarInstrumento(res.data.id_instrumento)
    BuscarRepresentante(res.data.id_representante)
    setinstrumentoidviejo(res.data.id_instrumento)
    BuscarViejoInstrumento(res.data.id_instrumento)
    setcolegio(res.data.Colegio);
    setturno(res.data.Turno)
    setgrado(res.data.Grado)
    setenfermedad(res.data.Enfermedad)
  
    setImgAlumno(res2.data.File)
    console.log(res2.data.File)
    
  }

  const getModulo= async () => {

    const res = await axios.get(URL2)
   
    setModulo2(res.data);
    
}

const getPrograma= async () => {

    const res = await axios.get(URL3)
   
    setPrograma2(res.data);
    
}

const Cargarcodigos= async()=>{
    const co= await axios.get(URL4);
    const co2= await axios.get(URL5);
    setcodigo(co.data)
    setcedularepresen(co2.data)
    
}


const BuscarInstrumento= async(id)=>{


    const instru= await axios.get(`${URL4}${id}`);
    

    if(instru.data.id===undefined){
       setmostrarIns(false)
    }
   else{
    setmostrarIns(true)
    setid_instrumento(instru.data.id)
    setcodigo2(instru.data.Codigo)
      setinstrumento(instru.data.Nombre)
      setmarca(instru.data.Marca)
      settamaño(instru.data.Tamaño)
      setprograma(instru.data.Programa)
    
      setestadoinstr(instru.data.Estado)
   }
   
     
     
   
  }

  const BuscarViejoInstrumento= async(id)=>{

    
    const ins= await axios.get(`${URL4}${id}`);
   
    setinstrumentonombreviejo(ins.data.Nombre)
    setinstrumentomarcaviejo(ins.data.Marca)
    setinstrumentotamañoviejo(ins.data.Tamaño)
    setinstrumentocodigoviejo(ins.data.Codigo)
       
    


  }


  const BuscarRepresentante= async(id)=>{
    const represen= await axios.get(`${URL5}${id}`);
    const res2 = await axios.get(`${URL6}${represen.data.Id_Audiografia}`);
    console.log(represen.data)
    setid_representante(represen.data.id)
    
     setnombrerepre(represen.data.Nombre);
     setapellidorepre(represen.data.Apellido);
     settelefonorepresenta(represen.data.Telefono);
     setestadoubica(represen.data.Estado);
     setmunicipioubica(represen.data.Municipio);
     setsectorrepresen(represen.data.Sector);
     setcallerepresenta(represen.data.Calle);
     setcedulaRe(represen.data.Cedula)
     setImgRepre(res2.data.File)
  }

  const BuscarModulo= async(id)=>{
    const ress= await axios.get(`${URL2}${id}`);
    setid_modulo(ress.data.id)
    setModulo3(ress.data)
  }

  const BuscarPrograma= async(id)=>{
    const resss= await axios.get(`${URL3}${id}`);
    setid_programa(resss.data.id)
    setPrograma3(resss.data)
  }



  






  return (
   <div className="contenedor_Editar-alumno">
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

    <div className="contenedor-opciones-alumno">

      <div className='contenedor-back-alumno'>
        <button onClick={() => navigate("/Matricula")}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" /></svg></button>
        <h6>regresar</h6>
      </div>
   

    </div>



    <div className="contenedor-formulario-editar-alumno">

      <form action="" >
      <div className="container-form-info">
                    <h3>Datos Del Alumno</h3>
                    </div>
        <div className="envoltorio-Matricula">
        <div className="form-group-matricula-img">
              <img src={`http://localhost:8000/${imgAlumno}`} alt="" />
             
            </div>
          <div className="envoltorio-datos-Matricula">
          <div className="form-group-Matricula">
            <label htmlFor="">NOMBRES* </label>
            <input type="text" name="" value={nombre}  readOnly />
          </div>
          <div className="form-group-Matricula">
            <label htmlFor="">APELLIDOS*</label>
            <input type="text" name="" value={apellido} readOnly />
          </div>
          <div className="form-group-Matricula">
            <label htmlFor="">CEDULA*</label>
            <input type="text" name="" value={cedula} readOnly />
          </div>
          <div className="form-group-Matricula">
            <label htmlFor="">SEXO*</label>
          
              <label htmlFor="">Femenino</label>  <input type="checkbox" name="sexo" value="femenino" id=""  checked={sexoo==="femenino"?"checked":null} onChange={(e) => setSexoo("femenino")} />
              <label htmlFor="">Masculino </label> <input type="checkbox" name="sexo" value="masculino" id="" checked={sexoo==="masculino"?"checked":null} onChange={(e) => setSexoo("masculino")} />
          
          </div>
          <div className="form-group-Matricula">
            <label htmlFor="">EDAD*</label>
            <input type="number" value={edad} readOnly />
          </div>
          <div className="form-group-Matricula">
            <label htmlFor="">PROGRAMA*</label>
            <select name="" id="" >
            <option value={programa3.id}>{programa3.Nombre}</option>
            </select>
          </div>
          <div className="form-group-alumno2">
            <label htmlFor="">MODULO*</label>
            <select name="" id=""  >
            <option value={modulo3.id}>{modulo3.Nombre}</option>
             
            </select>
          </div>
          </div>
          
        </div>

       
          
      {
        mostrarIns===true ?   <div className="envoltorio2">
        <div className="container-form-info">
                    <h3>Datos Del Instrumento</h3>
                    </div>
        <div className="form-group-matricula-img">
            
              
              
            </div>
            <div className="envoltorio-datos">
          <div className="form-group-alumno2">
            <label htmlFor="">Codigo*</label>
            <select name="" id="" >
            <option key="15"  value={codigo2}>{codigo2}</option>
            
            </select>
          </div>
          <div className="form-group-alumno2">
            <label htmlFor="">INSTRUMENTO*</label>
            <select name="" id="" >
              <option value="Alma Llanera">{instrumento}</option>
            </select>
          </div>
          <div className="form-group-alumno2">
            <label htmlFor="">MARCA*</label>
            <select name="" id="" >
              <option value="Alma Llanera">{marca}</option>
            </select>
          </div>
          <div className="form-group-alumno2">
            <label htmlFor="">TAMAÑO*</label>
            <select name="" id="" >
              <option value="">{tamaño}</option>
              
            </select>
          </div>
          
         
          
          <div className="form-group-alumno2">
            <label htmlFor="">ESTADO*</label>
            <select name="" id="" >
              <option value="">{estadoinstr}</option>
             
            </select>
          </div>
         
          </div>
          </div> : null
      }
       
          <div className="container-form-info">
                    <h3>Datos Del Representante</h3>
                    </div>
       <div className="envoltorio-Matricula">
        <div className="form-group-matricula-img">
              <img src={`http://localhost:8000/${imgRepre}`} alt="" />
             
            </div>
          <div className="envoltorio-datos-Matricula">
          <div className="form-group-Matricula">
            <label htmlFor="">CEDULA*</label>
            <select name="" id="" >
           <option value="">{cedulaRe}</option>
            </select>
          </div>
          <div className="form-group-Matricula">
            <label htmlFor="">NOMBRE*</label>
            <select name="" id="" >
              <option value="">{nombrerepre}</option>
             
            </select>
          </div>
          <div className="form-group-Matricula">
            <label htmlFor="">APELLIDO*</label>
            <select name="" id="" >
              <option value="">{apellidorepre}</option>
             
            </select>
          </div>
          <div className="form-group-Matricula">
            <label htmlFor="">TELEFONO*</label>
            <select name="" id="" >
              <option value="">{telefonorepresenta}</option>
             
            </select>
          </div>

          <div className="form-group-Matricula">
            <label htmlFor="">ESTADO*</label>
            <select name="" id="">
              <option value="">{estadoubica}</option>
            </select>
          </div>
          <div className="form-group-Matricula">
            <label htmlFor="">MUNICIPIO*</label>
            <select name="" id="" >
              <option value="">{municipioubica}</option>
            
            </select>
          </div>
          <div className="form-group-Matricula">
            <label htmlFor="">SECTOR*</label>
            <select name="" id="" >
              <option value="">{sectorrepresen}</option>
              
            </select>
          </div>
          <div className="form-group-Matricula">
            <label htmlFor="">CALLE*</label>
            <select name="" id="" >
              <option value="">{callerepresenta}</option>
             
            </select>
          </div>
          </div>
          </div>
        
         

     {
      colegio!==null?   <div className="envoltorio2">
      <div className="container-form-info">
                  <h3>Datos Del Alumno</h3>
                  </div>
      <div className="form-group-matricula-img">
        
           
          </div>
        <div className="envoltorio-datos2">
        <div className="form-group-alumno2">
          <label htmlFor="">Donde Estudia*</label>
          <select name="" id="" >
            
            <option value={colegio}>{colegio}</option>
       
          </select>
        </div>
        <div className="form-group-alumno22">
          <label htmlFor="">Turno del cole*</label>
          <select name="" id="">
           
            <option value={turno}>{turno}</option> 
          

          </select>
        </div>
        <div className="form-group-alumno2">
          <label htmlFor="">Grado*</label>
          <select name="" id="">
            
            <option value={grado}>{grado}</option>
           
          </select>
        </div>
        
        <div className="form-group-alumno22">
          <label htmlFor="">Padece alguna Enfermedad*</label>
          <input type="text" name="" id="" value={enfermedad}readOnly/>
        </div>
        </div>
        </div>
        :null
     }
          <div className="container-form-info">
                  
                    </div>
        
      </form>



    </div>






  </div>
  )
}

export default Detalles_Alumnos

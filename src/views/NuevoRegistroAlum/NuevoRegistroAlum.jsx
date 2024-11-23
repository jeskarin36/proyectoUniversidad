import React from 'react'
import "./NuevoRegistroAlum.css"
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import silueta from "../../assets/63699.png"
import { useForm } from "react-hook-form"

const URL = "http://localhost:8000/Matricula/"
const url2="http://localhost:8000/Instrumento/";
const url3="http://localhost:8000/Representante/";
const url4="http://localhost:8000/Programa/";
const url5="http://localhost:8000/Modulo/";
const URL6 = "http://localhost:8000/Audiografia/"
 const URL7 = "http://localhost:8000/upload/"

function NuevoRegistroAlum({ Manejador }) {
  const { register, formState: { errors }, handleSubmit } = useForm({ mode: "all" });

  const UsuarioCabeza1=sessionStorage.getItem('Nombre');
  const UsuarioCabeza2=sessionStorage.getItem('Cargo');
  const [nombre, setnombre] = useState("")
  const [apellido, setapellido] = useState("")
  const [cedula, setcedula] = useState("")
  const [edad, setedad] = useState("")
  const [sexoo, setsexoo] = useState("")
  const [id_instrumento, setid_instrumento] = useState(null)
  const [id_representante, setid_representante] = useState("")
  const [modulo, setmodulo] = useState("")
  const [colegio, setcolegio] = useState(null)
  const [turno, setturno] = useState(null)
  const [grado, setgrado] = useState(null)
  const [enfermedad, setenfermedad] = useState(null)
  const [codigo, setcodigo] = useState([])
  const [codigoImg, setcodigoImg] = useState(parseInt(Date.now()*Math.random()-Math.random()-Math.random() ))
  
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
  const [id_programa, setid_programa] = useState(null)
  const [codigo2,setcodigo2]=useState("")
  const [essss,setessss]=useState("Asignado")
  const navigate = useNavigate();
  const[err, seterr]=useState(false);
  const[erredad, seterredad]=useState(false);
  const[alumnos, setAlumnos]=useState([]);
  const[imgRepre, setImgRepre]=useState(silueta);
  const[imgbase, setImgbase]=useState(silueta);
  const[img,setImg]=useState(silueta)
 

   

  const[mostrari,setmostrari]=useState(false)
  const subirAlumno = async (e) => {
   e.preventDefault()
     alert(imgbase)

     if(imgbase==="/src/assets/63699.png"){
        alert("Por Favor Eliga Una Imagen para subir")
     }else{
      await axios.post(URL6,{
        id:codigoImg,
        Nombre:nombre,
        File:imgbase.name,
        createdAt:"2024-10-23",
        updatedAt:"2024-10-23"
      })
       
      
      
      
      
      await axios.post(URL, {
        Nombre: nombre,
        Apellido: apellido,
        Cedula:cedula==="" ? "No Posee":cedula,
        Edad: edad,
        Sexo: sexoo,
        Modulo: modulo,
        Colegio: colegio,
        Turno: turno,
        Grado: grado,
        Enfermedad: enfermedad,
        id_audiografia:codigoImg,
        id_representante: id_representante,
        id_instrumento: id_instrumento,
        id_modulo:id_modulo,
        id_programa:id_programa,
        createdAt: "2024-10-23",
        updatedAt: "2024-10-23"
      }) 
      
      const formData = new FormData();
      formData.append('file', imgbase);
      await axios.post(URL7,formData)
      
      
      
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

  }


  const getAlumnos=async()=>{
    const res = await axios.get(URL)
    setAlumnos(res.data)
    
  }

  useEffect(() => {
    Cargarcodigos();
    getAlumnos()
    
}, [])



const verificarCedula=async(cedul)=>{
     
  setcedula(cedul);
  if(cedul.length===8 || cedul.length===7){
   
    
    alumnos.map(alumn=>{
      
     if(alumn.Cedula===String(cedul)) {
      
       alert("Esa Cedula Ya Existe")
     setcedula("")
       seterr(true)
      }
      
     })
   
  }


}


 const revisondeEdad=(eda)=>{
  setedad(eda)
    if(eda>8 && cedula===null){
      alert("Por Favor Digite La cedula Del Alumno")
      seterredad(true)
      setedad("")
    }else{
      seterredad(false)
    }
 }


 const revisondePrograma=(prog)=>{
  setid_programa(prog)

     if(prog==="9" && id_instrumento!==null){
      alert("El Programa Coro No lleva Instrumento")
      setid_instrumento(null)
      setcodigo2("")
        setinstrumento("")
        setmarca("")
        settamaño("")
        setprograma("")
      
        setestadoinstr("")
        setmoduloinstru("")
     }

     if(prog==="10" && id_instrumento!==null){
      alert("El Programa Kinder Musical No lleva Instrumento")
      setid_instrumento(null)
      setcodigo2("")
        setinstrumento("")
        setmarca("")
        settamaño("")
        setprograma("")
      
        setestadoinstr("")
        setmoduloinstru("")
     }

   
 }


 const revisondeGrado=(grad)=>{
  
     if(grad!=="Univeridad" && edad!==18){
      alert("El Programa Coro No lleva Instrumento")
     }
   
 }


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
  
  if(id_programa==="9" && instru.data.Nombre!==null){
    alert("El Programa Coro no necesita Instrumento")
  }

  else if(id_programa==="10" && instru.data.Nombre!==null){
    alert("El Programa Kinder Musical no necesita Instrumento")
   
  }
  else{
 
    setid_instrumento(instru.data.id)
    setcodigo2(instru.data.Codigo)
      setinstrumento(instru.data.Nombre)
      setmarca(instru.data.Marca)
      settamaño(instru.data.Tamaño)
      setprograma(instru.data.Programa)
    
      setestadoinstr(instru.data.Estado)
      setmoduloinstru(instru.data.Deposito.Nombre)
  }


  if(id_programa===null ){
    alert("Seleccione el Programa Primero")
    setid_instrumento(null)
        setcodigo2("")
          setinstrumento("")
          setmarca("")
          settamaño("")
          setprograma("")
        
          setestadoinstr("")
          setmoduloinstru("")
  }
 


  if(id_programa==="8" && instru.data.Nombre==="Trompeta" ||
    id_programa==="8" && instru.data.Nombre==="Flauta"||
    id_programa==="8" && instru.data.Nombre==="Cello"||
    id_programa==="8" && instru.data.Nombre==="Violin"||
    id_programa==="8" && instru.data.Nombre==="Viola"||
    id_programa==="8" && instru.data.Nombre==="Oboe"||
    id_programa==="8" && instru.data.Nombre==="Clarinete"||
    id_programa==="8" && instru.data.Nombre==="Trombon"||
    id_programa==="8" && instru.data.Nombre==="Fagot"||
    id_programa==="8" && instru.data.Nombre==="Contrabajo"
  ){
     
  }else{
     if(id_programa==="8"){
      alert("No Puedes Ingresar "+ instru.data.Nombre+"Con el programa "+"Sinfonico")
      setid_instrumento(null)
        setcodigo2("")
          setinstrumento("")
          setmarca("")
          settamaño("")
          setprograma("")
        
          setestadoinstr("")
          setmoduloinstru("")
     }
  }
   


  if(id_programa==="7" && instru.data.Nombre==="Mandolina" ||
    id_programa==="7" && instru.data.Nombre==="Mandola"||
    id_programa==="7" && instru.data.Nombre==="Cuatro"||
    id_programa==="7" && instru.data.Nombre==="Guitarra"||
    id_programa==="7" && instru.data.Nombre==="Bandola"||
    id_programa==="7" && instru.data.Nombre==="Contrabajo"

  ){
     
  }else{
    if(id_programa==="7"){
      alert("No Puedes Ingresar "+ instru.data.Nombre+"Con el programa "+"Alma Llanera")
    setid_instrumento(null)
      setcodigo2("")
        setinstrumento("")
        setmarca("")
        settamaño("")
        setprograma("")
      
        setestadoinstr("")
        setmoduloinstru("")
    }
  }
}

const BuscarRepresentante= async(id)=>{
  const represen= await axios.get(`${url3}${id}`);
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
   setImgRepre(`http://localhost:8000/${res2.data.File}`)
}


const cambiarImg=(e)=>{
  e.preventDefault()
  alert("cambio")
  setImgbase(e.target.files[0])
 
  setImg(window.URL.createObjectURL(e.target.files[0]))

}
const confirmacion=()=>{
  
  
  };

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
          <div className="envoltorio2">
            <div className="form-group-matricula-img">
              <img src={img} alt="" />
              <label htmlFor="foto" className="foto">Subir Imagen aqui+</label>
              <input type="file" name="foto" id="foto" onChange={e => cambiarImg(e)} />
             
            </div>
            <div className="envoltorio-datos2">
              <div className="form-group-alumno2">
                <label htmlFor="">NOMBRES* </label>
                <input type="text"{...register("nombre", { required: true})} name="" value={nombre} onChange={(e) => setnombre(e.target.value)} id="" placeholder='ESCRIBA LOS NOMBRES' />
                {errors.nombre?.type === 'required' && <p>introduzca el nombre</p>}
          
              </div>

              <div className="form-group-alumno2">
                <label htmlFor="">APELLIDOS*</label>
                <input type="text" {...register("apellido", { required: true})} name="" value={apellido} onChange={(e) => setapellido(e.target.value)} id="" placeholder='ESCRIBA LOS APELLIDOS' />
                {errors.apellido?.type === 'required' && <p>introduzca el apellido</p>}
              
              </div>
              <div className="form-group-alumno2">
                <label htmlFor="">CEDULA*</label>
                <input type="text"   name="" value={cedula} onChange={(e) => verificarCedula(e.target.value)} id="" placeholder='ESCRIBA LA CEDULA' />
                {err === true ? <p className="text-error">La Cedula Ya Existe</p> : null}
                {erredad === true ? <p className="text-error">Digite La Cedula Del Alumno</p> : null}
                
              </div>
              <div className="form-group-alumno2">
                <label htmlFor="">SEXO*</label>
               
                  <label htmlFor="">Femenino</label>   <input type="checkbox" name="sexo" value="femenino" id="" onChange={(e) => setsexoo("femenino")} />
                  <label htmlFor="">Masculino </label> <input type="checkbox" name="sexo" value="masculino" id="" onChange={(e) => setsexoo("masculino")} />
               
              </div>
              <div className="form-group-alumno2">
                <label htmlFor="">EDAD*</label>
                <input type="number"  {...register("edad", { required: true})}  value={edad} onChange={(e) => revisondeEdad(e.target.value)} name="" id="" placeholder='ESCRIBA LA EDAD' />
                {errors.edad?.type === 'required' && <p>introduzca el edad</p>}
              
              </div>

              <div className="form-group-alumno2">
            <label htmlFor="">PROGRAMA*</label>
            <select name="" {...register("programa", { required: true, })}id="" onChange={e=>revisondePrograma(e.target.value)}>
            <option value="">Seleccione una Opcion</option>
            {  getprogr.map(prog=>(
              <option value={prog.id}>{prog.Nombre}</option>
            ))}
             
            </select>
            {errors.programa?.type === 'required' && <p>seleccione un programa</p>}

          </div>
            </div>
            
          </div>
          <div className="form-group-alumno2">
            <label htmlFor="">MODULO*</label>
            <select name="" {...register("modulo", { required: true, })} id=""  onChange={e=>setid_modulo(e.target.value)} >
              <option value="">Selecciones una Opcion</option>
              {  getmodulo.map(mo=>(
              <option value={mo.id}>{mo.Nombre}</option>
            ))}
            </select>
            {errors.modulo?.type === 'required' && <p>seleccione un modulo</p>}

          </div>
        
         {
         
       id_programa!==null && id_programa!=="9" && id_programa!=="10" ? <div className="envoltorio2">
          <div className="container-form-info">
            <h3>Datos Del Instrumento</h3>
          </div>
          <div className="form-group-matricula-img">
             
            </div>
          
         <div className="envoltorio-datos">
         <div className="form-group-alumno2">
            <label htmlFor="">Codigo*</label>
            <select name="" id=""  {...register("codigo", { required: true, })} onChange={(e)=>BuscarInstrumento(e.target.value)}>
              <option key="15"  value="">SELECCIONA UNA OPCION</option>
               {codigo.map((codi)=>(
               
               (codi.Estado==="Deposito")? <option key={codi.Codigo}  value={codi.id} >{codi.Codigo}</option> : <h1></h1>
           
               ))}
              
            </select>
            {errors.codigo?.type === 'required' && <p>seleccione un codigo</p>}

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
            <select name="" id="">
              <option value="">{tamaño}</option>
              
            </select>
          
          </div>
          
         
          
          <div className="form-group-alumno2">
            <label htmlFor="">ESTADO*</label>
            <select name="" id="" >
              <option value="">{estadoinstr}</option>
             
            </select>
          
          </div>
          <div className="form-group-alumno2">
            <label htmlFor="">Deposito*</label>
            <select name=""id="">
              <option value="">{moduloinstru}</option>
            
            </select>
          
          </div>
         </div>
          </div> :null
         }
          <div className='bloque'>
            <hr />
          </div>

          <div className="container-form-info">
            <h3>Datos Del Representante</h3>
          </div>


      <div className="envoltorio2">
      <div className="form-group-matricula-img">
              <img src={imgRepre} alt="" />
            
            </div>
    <div className="envoltorio-datos">
    <div className="form-group-alumno2">
            <label htmlFor="">CEDULA*</label>
            <select name="" {...register("cedula", { required: true, })} id="" onChange={(e)=>BuscarRepresentante(e.target.value)}>
            <option value="">"SELECCIONA UNA OPCION"</option>
              {cedularepresen.map((cedu)=>(
               
               <option key={cedu.id}  value={cedu.id} >{cedu.Cedula}</option>
           
               ))}
            </select>
            {errors.cedula?.type === 'required' && <p>seleccione un cedula</p>}

          </div>
          <div className="form-group-alumno2">
            <label htmlFor="">NOMBRE*</label>
            <select name=""  id="" >
              <option value="">{nombrerepre}</option>
             
            </select>
         
          </div>
          <div className="form-group-alumno2">
            <label htmlFor="">APELLIDO*</label>
            <select name="" id="" >
              <option value="">{apellidorepre}</option>
             
            </select>
          
          </div>
          <div className="form-group-alumno2">
            <label htmlFor="">TELEFONO*</label>
            <select name="" id="" >
              <option value="">{telefonorepresenta}</option>
             
            </select>
           
          </div>

          <div className="form-group-alumno2">
            <label htmlFor="">ESTADO*</label>
            <select name="" id="">
              <option value="">{estadoubica}</option>
            </select>
        
          </div>
          <div className="form-group-alumno2">
            <label htmlFor="">MUNICIPIO*</label>
            <select name="" id="" >
              <option value="">{municipioubica}</option>
            
            </select>
          
          </div>
          <div className="form-group-alumno2">
            <label htmlFor="">SECTOR*</label>
            <select name="" id="" >
              <option value="">{sectorrepresen}</option>
              
            </select>
        
          </div>
          <div className="form-group-alumno2">
            <label htmlFor="">CALLE*</label>
            <select name="" id="" >
              <option value="">{callerepresenta}</option>
             
            </select>
              
          </div>
    </div>
      </div>
         
          <div className="container-form-info">
                    <h3>Datos Del Alumno</h3>
                    </div>
         <div className="envoltorio">
         <div className="form-group-matricula-img">
             
            </div>
          <div className="envoltorio-datos">
          <div className="form-group-alumno2">
            <label htmlFor="">Donde Estudia*</label>
            <select name="" id="" onChange={(e) => setcolegio(e.target.value)}>
              <option value="">SELECCIONA UNA OPCION</option>
              <option value="Lander">Lander</option>
              <option value="Zapico">Zapico</option>
              <option value="San Jose">San Jose</option>
            </select>
          </div>
          <div className="form-group-alumno22">
            <label htmlFor="">Turno del cole*</label>
            <select name="" id="" onChange={(e) => setturno(e.target.value)}>
              <option value="">SELECCIONA UNA OPCION</option>
              <option value="mañana">mañana</option>
              <option value="tarde">tarde</option>

            </select>
          </div>
          <div className="form-group-alumno2">
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
          
          <div className="form-group-alumno22">
            <label htmlFor="">Padece alguna Enfermedad*</label>
            <input type="text" name="" placeholder='Escriba la Enfermedad' id="" onChange={(e) => setenfermedad(e.target.value)} />
          </div>
          
          </div>
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

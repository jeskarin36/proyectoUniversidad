import React, { useState, useEffect } from 'react';
import "./NuevoRegistroInstru.css";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useForm } from "react-hook-form"

function NuevoRegistroInstru({ Manejador }) {
  const navigate = useNavigate();
  const URL = "http://localhost:8000/Deposito/"
  const URL2 = "http://localhost:8000/Instrumento/"
  const URL3 = "http://localhost:8000/Programa/"

  const [nombre, setNombre] = useState("");
  const [marca, setMarca] = useState("");
  const [tamaño, setTamaño] = useState("");
  const [programas, setProgramas] = useState([]);
  const [programa, setPrograma] = useState(0);
  const [codigo, setCodigo] = useState("");
  const [deposito, setDeposito] = useState([]);
  const [deposito2, setDeposito2] = useState([]);
  const [estado, setEstado] = useState("");
  const [valor, setValor] = useState(0);
  const UsuarioCabeza1=sessionStorage.getItem('Nombre');
  const UsuarioCabeza2=sessionStorage.getItem('Cargo');

  const[erro, seterro]=useState(false);
  const[instrumento, setinstrumento]=useState([]);

  const { register, formState: { errors }, handleSubmit } = useForm({ mode: "all" });



  const getInstrumentos=async()=>{
    const res = await axios.get(URL2)
    setinstrumento(res.data)
  
  }

  useEffect(() => {
    getDeposito();
  getInstrumentos()
    
  }, [])


  const verificarCodigo=async(codi)=>{
     
    setCodigo(codi);

  
    if(codi.length===5 ){

      
      instrumento.map(instrument=>{
       if(instrument.Codigo===codi) {
         alert("Ese Codigo Ya Existe")
       setCodigo("")
         seterro(true)
        }
        
       })
     
    }


  }


  const getDeposito = async () => {
    const res = await axios.get(`${URL}`);
    setDeposito(res.data);
  }




  const agregar = async (e) => {

    alert(nombre)
    alert(marca)
    alert(tamaño)
    alert(programa)
    alert(codigo)
    alert(estado)
    alert(deposito)



    await axios.post(URL2, {

      Nombre: nombre,
      Marca: marca,
      Tamaño: tamaño,
      Programa: programa,
      Codigo: codigo,
      Estado: estado,
      Id_Deposito: deposito2,
      createdAt: "2024-10-23",
      updatedAt: "2024-10-23"

    })
    navigate("/Inventario")
  }


  return (
    <div className='container-nuevo-instrumento'>

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
          <button onClick={() => navigate("/Inventario")}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" /></svg></button>
          <h6>regresar</h6>
        </div>
      

      </div>
      <div className='contenedor-formulario-nuevo-instrumento'>

        <form action="" onSubmit={handleSubmit(agregar)}>
  <div className="container-form-info">
                    <h3>Datos Del Instrumento</h3>
                    </div>
             <div className="envoltorio-Matricula">
                 <div className="envoltorio-datos-Matricula-alum">
                  
          <div className="form-group-Matricula">

        
<label htmlFor="">INSTRUMENTO*</label>
<select {...register("instrumento", { required: true, })} onChange={(e) => setNombre(e.target.value)}>
  <option value="">SELECCIONA UNA OPCION</option>
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
{errors.instrumento?.type === 'required' && <p>seleccione un instrumento</p>}

</div>

<div className="form-group-Matricula">

<label htmlFor="">MARCA*</label>
<select {...register("marca", { required: true, })} onChange={(e) => setMarca(e.target.value)}>
  <option value="">SELECCIONA UNA OPCION</option>
  <option value="Yamaha">Yahama</option>
  <option value="Sherechazde">Sherechazde</option>
  <option value="Quirma">Quirma</option>
  <option value="Jiplf">Jiplf</option>
  <option value="Optelf">Optelf</option>
  <option value="Britest">Britest</option>
</select>
{errors.marca?.type === 'required' && <p>seleccione un instrumento</p>}

</div>

<div className="form-group-Matricula">
<label htmlFor="">TAMAÑO*</label>
<select {...register("tamaño", { required: true, })} onChange={(e) => setTamaño(e.target.value)}>
  <option value="">SELECCIONA UNA OPCION</option>
  <option value="2/4">2/4</option>
  <option value="3/4">3/4</option>
  <option value="4/4">4/4</option>
  <option value="Estandar">Estandar</option>
</select>
{errors.tamaño?.type === 'required' && <p>seleccione un tamaño</p>}

</div>








<div className="form-group-Matricula">
<label htmlFor="">Codigo*</label>
<input type="text" {...register("codigo", { required: true, maxLength: 6 })} value={codigo} onChange={(e) =>verificarCodigo(e.target.value)} id="" placeholder='ESCRIBA EL CODIGO' />
{errors.codigo?.type === 'required' && <p>introduzca el codigo</p>}
{errors.codigo?.type === 'maxLength' && <p>no es un codigo valido</p>}
{erro===true? <p className="text-error">El Codigo Ya Existe</p>:null}
</div>


<div className="form-group-Matricula">
<label htmlFor="">ESTADO*</label>
<select onChange={(e) => setEstado(e.target.value)}>
  <option value="">SELECCIONA UNA OPCION</option>
  <option value="Asignado">Asignado</option>
  <option value="Deposito">Deposito</option>
</select>


</div>


{estado==="Deposito"? <div className="form-group-Matricula">
<label htmlFor="">Deposito*</label>
<select onChange={(e) => setDeposito2(e.target.value)}>
  <option value="" key="GS">SELECCIONA UNA OPCION</option>
  {
    deposito.map(depo => (
      <option value={depo.id} key={depo.id}>{depo.Nombre}</option>
    ))
  }
</select>


</div>: null}





<div className="container-form-info">
       
        </div>
                 </div>
             </div>
          <input  type="submit" value="Registrar" />
          
        </form>

      </div>
    </div>
  )
}

export default NuevoRegistroInstru

import React, { useState, useEffect } from "react"
import "./EditarMatricula.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';



const EditarMatricula = ({ Manejador }) => {

  let { id } = useParams();

  const URL = "http://localhost:8000/Matricula/"
  const URL2 = "http://localhost:8000/Modulo/"
  const URL3 = "http://localhost:8000/Programa/"
  const URL4 = "http://localhost:8000/Instrumento/"
  const URL5 = "http://localhost:8000/Representante/"
  const URL6 = "http://localhost:8000/Audiografia/"
 const URL7 = "http://localhost:8000/upload/"


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
  const [codigo2, setcodigo2] = useState("")
  const [essss, setessss] = useState("Asignado")
  const [instrumentoidviejo, setinstrumentoidviejo] = useState(0)
  const [instrumentonombreviejo, setinstrumentonombreviejo] = useState(0)
  const [instrumentocodigoviejo, setinstrumentocodigoviejo] = useState(0)
  const [instrumentomarcaviejo, setinstrumentomarcaviejo] = useState(0)
  const [instrumentotamañoviejo, setinstrumentotamañoviejo] = useState(0)
  const [deposito, setdeposito] = useState(null)
  const [estadoo, setestadoo] = useState("Asignado")
  const navigate = useNavigate();
  const UsuarioCabeza1 = sessionStorage.getItem('Nombre');
  const UsuarioCabeza2 = sessionStorage.getItem('Cargo');
  const [img, setimg] = useState("");
  const [ruta, setRuta] = useState("");
  const [ImagetBase, setImagetBase] = useState("");
  const [ImagenVieja, setImagenVieja] = useState("");
  const [CambiolaImagen, setCambiolaImagen] = useState(false);
  

  useEffect(() => {
    getAlumno()
    getModulo();
    getPrograma();
    Cargarcodigos()
  }, [])


  const getAlumno = async () => {

    const res = await axios.get(`${URL}${id}`);
    const res2 = await axios.get(`http://localhost:8000/Audiografia/${res.data.Id_Audiografia}`);
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
    setImagenVieja(res2.data.File)
   setimg(`http://localhost:8000/${res2.data.File}`)
  }

  const getModulo = async () => {

    const res = await axios.get(URL2)

    setModulo2(res.data);

  }

  const getPrograma = async () => {

    const res = await axios.get(URL3)

    setPrograma2(res.data);

  }

  const Cargarcodigos = async () => {
    const co = await axios.get(URL4);
    const co2 = await axios.get(URL5);
    setcodigo(co.data)
    setcedularepresen(co2.data)

  }


  const BuscarInstrumento = async (id) => {


    const instru = await axios.get(`${URL4}${id}`);
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

  const BuscarViejoInstrumento = async (id) => {


    const ins = await axios.get(`${URL4}${id}`);

    setinstrumentonombreviejo(ins.data.Nombre)
    setinstrumentomarcaviejo(ins.data.Marca)
    setinstrumentotamañoviejo(ins.data.Tamaño)
    setinstrumentocodigoviejo(ins.data.Codigo)




  }


  const BuscarRepresentante = async (id) => {
    const represen = await axios.get(`${URL5}${id}`);
    const res2 = await axios.get(`http://localhost:8000/Audiografia/${represen.data.Id_Audiografia}`);
    console.log(represen.data)
    setid_representante(represen.data.id)

    setnombrerepre(represen.data.Nombre);
    setapellidorepre(represen.data.Apellido);
    settelefonorepresenta(represen.data.Telefono);
    setestadoubica(represen.data.Estado);
    setmunicipioubica(represen.data.Municipio);
    setsectorrepresen(represen.data.Sector);
    setcallerepresenta(represen.data.Calle);
    setRuta(`http://localhost:8000/${res2.data.File}`)
  }

  const BuscarModulo = async (id) => {
    const ress = await axios.get(`${URL2}${id}`);
    setid_modulo(ress.data.id)
    setModulo3(ress.data)
  }

  const BuscarPrograma = async (id) => {
    const resss = await axios.get(`${URL3}${id}`);
    setid_programa(resss.data.id)
    setPrograma3(resss.data)
  }



  const subir = async (e) => {
    e.preventDefault()
    alert(id_modulo)

    await axios.put(`${URL6}${cedula}`, {
      id: cedula,
      Nombre: nombre,
      File: ImagetBase.name,
      createdAt: "2024-10-23",
      updatedAt: "2024-10-23"
    })

    await axios.put(`${URL}${id}`, {

      Nombre: nombre,
      Apellido: apellido,
      Cedula: cedula,
      Edad: edad,
      Sexo: sexoo,
      Colegio: colegio,
      Turno: turno,
      Grado: grado,
      Enfermedad: enfermedad,
      id_audiografia: cedula,
      id_representante: id_representante,
      id_instrumento: id_instrumento2,
      id_modulo: id_modulo,
      id_programa: id_programa,
      createdAt: "2024-10-23",
      updatedAt: "2024-10-23",

    })



    if (id_instrumento2 === instrumentoidviejo) {
      alert("son iguales")
    } else {
      await axios.put(`${URL4}${id_instrumento2}`, {

        Nombre: instrumento,
        Marca: marca,
        Tamaño: tamaño,
        Codigo: codigo2,
        Estado: estadoo,
        Id_Deposito: null,
        createdAt: "2024-10-23",
        updatedAt: "2024-10-23",

      })


      await axios.put(`${URL4}${instrumentoidviejo}`, {

        Nombre: instrumentonombreviejo,
        Marca: instrumentomarcaviejo,
        Tamaño: instrumentotamañoviejo,
        Codigo: instrumentocodigoviejo,
        Estado: "Deposito",
        Id_Deposito: id_modulo,
        createdAt: "2024-10-23",
        updatedAt: "2024-10-23",

      })

    }

    const formData = new FormData();
    formData.append('file', ImagetBase);
    await axios.post(URL7, formData)


    if(CambiolaImagen===true){
      await axios.delete(`http://localhost:8000/EliminarFoto/${ImagenVieja}`)
    }

    

    navigate("/Matricula")
  }


  const cambiarImg = (e) => {
    e.preventDefault()
    alert("cambio")
    setimg(null)
    setimg(e.target.files[0])
    setImagetBase(e.target.files[0])

    setimg(window.URL.createObjectURL(e.target.files[0]))
    setCambiolaImagen(true)
  }




  return (<div className="contenedor_Editar-alumno">
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

      <form action="" onSubmit={subir}>
        <div className="container-form-info">
          <h3>Datos Del Alumno</h3>
        </div>


        <div className="envoltorio2">
          <div className="form-group-alumnosEditar-img">
            <img src={img} alt="" />
            <label htmlFor="foto" className="foto">Subir Imagen aqui+</label>
            <input type="file" name="foto" id="foto" onChange={e => cambiarImg(e)} />
          </div>
          <div className="envoltorio-datos2">
            <div className="form-group-alumno2">
              <label htmlFor="">NOMBRES* </label>
              <input type="text" name="" value={nombre} onChange={(e) => setNombre(e.target.value)} id="" placeholder='ESCRIBA LOS NOMBRES' />
            </div>
            <div className="form-group-alumno2">
              <label htmlFor="">APELLIDOS*</label>
              <input type="text" name="" value={apellido} onChange={(e) => setApellido(e.target.value)} id="" placeholder='ESCRIBA LOS APELLIDOS' />
            </div>
            <div className="form-group-alumno2">
              <label htmlFor="">CEDULA*</label>
              <input type="text" name="" value={cedula} onChange={(e) => setCedula(e.target.value)} id="" placeholder='ESCRIBA LA CEDULA' />
            </div>
            <div className="form-group-alumno2">
              <label htmlFor="">SEXO*</label>
              <div>
                <label htmlFor="">Femenino  <input type="checkbox" name="sexo" value="femenino" id="" checked={sexoo === "femenino" ? "checked" : null} onChange={(e) => setSexoo("femenino")} /></label>
                <label htmlFor="">Masculino  <input type="checkbox" name="sexo" value="masculino" id="" checked={sexoo === "masculino" ? "checked" : null} onChange={(e) => setSexoo("masculino")} /></label>
              </div>
            </div>
            <div className="form-group-alumno2">
              <label htmlFor="">EDAD*</label>
              <input type="number" value={edad} onChange={(e) => setEdad(e.target.value)} name="" id="" placeholder='ESCRIBA LA EDAD' />
            </div>

            <div className="form-group-alumno2">
              <label htmlFor="">PROGRAMA*</label>
              <select name="" id="" onChange={e => setid_programa(e.target.value)}>
                <option value={programa3.id}>{programa3.Nombre}</option>
                <option value="">Seleccione una Opcion</option>
                {programa2.map(prog => (
                  <option value={prog.id}>{prog.Nombre}</option>
                ))}

              </select>
            </div>
          </div>
        </div>
        <div className="form-group-alumno2">
          <label htmlFor="">MODULO*</label>
          <select name="" id="" onChange={e => setid_modulo(e.target.value)} >
            <option value={modulo3.id}>{modulo3.Nombre}</option>
            <option value="">Selecciones una Opcion</option>
            {modulo2.map(mo => (
              <option value={mo.id}>{mo.Nombre}</option>
            ))}
          </select>
        </div>
        <div className="container-form-info">
          <h3>Datos Del Instrumento</h3>
        </div>
        <div className="form-group-alumno2">
          <label htmlFor="">Codigo*</label>
          <select name="" id="" onChange={(e) => BuscarInstrumento(e.target.value)}>
            <option key="15" value={codigo2}>{codigo2}</option>
            <option key="15" value="">SELECCIONA UNA OPCION</option>
            {codigo.map((codi) => (

              (codi.Estado === "Deposito") ? <option key={codi.Codigo} value={codi.id} >{codi.Codigo}</option> : <h1></h1>

            ))}

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
        <div className="form-group-alumno2">
          <label htmlFor="">Deposito*</label>
          <select name="" id="">
            <option value="">{moduloinstru}</option>

          </select>
        </div>

        <div className="container-form-info">
          <h3>Datos Del Representante</h3>
        </div>
        <div className="envoltorio2">
          <div className="form-group-matricula-img">
            <img src={ruta} alt="" />

          </div>
          <div className="envoltorio-datos2">
            <div className="form-group-alumno2">
              <label htmlFor="">CEDULA*</label>
              <select name="" id="" onChange={(e) => BuscarRepresentante(e.target.value)}>
                <option value="">"SELECCIONA UNA OPCION"</option>
                {cedularepresen.map((cedu) => (

                  <option key={cedu.id} value={cedu.id} >{cedu.Cedula}</option>

                ))}
              </select>
            </div>
            <div className="form-group-alumno2">
              <label htmlFor="">NOMBRE*</label>
              <select name="" id="" >
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

        <div className="envoltorio2">
          <div className="form-group-matricula-img">

          </div>
          <div className="envoltorio-datos2">
            <div className="form-group-alumno22">
              <label htmlFor="">Donde Estudia*</label>
              <select name="" id="" onChange={(e) => setcolegio(e.target.value)}>

                <option value={colegio}>{colegio}</option>
                <option value="">SELECCIONA UNA OPCION</option>
                <option value="Lander">Lander</option>
                <option value="Zapico">Zapico</option>
                <option value="San Jose">San Jose</option>
              </select>
            </div>
            <div className="form-group-alumno2">
              <label htmlFor="">Turno del cole*</label>
              <select name="" id="" onChange={(e) => setturno(e.target.value)}>

                <option value={turno}>{turno}</option>
                <option value="">SELECCIONA UNA OPCION</option>
                <option value="mañana">mañana</option>
                <option value="tarde">tarde</option>

              </select>
            </div>
            <div className="form-group-alumno2">
              <label htmlFor="">Grado*</label>
              <select name="" id="" onChange={(e) => setgrado(e.target.value)}>

                <option value={grado}>{grado}</option>
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

            <div className="form-group-alumno2">
              <label htmlFor="">Padece alguna Enfermedad*</label>
              <input type="text" name="" id="" value={enfermedad} onChange={(e) => setenfermedad(e.target.value)} />
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

export default EditarMatricula;

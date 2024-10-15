import React from 'react'
import "./NuevoRegistroAlum.css"

function NuevoRegistroAlum({Manejador}) {
  return (
    <div className="container-nuevo-alumno">
    <div className="cabeza">
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
    <div className="contenedor-opciones">
    
      <div className='contenedor-back'>
      <button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg></button>
      <h6>regresar</h6>
      </div>
         <h3>Regristrar alumnos</h3>
       
      </div>
     
     <div className='contenedor-formulario-nuevo-alumno'>

      <form action="">
          <div className="form-group">
            <label htmlFor="">APELLIDOS*</label>
            <input type="text" name="" id="" placeholder='ESCRIBA LOS APELLIDOS'/>
          </div>
          <div className="form-group">
            <label htmlFor="">NOMBRES* </label>
            <input type="text" name="" id="" placeholder='ESCRIBA LOS NOMBRES'/>
          </div>
          <div className="form-group">
            <label htmlFor="">CEDULA*</label>
            <input type="text" name="" id="" placeholder='ESCRIBA LA CEDULA'/>
          </div>
          <div className="form-group">
            <label htmlFor="">SEXO*</label>
           <div>
           <label htmlFor="">Femenino  <input type="radio" name="sexo" id=""  /></label>
           <label htmlFor="">Masculino  <input type="radio" name="sexo" id=""  /></label>
           </div>
          </div>
          <div className="form-group">
            <label htmlFor="">EDAD*</label>
            <input type="number" name="" id="" placeholder='ESCRIBA LA EDAD' />
          </div>
          <div className="form-group">
            <label htmlFor="">PROGRAMA*</label>
           <select name="" id="">
           <option value="">SELECCIONA UNA OPCION</option>
            <option value="">Alma Llanera</option>
            <option value="">Sinfonico</option>
            <option value="">Coro</option>
           </select>
          </div>
          <div className="form-group">
            <label htmlFor="">Instrumento*</label>
            <select name="" id="">
            <option value="">SELECCIONA UNA OPCION</option>
            <option value="">Alma Llanera</option>
            <option value="">Sinfonico</option>
            <option value="">Coro</option>
           </select>
          </div>
          <div className="form-group">
            <label htmlFor="">Codigo*</label>
            <select name="" id="">
            <option value="">SELECCIONA UNA OPCION</option>
            <option value="">Alma Llanera</option>
            <option value="">Sinfonico</option>
            <option value="">Coro</option>
           </select>
          </div>
         <div className='bloque'>
             <hr />
         </div>
          <div className="form-group">
            <label htmlFor="">Nombre Y Apellido del representante*</label>
            <input type="number" name="" id="" placeholder='ESCRIBA SU NOMBRE' />
          </div>
          <div className="form-group">
            <label htmlFor="">CEDULA del representante*</label>
            <input type="number" name="" id=""  placeholder='ESCRIBA SU CEDULA'/>
          </div>
          <div className="form-group">
            <label htmlFor="">TELEFONO del representante*</label>
            <input type="number" name="" id="" placeholder='ESCRIBA SU TELEFONO'/>
          </div>
         
          <div className="form-group">
            <label htmlFor="">ESTADO*</label>
            <select name="" id="">
            <option value="">SELECCIONA UNA OPCION</option>
            <option value="">Alma Llanera</option>
            <option value="">Sinfonico</option>
            <option value="">Coro</option>
           </select>
          </div>
          <div className="form-group">
            <label htmlFor="">MUNICIPIO*</label>
            <select name="" id="">
            <option value="">SELECCIONA UNA OPCION</option>
            <option value="">Alma Llanera</option>
            <option value="">Sinfonico</option>
            <option value="">Coro</option>
           </select>
          </div>
           <div className="form-group">
            <label htmlFor="">SECTOR*</label>
            <select name="" id="">
            <option value="">SELECCIONA UNA OPCION</option>
            <option value="">Alma Llanera</option>
            <option value="">Sinfonico</option>
            <option value="">Coro</option>
           </select>
          </div>
           <div className="form-group">
            <label htmlFor="">CALLE*</label>
            <select name="" id="">
            <option value="">SELECCIONA UNA OPCION</option>
            <option value="">Alma Llanera</option>
            <option value="">Sinfonico</option>
            <option value="">Coro</option>
           </select>
          </div>
          <div className='bloque'>
             <hr />
         </div>
          <div className="form-group">
            <label htmlFor="">Donde Estudia*</label>
            <select name="" id="">
            <option value="">SELECCIONA UNA OPCION</option>
            <option value="">Alma Llanera</option>
            <option value="">Sinfonico</option>
            <option value="">Coro</option>
           </select>
          </div>
           <div className="form-group">
            <label htmlFor="">Turno del cole*</label>
            <select name="" id="">
            <option value="">SELECCIONA UNA OPCION</option>
            <option value="">Alma Llanera</option>
            <option value="">Sinfonico</option>
            <option value="">Coro</option>
           </select>
          </div>
          <div className="form-group">
            <label htmlFor="">Grado*</label>
            <select name="" id="">
            <option value="">SELECCIONA UNA OPCION</option>
            <option value="">Alma Llanera</option>
            <option value="">Sinfonico</option>
            <option value="">Coro</option>
           </select>
          </div>
          <div className="form-group">
            <label htmlFor="">Padece alguna Enfermedad*</label>
            <input type="text" name="" id="" />
          </div>
          <div className='bloquee'>
             <hr />
         </div>
          <input type="submit" value="Registrar" />
      </form>
      
       </div>
     <div></div>
   </div>
   
  )
}

export default NuevoRegistroAlum

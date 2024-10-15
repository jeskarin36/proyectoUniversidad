import React from 'react';
import "./NuevoRegistroInstru.css";


function NuevoRegistroInstru({Manejador}) {
  return (
    <div className='container-nuevo-instru'>
      
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

    <div className="contenedor-opciones-instru">
    
    <div className='contenedor-back-instru'>
    <button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg></button>
    <h6>regresar</h6>
    </div>
       <h3>Agregar Instrumentos</h3>
     
    </div>
    <div className='contenedor-formulario-nuevo-instru'>

<form action="">
<div className="form-groupp">
      <label htmlFor="">INSTRUMENTO*</label>
      <select name="" id="">
      <option value="">SELECCIONA UNA OPCION</option>
      <option value="">Flauta</option>
      <option value="">Violin</option>
      <option value="">Cuatro</option>
     </select>
    </div>

    <div className="form-groupp">
      <label htmlFor="">MARCA* </label>
      <input type="text" name="" id="" placeholder='ESCRIBA LA MARCA'/>
    </div>
    <div className="form-groupp">
      <label htmlFor="">TAMAÑO*</label>
      <select name="" id="">
      <option value="">SELECCIONA UNA OPCION</option>
      <option value="">2/4</option>
      <option value="">3/4</option>
      <option value="">4/4</option>
     </select>
    </div>
    <div className="form-groupp">
      <label htmlFor="">Modulo*</label>
     <select name="" id="">
     <option value="">SELECCIONA UNA OPCION</option>
      <option value="">San Jose</option>
      <option value="">Cumbo</option>
      <option value="">Pueblo Nuevo</option>
     </select>
    </div>
    
      
    <div className="form-groupp">
      <label htmlFor="">PROGRAMA*</label>
     <select name="" id="">
     <option value="">SELECCIONA UNA OPCION</option>
      <option value="">Alma Llanera</option>
      <option value="">Sinfonico</option>
      <option value="">Coro</option>
     </select>
    </div>
    
    <div className="form-groupp">
      <label htmlFor="">Codigo*</label>
      <input type="text" name="" id="" placeholder='ESCRIBA EL CODIGO'/>
    </div>
    <div><bt /></div>
    
    <div> <label htmlFor="">ESTADO*</label>
           
           <label htmlFor="">Asignado  <input type="radio" name="estado" id=""  /></label>
           <label htmlFor="">Deposito <input type="radio" name="estado" id=""  /></label>
           </div>
          
   
    <div className='bloquee'>
       <bt />
       <bt />
       <bt />
   </div>
    <input type="submit" value="Registrar" />
</form>

 </div>
    </div>
  )
}

export default NuevoRegistroInstru

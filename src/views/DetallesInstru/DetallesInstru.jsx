import React from "react";
import "./DetallesInstru.css";

function DetallesInstru({Manejador}) {
  return (
    <div className="container-detalles-instru">
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
        <div className="contenedor-back">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#EA3323"
            >
              <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
            </svg>
          </button>
          <h6>regresar</h6>
        </div>
        <h3>Detalles del instrumento</h3>
      </div>

      <div className="contenedor-detalles-ins">
        <div className="contenedor-detalles-instru">
          <div className="contenedor-detalles-imgg"></div>
          <div className="contenedor-detalles-datoss">
            <h2>Datos del Instrumento</h2>
            <div className="caja-con-info">
              <h4>Nombre</h4>
              <p>violin</p>
            </div>
            <div className="caja-con-info">
              <h4>Marca</h4>
              <p>ideal</p>
            </div>
            <div className="caja-con-info">
              <h4>Tamaño</h4>
              <p>3/4</p>
            </div>
            <div className="caja-con-info">
              <h4>Codigo</h4>
              <p>0565</p>
            </div>
            <div className="caja-con-info">
              <h4>Estado</h4>
              <p>deposito</p>
            </div>
          </div>
        </div>
       
        
        </div>
    </div>
  );
}

export default DetallesInstru;

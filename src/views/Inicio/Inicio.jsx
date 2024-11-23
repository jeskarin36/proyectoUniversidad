import React, { useState, useEffect } from 'react';
import "./Inicio.css"
import axios from "axios"
import foto from'../../assets/fo.jpg'
import { useHref } from 'react-router-dom';


function Inicio({ Manejador }) {

    const URL = "http://localhost:8000/representante/"
    const [representantes, setRepresentantes] = useState([]);
    const UsuarioCabeza1=sessionStorage.getItem('Nombre');
    const UsuarioCabeza2=sessionStorage.getItem('Cargo');
    
    useEffect(() => {
        getRepresentantes();
       
    }, [])
    
   

    const getRepresentantes = async () => {
        const res = await axios.get(URL)
        setRepresentantes(res.data)
        
    }
    console.log(representantes)
    
  
   

    return (
        <div className='container-inicio'>
          
              
               
            
          <div className="cabeza">
        <div className="top">
          <button id="menu-btn">
            <span className="material-icons-sharp active"> menu</span>
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




    

    

      <main>

           
            
            <div class="insights">
                <div class="sales" onClick={"/Inventario"}>
                    <span class="material-icons-sharp">analytics</span>
                    <div class="middle">
                        <div class="left">
                           <h3>Total Alumnos Pueblo Nuevo</h3>
                            <h2>152</h2>
                        </div>
                     

                    </div>
                    
                </div>
                <div class="expenses">
                    <span class="material-icons-sharp">bar_chart</span>
                    <div class="middle">
                        <div class="left">
                            <h3>Total Alumnos Mato</h3>
                            <h2>52</h2>
                        </div>
                    

                        </div>
                    
                </div>
                <div class="income">
                    <span class="material-icons-sharp">stacked_line_chart</span>
                    <div class="middle">
                        <div class="left">
                            <h3>Total Alumnos Cumbo</h3>
                            <h2>105</h2>
                        </div>
                     

                    </div>
                   
                </div>
            </div>
            



</main>

<div className='fot'>
<h1>Sistema de Informacion Nueclo San Jose</h1>
<div className='f'>
    <img src={foto} alt="width= height=380" />
    </div>
</div>
</div>

    )
}

export default Inicio

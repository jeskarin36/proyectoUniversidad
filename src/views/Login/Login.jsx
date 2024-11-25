import React, { useEffect, useState } from 'react'
import "./Login.css"
import video from '../../assets/vid.mp4'
import logo from '../../assets/NI-COLOR-H.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { set } from 'react-hook-form'

function Login() {

  const [nombre,setNombre]=useState("")
  
  const [usuarios,setUsuarios]=useState("")
  const [usua,setUsua]=useState(null)
  const [contraseña,setContraseña]=useState("")
  const[erro, seterro]=useState(false);
  const navigate = useNavigate();
const URL = "http://localhost:8000/Usuario/"
const getUsuarios=async()=>{
  const res = await axios.get(URL)
  setUsuarios(res.data)

}


useEffect(()=>{
 getUsuarios()
 
}
,[])

useEffect(()=>{
  if(usua!==null){
  
    sessionStorage.setItem("User", usua.Usuario)
    sessionStorage.setItem("Cargo", usua.Cargo)
    sessionStorage.setItem("Rol", usua.Rol)
    sessionStorage.setItem("Nombre", usua.Nombre)
    sessionStorage.setItem("Id", usua.id)
    navigate(`/Inicio`)
  }
 }
 ,[usua])




const verificaruser=(e)=> {
 e.preventDefault()
 
const usuio=usuarios.find(us=>
  
  us.Usuario===nombre &&  us.Contraseña===contraseña


)



if(usuio!==undefined){
  
 setUsua(usuio)
}else{
  alert("Contraseña o Nombre Invalido")
}


 

 
  
}











  return (



    <div className="login_container">
    <div className="login_form_container">
    <div className="right">
					<video className='v' src={video} autoPlay muted loop></video>
			<h1>Toca, Cantar Y Luchar</h1>
            	</div>
        <div className="left">
            <form className="form_container" onSubmit={e=>verificaruser(e)}>
              <img src={logo} alt="" />
                <h3>Bienvenido de vuelta</h3>


                <div className='a'>
                  <p>Usuario</p>
                  <i className=''> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#999999"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg> </i>
               
                <input
                    type='text'
                    placeholder="Usuario"
                    name="nombre"
                    onChange={e=>setNombre(e.target.value)}
                    id='user'
                    required
                    className="input"
                    
                      />
                        </div>


                      <div className='a'>
                 <p>Contraseña</p>
                <i className='o'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#999999"><path d="M420-360h120l-23-129q20-10 31.5-29t11.5-42q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 23 11.5 42t31.5 29l-23 129Zm60 280q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q104-33 172-132t68-220v-189l-240-90-240 90v189q0 121 68 220t172 132Zm0-316Z"/></svg>
                </i>
                <input 	type='password'
							placeholder="Password"
							name="password"
							id='contraseña'
							required
              onChange={e=>setContraseña(e.target.value)}
							className="input"
						/>
</div>
<button type="submit" className="green_btn"  >
							Acceder
              <i>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#999999"><path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z"/></svg>

              </i>

						</button>
                
               
            </form>

           
        </div>
       
   
    </div>
    
</div>
);
};

export default Login;

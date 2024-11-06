import React from 'react'
import "./Paginaweb.css"
import logo from '../../assets/NI-COLOR-H.png'
import alma from '../../assets/alma.jpg'
import canto from '../../assets/canto.jpg'
import orquestal from '../../assets/orquestal.jpg'
import icon1 from'../../assets/accessibility_new_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png'
import icon2 from'../../assets/diversity_3_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png'
import icon3 from'../../assets/piano_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png'



{
   /**
    * 
import { Swiper,SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverFlow'
import 'swiper/css/paginatino'
import 'swiper/css/navigatino'
import slide_image1 from '../../assets/orquestal.jpg'

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'
    */
}


const Paginaweb = () => {


  return (
    <div className='contenedor-pagina'>

    <div className='cabecera'>


   <img src={logo} alt="" />
        
<nav>
        <ul>
            <li>Inicio</li>
            <li>Programas</li>
            <li>Sobre Nosotros</li>
            <li>Galeria</li>
            <li>Conciertos</li>
            <li>contactanos</li>
            <li> <button className='boton'>Iniciar Seccion</button> </li>

        </ul>
        </nav>
        
    
        
        </div>
        <div className='hero'>

<div className='texto'>
<h1>Tocar,Cantar Y Luchar</h1>
<h2>Nucleo San Jose de Barlovento</h2>
<p>Rumbo a los 50 años formando no solo musicos si no tambien personas actas para la vida en sociedad,, en espacios donde enseñamos que la musica sana y salva y le brindamos a los niños niñas y adolecentes de nuestro pais una oportunidad de soñar </p>
<button className='boton'> Explorar mas  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M80-240v-480h80v480H80Zm560 0-57-56 144-144H240v-80h487L584-664l56-56 240 240-240 240Z"/></svg></button>


</div>
     </div>
     <div className='titulo'>

<p>Nuestros Programas</p>
<h2>Lo que ofrecemos</h2>



</div>
     <div className='programa'>




 <div className='pro'>
    <img src={alma}alt="" />
    <div className='caption'>
    <img src={icon1} alt="" />
    <p>Programa</p>
    <p>Alma Llanera</p>
    </div>
   
 </div>
 <div className='pro'>
    <img src={canto} alt="" />
    <div className='caption'>
    <img src={icon2} alt="" />
    <p>Programa</p>
    <p>Coral</p>
    </div>
    
 </div>



 <div className='pro'>
<img src={orquestal} alt="" />
<div className='caption'>
    <img src={icon3} alt="" />
    <p>Programa</p>
    <p>Orquestal</p>
    </div>

 </div>
     </div>




    {/**
     * 
import { Swiper,SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverFlow'
import 'swiper/css/paginatino'
import 'swiper/css/navigatino'
import slide_image1 from '../../assets/orquestal.jpg'

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'
     */}
    </div>
     
    
  )
}

export default Paginaweb


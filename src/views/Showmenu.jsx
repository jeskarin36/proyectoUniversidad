import React,{useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import Menu from './Menu/Menu'

function Showmenu() {
    let location = useLocation();
  
    const [show,setShow]=useState(false);

    useEffect(() => {
   
        if(location.pathname==="/Representante/NuevoRepresentante"){
            setShow(true)
             alert(location.pathname)
        }else{
            setShow(false)
        }
    }, []);
  
  return (
    <div>
      {Showmenu &&  <Menu ></Menu>}
    </div>
  )
}

export default Showmenu

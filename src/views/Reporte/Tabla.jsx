import React, { useEffect, useState } from 'react'
import "./Tabla.css"
function Tabla({cabecera,instrumentos,filtro,representantes,alumnos,setValorExport,Modulo}) {
    
    const [Nombre,setNombre]=useState("")
    const [Codigo,setCodigo]=useState("")
    const [Marca,setMarca]=useState("")
    const [Tamaño,setTamaño]=useState("")
    const [Estado,setEstado]=useState("")



    const [Apellido,setApellido]=useState("")
    const [Cedula,setCedula]=useState("")
    const [Telefono,setTelefono]=useState("")
    const [Sector,setSector]=useState("")

    const [Edad,setEdad]=useState("")
    const [Programa,setPrograma]=useState("")
    const [Instrumento,setInstrumento]=useState("")

    useEffect(()=>{
       if(filtro==="Inventario"){
        setNombre("")
        setCodigo("")
        setMarca("")
        setTamaño("")
        setEstado("")
        cabecera.map(element => {
            element === "Nombre" ? setNombre(element) : null,
            element === "Codigo" ? setCodigo(element) : null,
            element === "Marca" ? setMarca(element) : null,
            element === "Tamaño" ? setTamaño(element) : null,
            element === "Estado" ? setEstado(element) : null

        }


        )
       }

      else if(filtro==="Representante"){
        setNombre("")
        setApellido("")
        setCedula("")
        setTelefono("")
        setSector("")
        cabecera.map(element => {
            element === "Nombre" ? setNombre(element) : null,
            element === "Apellido" ? setApellido(element) : null,
            element === "Cedula" ? setCedula(element) : null,
            element === "Telefono" ? setTelefono(element) : null,
            element === "Sector" ? setSector(element) : null

        }
        )
       }


       else if(filtro==="Matricula"){
        setNombre("")
        setApellido("")
        setCedula("")
        setEdad("")
        setPrograma("")
        setInstrumento("")
        cabecera.map(element => {
            element === "Nombre" ? setNombre(element) : null,
            element === "Apellido" ? setApellido(element) : null,
            element === "Cedula" ? setCedula(element) : null,
            element === "Edad" ? setEdad(element) : null,
            element === "Programa" ? setPrograma(element) : null,
            element === "Instrumento" ? setInstrumento(element) : null

        }
        )
       }
       

       else if(filtro==="Modulo"){
      
  

        
       }

    },[cabecera])
   


    useEffect(()=>{
        if(filtro==="Modulo"){
      
          
        
        }
    },[Modulo])
 
        



    return (
        <div className='contenedor-tabla-reporte'>
            <table>
                <thead>
                    <tr >
                      
                    {cabecera.map(element =><th>{element}</th>
                    
                )}
                    </tr>
                </thead>
                <tbody>
                  
                       
               
                
{
 filtro==="Inventario"&&   Nombre==="Nombre" && Codigo===""  && Marca===""  && Tamaño===""  && Estado===""? instrumentos.map(ins=>( <tr><td>{ins.Nombre}</td></tr>) ) : null
}

{
   Codigo==="Codigo" && Nombre==="" && Marca===""  && Tamaño===""  && Estado===""? instrumentos.map(ins=><tr><td>{ins.Codigo}</td></tr>) : null
}


{
   Marca==="Marca" && Nombre==="" && Codigo===""  && Tamaño===""  && Estado===""? instrumentos.map(ins=><tr><td>{ins.Marca}</td></tr>) : null
}


{
   Tamaño==="Tamaño" && Nombre==="" && Codigo===""  && Marca===""  && Estado===""? instrumentos.map(ins=><tr><td>{ins.Tamaño}</td></tr>) : null
}

{
   Estado==="Estado" && Nombre==="" && Codigo===""  && Tamaño===""  && Marca===""? instrumentos.map(ins=><tr><td>{ins.Estado}</td></tr>) : null
}


{
    
    Nombre==="Nombre" && Codigo==="Codigo"   && Marca==="" && Tamaño==="" && Estado===""? instrumentos.map(ins=><tr><td>{ins.Nombre}</td><td>{ins.Codigo}</td></tr>) : null
}

{
    
    Nombre==="Nombre" && Codigo==="Codigo" && Marca==="Marca" && Tamaño==="" && Estado===""? instrumentos.map(ins=><tr><td>{ins.Nombre}</td><td>{ins.Codigo}</td><td>{ins.Marca}</td></tr>) : null
}

{
    
    Nombre==="Nombre" && Codigo==="Codigo" && Marca==="Marca" && Tamaño==="Tamaño" && Estado==="" ? instrumentos.map(ins=><tr><td>{ins.Nombre}</td><td>{ins.Codigo}</td><td>{ins.Marca}</td><td>{ins.Tamaño}</td></tr>) : null
}

{
    
    Nombre==="Nombre" && Codigo==="Codigo" && Marca==="Marca" && Tamaño==="Tamaño" && Estado==="Estado" ? instrumentos.map(ins=><tr><td>{ins.Nombre}</td><td>{ins.Codigo}</td><td>{ins.Marca}</td><td>{ins.Tamaño}</td><td>{ins.Estado}</td></tr>) : null
}
   
    
{
    
    Nombre==="" && Codigo==="Codigo" && Marca==="Marca" && Tamaño==="" && Estado==="" ? instrumentos.map(ins=><tr><td>{ins.Codigo}</td><td>{ins.Marca}</td></tr>) : null
}

{
    
    Nombre==="" && Codigo==="Codigo" && Marca==="Marca" && Tamaño==="Tamaño" && Estado==="" ? instrumentos.map(ins=><tr><td>{ins.Codigo}</td><td>{ins.Marca}</td><td>{ins.Tamaño}</td></tr>) : null
}

    {
    
    Nombre==="" && Codigo==="Codigo" && Marca==="Marca" && Tamaño==="Tamaño" && Estado==="Estado" ? instrumentos.map(ins=><tr><td>{ins.Codigo}</td><td>{ins.Marca}</td><td>{ins.Tamaño}</td><td>{ins.Estado}</td></tr>) : null
}

{
    
    Nombre==="" && Codigo==="" && Marca==="Marca" && Tamaño==="Tamaño" && Estado==="Estado" ? instrumentos.map(ins=><tr><td>{ins.Marca}</td><td>{ins.Tamaño}</td><td>{ins.Estado}</td></tr>) : null
}

   {
    
    Nombre==="" && Codigo==="" && Marca==="" && Tamaño==="Tamaño" && Estado==="Estado" ? instrumentos.map(ins=><tr><td>{ins.Tamaño}</td><td>{ins.Estado}</td></tr>) : null
}        
                 

{
    
    Nombre==="Nombre" && Codigo==="" && Marca==="Marca" && Tamaño==="" && Estado==="" ? instrumentos.map(ins=><tr><td>{ins.Nombre}</td><td>{ins.Marca}</td></tr>) : null
}   


{
    
    Nombre==="Nombre" && Codigo==="" && Marca==="" && Tamaño==="Tamaño" && Estado==="" ? instrumentos.map(ins=><tr><td>{ins.Nombre}</td><td>{ins.Tamaño}</td></tr>) : null
}  

{
    
    Nombre==="Nombre" && Codigo==="" && Marca==="" && Tamaño==="" && Estado==="Estado" ? instrumentos.map(ins=><tr><td>{ins.Nombre}</td><td>{ins.Estado}</td></tr>) : null
}


{
    
    Nombre==="" && Codigo==="Codigo" && Marca==="" && Tamaño==="" && Estado==="Estado" ? instrumentos.map(ins=><tr><td>{ins.Codigo}</td><td>{ins.Estado}</td></tr>) : null
}

{
    
    Nombre==="" && Codigo==="Codigo" && Marca==="" && Tamaño==="Tamaño" && Estado==="" ? instrumentos.map(ins=><tr><td>{ins.Codigo}</td><td>{ins.Tamaño}</td></tr>) : null
}


{
    
    Nombre==="" && Codigo==="" && Marca==="Marca" && Tamaño==="Tamaño" && Estado==="" ? instrumentos.map(ins=><tr><td>{ins.Marca}</td><td>{ins.Tamaño}</td></tr>) : null
}

{
    
    Nombre==="" && Codigo==="" && Marca==="Marca" && Tamaño==="" && Estado==="Estado" ? instrumentos.map(ins=><tr><td>{ins.Marca}</td><td>{ins.Estado}</td></tr>) : null
}


  {/*      ////////////////
            Representante

        //////////////  */}
      

      {
 filtro==="Representante"&&   Nombre==="Nombre" && Apellido===""  && Cedula===""  && Telefono===""  && Sector===""? representantes.map(repre=><tr><td>{repre.Nombre}</td></tr>) : null
}

       {
 filtro==="Representante"&&   Nombre==="Nombre" && Apellido==="Apellido"  && Cedula===""  && Telefono===""  && Sector===""? representantes.map(repre=><tr><td>{repre.Nombre}</td><td>{repre.Apellido}</td></tr>) : null
}  

{
 filtro==="Representante"&&   Nombre==="Nombre" && Apellido==="Apellido"  && Cedula==="Cedula"  && Telefono===""  && Sector===""? representantes.map(repre=><tr><td>{repre.Nombre}</td><td>{repre.Apellido}</td><td>{repre.Cedula}</td></tr>) : null
}  

{
 filtro==="Representante"&&   Nombre==="Nombre" && Apellido==="Apellido"  && Cedula==="Cedula"  && Telefono==="Telefono"  && Sector===""? representantes.map(repre=><tr><td>{repre.Nombre}</td><td>{repre.Apellido}</td><td>{repre.Cedula}</td><td>{repre.Telefono}</td></tr>) : null
}  

{
 filtro==="Representante"&&   Nombre==="Nombre" && Apellido==="Apellido"  && Cedula==="Cedula"  && Telefono==="Telefono"  && Sector==="Sector"? representantes.map(repre=><tr><td>{repre.Nombre}</td><td>{repre.Apellido}</td><td>{repre.Cedula}</td><td>{repre.Telefono}</td><td>{repre.Sector}</td></tr>) : null
}  

{
 filtro==="Representante"&&   Nombre==="Nombre" && Apellido===""  && Cedula==="Cedula"  && Telefono===""  && Sector===""? representantes.map(repre=><tr><td>{repre.Nombre}</td><td>{repre.Cedula}</td></tr>) : null
}

{
 filtro==="Representante"&&   Nombre==="Nombre" && Apellido===""  && Cedula===""  && Telefono==="Telefono"  && Sector===""? representantes.map(repre=><tr><td>{repre.Nombre}</td><td>{repre.Telefono}</td></tr>) : null
}
{
 filtro==="Representante"&&   Nombre==="Nombre" && Apellido===""  && Cedula===""  && Telefono===""  && Sector==="Sector"? representantes.map(repre=><tr><td>{repre.Nombre}</td><td>{repre.Sector}</td></tr>) : null
}

{
 filtro==="Representante"&&   Nombre==="" && Apellido==="Apellido"  && Cedula==="Cedula"  && Telefono===""  && Sector===""? representantes.map(repre=><tr><td>{repre.Apellido}</td><td>{repre.Cedula}</td></tr>) : null
}


{
 filtro==="Representante"&&   Nombre==="" && Apellido==="Apellido"  && Cedula===""  && Telefono==="Telefono"  && Sector===""? representantes.map(repre=><tr><td>{repre.Apellido}</td><td>{repre.Telefono}</td></tr>) : null
}



{
 filtro==="Representante"&&   Nombre==="" && Apellido==="Apellido"  && Cedula===""  && Telefono===""  && Sector==="Sector"? representantes.map(repre=><tr><td>{repre.Apellido}</td><td>{repre.Sector}</td></tr>) : null
}



{
 filtro==="Representante"&&   Nombre==="" && Apellido===""  && Cedula==="Cedula"  && Telefono==="Telefono"  && Sector===""? representantes.map(repre=><tr><td>{repre.Cedula}</td><td>{repre.Telefono}</td></tr>) : null
}

{
 filtro==="Representante"&&   Nombre==="" && Apellido===""  && Cedula==="Cedula"  && Telefono===""  && Sector==="Sector"? representantes.map(repre=><tr><td>{repre.Cedula}</td><td>{repre.Sector}</td></tr>) : null
}

{
 filtro==="Representante"&&   Nombre==="" && Apellido===""  && Cedula===""  && Telefono==="Telefono"  && Sector==="Sector"? representantes.map(repre=><tr><td>{repre.Telefono}</td><td>{repre.Sector}</td></tr>) : null
}

{
 filtro==="Representante"&&   Nombre==="" && Apellido===""  && Cedula==="Cedula"  && Telefono===""  && Sector===""? representantes.map(repre=><tr><td>{repre.Cedula}</td></tr>) : null
}

{
 filtro==="Representante"&&   Nombre==="" && Apellido==="Apellido"  && Cedula===""  && Telefono===""  && Sector===""? representantes.map(repre=><tr><td>{repre.Apellido}</td></tr>) : null
}


{
 filtro==="Representante"&&   Nombre==="" && Apellido===""  && Cedula===""  && Telefono==="Telefono"  && Sector===""? representantes.map(repre=><tr><td>{repre.Telefono}</td></tr>) : null
}

{
 filtro==="Representante"&&   Nombre==="" && Apellido===""  && Cedula===""  && Telefono===""  && Sector==="Sector"? representantes.map(repre=><tr><td>{repre.Sector}</td></tr>) : null
}


{
 filtro==="Representante"&&   Nombre==="" && Apellido==="Apellido"  && Cedula==="Cedula"  && Telefono==="Telefono"  && Sector===""? representantes.map(repre=><tr><td>{repre.Apellido}</td><td>{repre.Cedula}</td><td>{repre.Telefono}</td></tr>) : null
}


{
 filtro==="Representante"&&   Nombre==="" && Apellido==="Apellido"  && Cedula==="Cedula"  && Telefono==="Telefono"  && Sector==="Sector"? representantes.map(repre=><tr><td>{repre.Apellido}</td><td>{repre.Cedula}</td><td>{repre.Telefono}</td><td>{repre.Sector}</td></tr>) : null
}


{
 filtro==="Representante"&&   Nombre==="" && Apellido===""  && Cedula==="Cedula"  && Telefono==="Telefono"  && Sector==="Sector"? representantes.map(repre=><tr><td>{repre.Cedula}</td><td>{repre.Telefono}</td><td>{repre.Sector}</td></tr>) : null
}






{/*      ////////////////
           Matricula

        //////////////  */}




{
 filtro==="Matricula"&&   Nombre==="Nombre" && Apellido===""  && Cedula===""  && Edad===""  && Programa===""  && Instrumento===""? alumnos.map(alum=><tr><td>{alum.Nombre}</td></tr>) : null
}

{
 filtro==="Matricula"&&   Nombre==="" && Apellido==="Apellido"  && Cedula===""  && Edad===""  && Programa===""  && Instrumento===""? alumnos.map(alum=><tr><td>{alum.Apellido}</td></tr>) : null
}


{
 filtro==="Matricula"&&   Nombre==="" && Apellido===""  && Cedula==="Cedula"  && Edad===""  && Programa===""  && Instrumento===""? alumnos.map(alum=><tr><td>{alum.Cedula}</td></tr>) : null
}

{
 filtro==="Matricula"&&   Nombre==="" && Apellido===""  && Cedula===""  && Edad==="Edad"  && Programa===""  && Instrumento===""? alumnos.map(alum=><tr><td>{alum.Edad}</td></tr>) : null
}

{
 filtro==="Matricula"&&   Nombre==="" && Apellido===""  && Cedula===""  && Edad===""  && Programa==="Programa"  && Instrumento===""? alumnos.map(alum=><tr><td>{alum.programa.Nombre}</td></tr>) : null
}

{
 filtro==="Matricula"&&   Nombre==="" && Apellido===""  && Cedula===""  && Edad===""  && Programa===""  && Instrumento==="Instrumento"? alumnos.map(alum=><tr><td>{alum.id_instrumento===null?"No Posee":alum.Instrumento.Nombre}</td></tr>) : null
}




{
 filtro==="Matricula"&&   Nombre==="Nombre" && Apellido==="Apellido"  && Cedula===""  && Edad===""  && Programa===""  && Instrumento===""? alumnos.map(alum=><tr><td>{alum.Nombre}</td><td>{alum.Apellido}</td></tr>) : null
}


{
 filtro==="Matricula"&&   Nombre==="" && Apellido==="Apellido"  && Cedula==="Cedula"  && Edad===""  && Programa===""  && Instrumento===""? alumnos.map(alum=><tr><td>{alum.Apellido}</td><td>{alum.Cedula}</td></tr>) : null
}

{
 filtro==="Matricula"&&   Nombre==="" && Apellido==="Apellido"  && Cedula===""  && Edad==="Edad"  && Programa===""  && Instrumento===""? alumnos.map(alum=><tr><td>{alum.Apellido}</td><td>{alum.Edad}</td></tr>) : null
}

{
 filtro==="Matricula"&&   Nombre==="" && Apellido==="Apellido"  && Cedula===""  && Edad===""  && Programa==="Programa"  && Instrumento===""? alumnos.map(alum=><tr><td>{alum.Apellido}</td><td>{alum.programa.Nombre}</td></tr>) : null
}

{
 filtro==="Matricula"&&   Nombre==="" && Apellido==="Apellido"  && Cedula===""  && Edad===""  && Programa===""  && Instrumento==="Instrumento"? alumnos.map(alum=><tr><td>{alum.Apellido}</td><td>{alum.id_instrumento===null?"No Posee":alum.Instrumento.Nombre}</td></tr>) : null
}
{
 filtro==="Matricula"&&   Nombre==="Nombre" && Apellido==="Apellido"  && Cedula==="Cedula"  && Edad===""  && Programa===""  && Instrumento===""? alumnos.map(alum=><tr><td>{alum.Nombre}</td><td>{alum.Apellido}</td><td>{alum.Cedula}</td></tr>) : null
}

{
 filtro==="Matricula"&&   Nombre==="Nombre" && Apellido==="Apellido"  && Cedula==="Cedula"  && Edad==="Edad"  && Programa===""  && Instrumento===""? alumnos.map(alum=><tr><td>{alum.Nombre}</td><td>{alum.Apellido}</td><td>{alum.Cedula}</td><td>{alum.Edad}</td></tr>) : null
}

{
 filtro==="Matricula"&&   Nombre==="Nombre" && Apellido==="Apellido"  && Cedula==="Cedula"  && Edad==="Edad"  && Programa==="Programa"  && Instrumento===""? alumnos.map(alum=><tr><td>{alum.Nombre}</td><td>{alum.Apellido}</td><td>{alum.Cedula}</td><td>{alum.Edad}</td><td>{alum.programa.Nombre}</td></tr>) : null
}


{
 filtro==="Matricula"&&   Nombre==="Nombre" && Apellido==="Apellido"  && Cedula==="Cedula"  && Edad==="Edad"  && Programa==="Programa"  && Instrumento==="Instrumento"? alumnos.map(alum=><tr><td>{alum.Nombre}</td><td>{alum.Apellido}</td><td>{alum.Cedula}</td><td>{alum.Edad}</td><td>{alum.programa.Nombre}</td><td>{alum.id_instrumento===null?"No Posee":alum.Instrumento.Nombre}</td></tr>) : null
}



{
 filtro==="Matricula"&&   Nombre==="" && Apellido===""  && Cedula==="Cedula"  && Edad==="Edad"  && Programa===""  && Instrumento===""? alumnos.map(alum=><tr><td>{alum.Cedula}</td><td>{alum.Edad}</td></tr>) : null
}


{
 filtro==="Matricula"&&   Nombre==="" && Apellido===""  && Cedula==="Cedula"  && Edad===""  && Programa==="Programa"  && Instrumento===""? alumnos.map(alum=><tr><td>{alum.Cedula}</td><td>{alum.programa.Nombre}</td></tr>) : null
}

{
 filtro==="Matricula"&&   Nombre==="" && Apellido===""  && Cedula==="Cedula"  && Edad===""  && Programa===""  && Instrumento==="Instrumento"? alumnos.map(alum=><tr><td>{alum.Cedula}</td><td>{alum.id_instrumento===null?"No Posee":alum.Instrumento.Nombre}</td></tr>) : null
}


{
 filtro==="Matricula"&&   Nombre==="" && Apellido===""  && Cedula===""  && Edad==="Edad"  && Programa==="Programa"  && Instrumento===""? alumnos.map(alum=><tr><td>{alum.Edad}</td><td>{alum.programa.Nombre}</td></tr>) : null
}

{
 filtro==="Matricula"&&   Nombre==="" && Apellido===""  && Cedula===""  && Edad==="Edad"  && Programa===""  && Instrumento==="Instrumento"? alumnos.map(alum=><tr><td>{alum.Edad}</td><td>{alum.id_instrumento===null?"No Posee":alum.Instrumento.Nombre}</td></tr>) : null
}

{
 filtro==="Matricula"&&   Nombre==="" && Apellido===""  && Cedula===""  && Edad===""  && Programa==="Programa"  && Instrumento==="Instrumento"? alumnos.map(alum=><tr><td>{alum.programa.Nombre}</td><td>{alum.id_instrumento===null?"No Posee":alum.Instrumento.Nombre}</td></tr>) : null
}


{
 filtro==="Matricula"&&   Nombre==="Nombre" && Apellido===""  && Cedula==="Cedula"  && Edad===""  && Programa===""  && Instrumento===""? alumnos.map(alum=><tr><td>{alum.Nombre}</td><td>{alum.Cedula}</td></tr>) : null
}

{
 filtro==="Matricula"&&   Nombre==="Nombre" && Apellido===""  && Cedula===""  && Edad==="Edad"  && Programa===""  && Instrumento===""? alumnos.map(alum=><tr><td>{alum.Nombre}</td><td>{alum.Edad}</td></tr>) : null
}

{
 filtro==="Matricula"&&   Nombre==="Nombre" && Apellido===""  && Cedula===""  && Edad===""  && Programa==="Programa"  && Instrumento===""? alumnos.map(alum=><tr><td>{alum.Nombre}</td><td>{alum.programa.Nombre}</td></tr>) : null
}

{
 filtro==="Matricula"&&   Nombre==="Nombre" && Apellido===""  && Cedula===""  && Edad===""  && Programa===""  && Instrumento==="Instrumento"? alumnos.map(alum=><tr><td>{alum.Nombre}</td><td>{alum.id_instrumento===null?"No Posee":alum.Instrumento.Nombre}</td></tr>) : null
}


                </tbody>
            </table>

        </div>
    )
}

export default Tabla

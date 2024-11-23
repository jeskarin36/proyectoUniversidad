import React from 'react'

function Tabla({representantes,Mandaraeditar,confirmacion,VerDetalles}) {
  return (
    <>
{   representantes.length===0? <td COLSPAN="7"  className='Notfound'><h5>No se Encontraron Datos</h5></td>:      representantes.map((represen) => (
                  <tr key={represen.id} >
                     <td>{represen.id}</td>
                    <td>{represen.Nombre}</td>
                    <td>{represen.Apellido}</td>
                    <td>{represen.Cedula}</td>
                    <td>{represen.Telefono}</td>
                    <td>{represen.Sector}</td>
                 
                    <td className="primary">

                    <button onClick={(e)=>VerDetalles(represen.id)}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg></button>
                 
  
                  <button onClick={(e)=>Mandaraeditar(represen.id)}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" /></svg></button>
                   <button  onClick={()=>confirmacion(represen.id,represen.Id_Audiografia)}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg>   </button>
                 
                  </td>



         

                  </tr>
                ))
    }
    </>
  )
}

export default Tabla

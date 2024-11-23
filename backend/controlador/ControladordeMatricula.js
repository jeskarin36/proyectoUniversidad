import MatriculaModelo from "../modelo/MatriculaModelo.js"
import InstrumentoModelo from "../modelo/InstrumentoModelo.js"
import RepresentanteModelo from "../modelo/RepresentanteModelo.js"
import ProgramaModelo from "../modelo/ProgramaModelo.js"
import ModuloModelo from "../modelo/ModuloModelo.js"


export const getallMatricula = async (req, res) => {
    try{
      const alumnos = await MatriculaModelo.findAll(
        
        {
          include:[{model:RepresentanteModelo},
            {model:InstrumentoModelo } ,
            {model:ModuloModelo },
            {model:ProgramaModelo },
           
          ]
        }
      )
      res.json(alumnos)
    }catch(error) {
    res.json({message: error.message})
    } 
}

export const getalumno=async(req,res)=>{
  try {
    const alumno= await MatriculaModelo.findAll({
        where:{
            id:req.params.id
        },
      
       

    })
    res.json(alumno[0])
  } catch (error) {
    res.json({message: error.message})
  } }

  



  export const createAlumno = async(req,res)=>{
   try {
    await MatriculaModelo.create(req.body)
    res.json({
        "message":"Regristro creado correctamente"
    })
   } catch (error) {
    res.json({message: error.message})
   }
  }



  export const updateAlumno=async(req,res)=>{
    try {
       await MatriculaModelo.update(req.body,{
            where: {id : req.params.id}
        })
        res.json({"message":"Registro actualizado correactamtente"})
    } catch (error) {
      res.json({message: error.message})
    }
  }

  export const deleteAlumno = async(req,res)=>{
    try {
        await MatriculaModelo.destroy({
            where : {id:req.params.id}
        })
        res.json({"message":"Registro Eliminado correactamtente"})
    } catch (error) {
      res.json({message: error.message})
    }
}
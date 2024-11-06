import InstrumentosModelo from "../modelo/InstrumentoModelo.js"
import DepositoModelo from "../modelo/DepositoModelo.js"

export const getallInstrumentos= async (req, res) => {
    try{
      const Instrumentos = await InstrumentosModelo.findAll(
        {
          include:[{model:DepositoModelo} ]
         
        }
      )
      res.json(Instrumentos)
    }catch(error) {
    res.json({message: error.message})
    } 
}

export const getInstrumentos=async(req,res)=>{
  try {
    const alumno= await InstrumentosModelo.findAll({
        where:{
            id:req.params.id
        },
        include:[{model:DepositoModelo} ]
        

    })
    res.json(alumno[0])
  } catch (error) {
    res.json({message: error.message})
  } }

  

  



  export const createInstrumentos = async(req,res)=>{
   try {
    await InstrumentosModelo.create(req.body)
    res.json({
        "message":"Regristro creado correctamente"
    })
   } catch (error) {
    res.json({message: error.message})
   }
  }



  export const updateInstrumentos=async(req,res)=>{
    try {
       await InstrumentosModelo.update(req.body,{
            where: {id : req.params.id}
        })
        res.json({"message":"Registro actualizado correactamtente"})
    } catch (error) {
      res.json({message: error.message})
    }
  }

  export const deleteInstrumentos = async(req,res)=>{
    try {
        await InstrumentosModelo.destroy({
            where : {id:req.params.id}
        })
        res.json({"message":"Registro Eliminado correactamtente"})
    } catch (error) {
      res.json({message: error.message})
    }
}
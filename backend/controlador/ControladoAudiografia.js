import AudiografiaModelo from "../modelo/AudiografiaModelo.js"

export const getallAudiografia= async (req, res) => {
    try{
      const deposito = await AudiografiaModelo.findAll()
      res.json(deposito)
    }catch(error) {
    res.json({message: error.message})
    } 
}

export const getAudiografia=async(req,res)=>{
  try {
    const alumno= await AudiografiaModelo.findAll({
        where:{
            id:req.params.id
        }

    })
    res.json(alumno[0])
  } catch (error) {
    res.json({message: error.message})
  } }

  

  



  export const createAudiografia = async(req,res)=>{
   try {
    await AudiografiaModelo.create(req.body)
    res.json({
        "message":"Regristro creado correctamente"
    })
   } catch (error) {
    res.json({message: error.message})
   }
  }



  export const updateAudiografia=async(req,res)=>{
    try {
       await AudiografiaModelo.update(req.body,{
            where: {id : req.params.id}
        })
        res.json({"message":"Registro actualizado correactamtente"})
    } catch (error) {
      res.json({message: error.message})
    }
  }

  export const deleteAudiografia = async(req,res)=>{
    try {
        await AudiografiaModelo.destroy({
            where : {id:req.params.id}
        })
        res.json({"message":"Registro Eliminado correactamtente"})
    } catch (error) {
      res.json({message: error.message})
    }
}
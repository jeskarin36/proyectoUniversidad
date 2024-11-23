
import RepresentanteModelo from "../modelo/RepresentanteModelo.js"
import AudiografiaModelo from "../modelo/AudiografiaModelo.js"

export const getallRepresentante= async (req, res) => {
    try{
      const Representantes = await RepresentanteModelo.findAll(
        {
          include:[{model:AudiografiaModelo} ]
         
        }
      )
      res.json(Representantes)
    }catch(error) {
    res.json({message: error.message})
    } 
}

export const getRepresentante=async(req,res)=>{
  try {
    const Representante= await RepresentanteModelo.findAll({
        where:{
            id:req.params.id
        }

    })
    res.json(Representante[0])
  } catch (error) {
    res.json({message: error.message})
  } }

  



  export const createRepresentante = async(req,res)=>{
   try {
    await RepresentanteModelo.create(req.body)
    res.json({
        "message":"Regristro creado correctamente"
    })
   } catch (error) {
    res.json({message: error.message})
   }
  }



  export const updateRepresentante=async(req,res)=>{
    try {
       await RepresentanteModelo.update(req.body,{
            where: {id : req.params.id}
        })
        res.json({"message":"Registro actualizado correactamtente"})
    } catch (error) {
      res.json({message: error.message})
    }
  }

  export const deleteRepresentante= async(req,res)=>{
    try {
        await RepresentanteModelo.destroy({
            where : {id:req.params.id}
        })
        res.json({"message":"Registro Eliminado correactamtente"})
    } catch (error) {
      res.json({message: error.message})
    }
}
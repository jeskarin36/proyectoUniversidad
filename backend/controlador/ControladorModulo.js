import ModuloModelo from "../modelo/ModuloModelo.js"

export const getallModulo= async (req, res) => {
    try{
      const Instrumentos = await ModuloModelo.findAll()
      res.json(Instrumentos)
    }catch(error) {
    res.json({message: error.message})
    } 
}

export const getModulo=async(req,res)=>{
  try {
    const alumno= await ModuloModelo.findAll({
        where:{
            id:req.params.id
        }

    })
    res.json(alumno[0])
  } catch (error) {
    res.json({message: error.message})
  } }

  

  



  export const createModulo = async(req,res)=>{
   try {
    await ModuloModelo.create(req.body)
    res.json({
        "message":"Regristro creado correctamente"
    })
   } catch (error) {
    res.json({message: error.message})
   }
  }



  export const updateModulo=async(req,res)=>{
    try {
       await ModuloModelo.update(req.body,{
            where: {id : req.params.id}
        })
        res.json({"message":"Registro actualizado correactamtente"})
    } catch (error) {
      res.json({message: error.message})
    }
  }

  export const deleteModulo = async(req,res)=>{
    try {
        await ModuloModelo.destroy({
            where : {id:req.params.id}
        })
        res.json({"message":"Registro Eliminado correactamtente"})
    } catch (error) {
      res.json({message: error.message})
    }
}
import UsuarioModelo from "../modelo/UsuarioModelo.js"

export const getallUsuario= async (req, res) => {
    try{
      const Usuarios = await UsuarioModelo.findAll()
      res.json(Usuarios)
    }catch(error) {
    res.json({message: error.message})
    } 
}

export const getUsuario=async(req,res)=>{
  try {
    const Usuario= await UsuarioModelo.findAll({
        where:{
            id:req.params.id
        }

    })
    res.json(Usuario[0])
  } catch (error) {
    res.json({message: error.message})
  } }

  



  export const createUsuario = async(req,res)=>{
   try {
    await UsuarioModelo.create(req.body)
    res.json({
        "message":"Regristro creado correctamente"
    })
   } catch (error) {
    res.json({message: error.message})
   }
  }



  export const updateUsuario=async(req,res)=>{
    try {
       await UsuarioModelo.update(req.body,{
            where: {id : req.params.id}
        })
        res.json({"message":"Registro actualizado correactamtente"})
    } catch (error) {
      res.json({message: error.message})
    }
  }

  export const deleteUsuario= async(req,res)=>{
    try {
        await UsuarioModelo.destroy({
            where : {id:req.params.id}
        })
        res.json({"message":"Registro Eliminado correactamtente"})
    } catch (error) {
      res.json({message: error.message})
    }
}
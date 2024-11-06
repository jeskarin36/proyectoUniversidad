import ProgramaModelo from "../modelo/ProgramaModelo.js"

export const getallPrograma= async (req, res) => {
    try{
      const Programas = await ProgramaModelo.findAll()
      res.json(Programas)
    }catch(error) {
    res.json({message: error.message})
    } 
}

export const getPrograma=async(req,res)=>{
  try {
    const Programa= await ProgramaModelo.findAll({
        where:{
            id:req.params.id
        },
    

    })
    res.json(Programa[0])
  } catch (error) {
    res.json({message: error.message})
  } }

  

  



  export const createPrograma = async(req,res)=>{
   try {
    await ProgramaModelo.create(req.body)
    res.json({
        "message":"Regristro creado correctamente"
    })
   } catch (error) {
    res.json({message: error.message})
   }
  }



  export const updatePrograma=async(req,res)=>{
    try {
       await ProgramaModelo.update(req.body,{
            where: {id : req.params.id}
        })
        res.json({"message":"Registro actualizado correactamtente"})
    } catch (error) {
      res.json({message: error.message})
    }
  }

  export const deletePrograma = async(req,res)=>{
    try {
        await ProgramaModelo.destroy({
            where : {id:req.params.id}
        })
        res.json({"message":"Registro Eliminado correactamtente"})
    } catch (error) {
      res.json({message: error.message})
    }
}
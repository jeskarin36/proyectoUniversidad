import DepositoModelo from "../modelo/DepositoModelo.js"

export const getallDeposito= async (req, res) => {
    try{
      const deposito = await DepositoModelo.findAll()
      res.json(deposito)
    }catch(error) {
    res.json({message: error.message})
    } 
}

export const getDeposito=async(req,res)=>{
  try {
    const alumno= await DepositoModelo.findAll({
        where:{
            id:req.params.id
        }

    })
    res.json(alumno[0])
  } catch (error) {
    res.json({message: error.message})
  } }

  

  



  export const createDeposito = async(req,res)=>{
   try {
    await DepositoModelo.create(req.body)
    res.json({
        "message":"Regristro creado correctamente"
    })
   } catch (error) {
    res.json({message: error.message})
   }
  }



  export const updateDeposito=async(req,res)=>{
    try {
       await DepositoModelo.update(req.body,{
            where: {id : req.params.id}
        })
        res.json({"message":"Registro actualizado correactamtente"})
    } catch (error) {
      res.json({message: error.message})
    }
  }

  export const deleteDeposito = async(req,res)=>{
    try {
        await DepositoModelo.destroy({
            where : {id:req.params.id}
        })
        res.json({"message":"Registro Eliminado correactamtente"})
    } catch (error) {
      res.json({message: error.message})
    }
}
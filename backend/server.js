import express from "express"
import multer from "multer"
import cors from "cors"
import db from "./basedatos/db.js"
import fs from "fs"

import matricularoutes from "./routes/routesMatricula.js"
import Representanteroutes from "./routes/routesRepresentante.js"
import InstrumentoModelo from "./routes/routesInstrumento.js"
import ModuloModelo from "./routes/routesModulo.js"
import ProgramaModelo from "./routes/routesPrograma.js"
import DepositoModelo from "./routes/routesDeposito.js"
import UsuarioModelo from "./routes/routesUsuario.js"
import AudiografiaModelo from "./routes/routesAudiografia.js"



const storage= multer.diskStorage({
    destination:function(req,file,cb){
        return cb(null,"../src/public/Images")
    },
    filename: function(req,file,cb){
        return cb(null,`${file.originalname}`)
    }

})


const upload= multer({storage})


const app = express();
app.use(cors())
app.use(express.json())
app.use("/matricula",matricularoutes)
app.use("/Representante",Representanteroutes)
app.use("/Instrumento",InstrumentoModelo)
app.use("/Modulo",ModuloModelo)
app.use("/Programa",ProgramaModelo)
app.use("/Deposito",DepositoModelo)
app.use("/Usuario",UsuarioModelo)
app.use("/Audiografia",AudiografiaModelo)

app.delete("/EliminarFoto/:name",(req,res)=>{
 console.log(req.params.name)
 if (fs.existsSync(`../src/public/Images/${req.params.name}`)) fs.unlinkSync(`../src/public/Images/${req.params.name}`)
   
})


app.post("/upload",upload.single("file"),(req,res)=>{
    return res.json({ message: 'Upload success' });
})




app.use("/", express.static('../src/public/Images/'))

try {
    await db.authenticate()
    console.log("Conexion exitosa a la bd")
} catch (error) {
    console.log("error base de dato"+error)
}


app.get("/",(req,res)=>{
    res.send("Hello world")
})


app.listen(8000,()=>{
    console.log("sever running");
})
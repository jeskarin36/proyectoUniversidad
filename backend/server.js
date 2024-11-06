import express from "express"
import cors from "cors"
import db from "./basedatos/db.js"
import matricularoutes from "./routes/routesMatricula.js"
import Representanteroutes from "./routes/routesRepresentante.js"
import InstrumentoModelo from "./routes/routesInstrumento.js"
import ModuloModelo from "./routes/routesModulo.js"
import ProgramaModelo from "./routes/routesPrograma.js"
import DepositoModelo from "./routes/routesDeposito.js"
import UsuarioModelo from "./routes/routesUsuario.js"


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
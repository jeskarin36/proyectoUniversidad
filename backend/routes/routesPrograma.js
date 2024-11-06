import express from "express"
import { createPrograma,getallPrograma,getPrograma,deletePrograma,updatePrograma} from "../controlador/ControladorPrograma.js"

const router =express.Router()

router.get("/",getallPrograma)
router.get("/:id",getPrograma)
router.post("/",createPrograma)
router.put("/:id",updatePrograma)
router.delete("/:id",deletePrograma)

export default router
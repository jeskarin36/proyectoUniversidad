import express from "express"
import {getallModulo,getModulo,createModulo,updateModulo,deleteModulo} from "../controlador/ControladorModulo.js"

const router =express.Router()

router.get("/",getallModulo)
router.get("/:id",getModulo)
router.post("/",createModulo)
router.put("/:id",updateModulo)
router.delete("/:id",deleteModulo)

export default router
import express from "express"
import { createInstrumentos, deleteInstrumentos, getallInstrumentos, getInstrumentos, updateInstrumentos } from "../controlador/ControladorInstrumento.js"

const router =express.Router()

router.get("/",getallInstrumentos)
router.get("/:id",getInstrumentos)
router.post("/",createInstrumentos)
router.put("/:id",updateInstrumentos)
router.delete("/:id",deleteInstrumentos)

export default router
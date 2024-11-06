import express from "express"
import { createUsuario, deleteUsuario, getallUsuario, getUsuario, updateUsuario } from "../controlador/ContraladorUsuario.js"

const router =express.Router()

router.get("/",getallUsuario)
router.get("/:id",getUsuario)
router.post("/",createUsuario)
router.put("/:id",updateUsuario)
router.delete("/:id",deleteUsuario)

export default router
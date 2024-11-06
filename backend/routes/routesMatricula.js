import express from "express"
import { createAlumno, deleteAlumno, getallMatricula, getalumno, updateAlumno } from "../controlador/ControladordeMatricula.js"

const router =express.Router()

router.get("/",getallMatricula)
router.get("/:id",getalumno)
router.post("/",createAlumno)
router.put("/:id",updateAlumno)
router.delete("/:id",deleteAlumno)

export default router
import express from "express"
import { createRepresentante, deleteRepresentante, getallRepresentante, getRepresentante, updateRepresentante } from "../controlador/ControladorRepresentante.js"

const router =express.Router()

router.get("/",getallRepresentante)
router.get("/:id",getRepresentante)
router.post("/",createRepresentante)
router.put("/:id",updateRepresentante)
router.delete("/:id",deleteRepresentante)

export default router
import express from "express"
import { createDeposito, deleteDeposito, getallDeposito, getDeposito, updateDeposito } from "../controlador/ControladorDeposito.js"

const router =express.Router()

router.get("/",getallDeposito)
router.get("/:id",getDeposito)
router.post("/",createDeposito)
router.put("/:id",updateDeposito)
router.delete("/:id",deleteDeposito)

export default router
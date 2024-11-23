import express from "express"
import { createAudiografia, deleteAudiografia, getallAudiografia, getAudiografia, updateAudiografia } from "../controlador/ControladoAudiografia.js"

const router =express.Router()

router.get("/",getallAudiografia)
router.get("/:id",getAudiografia)
router.post("/",createAudiografia)
router.put("/:id",updateAudiografia)
router.delete("/:id",deleteAudiografia)

export default router
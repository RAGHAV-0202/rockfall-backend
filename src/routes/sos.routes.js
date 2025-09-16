import express from "express";
const router = express.Router();

import { createSOSRequest, getAllSOSRequests, getSOSRequestById, updateSOSRequestStatus } from "../controllers/sos.controllers.js";

router.post("/create", createSOSRequest);
router.get("/get-all", getAllSOSRequests);
router.get("/get/:id", getSOSRequestById);
// router.put("/:id/status", updateSOSRequestStatus);      


export default router;
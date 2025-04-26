import express from "express";
import sendData from "../controllers/users";
const router: express.Router = express.Router();

router.get("/", sendData);
export default router;

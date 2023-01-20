import { Router } from "express";
import {
  create,
  del,
  get,
  list,
  modify,
} from "../controllers/gameNoteController.js";

const router = Router();

router.post("/gamenotes", create);
router.get("/gamenotes", list);
router.get("/gamenotes/:id", get);
router.put("/gamenotes/:id", modify);
router.delete("/gamenotes/:id", del);

export default router;

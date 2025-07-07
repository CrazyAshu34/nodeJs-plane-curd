import express from "express";
import {
  createUser,
  updateUser,
  deleteUser,
  getAllUsers,
  patchUser,
} from "../controllers/userController.mjs";

const router = express.Router();

router.post("/ok", createUser);

router.put("/ok/:id", updateUser);
router.delete("/ok/:id", deleteUser);
router.patch("/ok/:id", patchUser);

router.get("/ok", getAllUsers);

export default router;

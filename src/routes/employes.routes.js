import { Router } from "express";
import { pool } from "../connection.js";
import {
  getEmployes,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getOneEmployee,
} from "../controllers/employes.controller.js";

const router = Router();

router
  .get("/", getEmployes)
  .get("/:id", getOneEmployee)
  .post("/", createEmployee)
  .patch("/:id", updateEmployee)
  .delete("/:id", deleteEmployee);

export default router;

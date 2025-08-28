import express, { json } from "express";
import employeesRoutes from "./routes/employes.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();

app.use(express.json());

app.use(employeesRoutes);

app.use("/ping", indexRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    message: "endpoint Not found",
  });
});

export default app;

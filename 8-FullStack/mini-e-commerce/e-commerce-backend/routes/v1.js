import { Router } from "express";
import authRouter from "./auth.js";
import serverRouter from "./server.js";
const v1Router = Router();

v1Router.use("/", serverRouter);
v1Router.use("/auth", authRouter);

export default v1Router;

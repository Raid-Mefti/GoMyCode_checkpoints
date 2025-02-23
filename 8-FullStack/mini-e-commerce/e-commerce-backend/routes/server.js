import { Router } from "express";
import jwt from "jswonwebtoken";
const serverRouter = Router();

serverRouter.get(
    "/",
    (req, res, next) => {
        try {
            const data = jwt.verify(token, process.env.AUTH_SECRET);
            next();
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    (req, res) => {
        const bearerToken = req.headers["authorization"];
        const token = bearerToken.split(" ")[1];
        try {
            const data = jwt.verify(token, process.env.AUTH_SECRET);
            res.send({ message: "hello world" });
        } catch (e) {
            res.json({ error: e.message });
        }
    }
);
export default serverRouter;

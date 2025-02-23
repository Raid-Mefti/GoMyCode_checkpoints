import "dotenv/config";
import express from "express";
import logger from "./configs/logger.js";
import dbConnection from "./configs/db.js";
import authRouter from "./routes/auth.js";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/v1/auth", authRouter);

dbConnection.then(() => {
    app.listen(PORT, () => {
        console.log(`Server started on ${PORT}`);
        console.log(`http://localhost:${PORT}`);
        logger.info();
    });
});

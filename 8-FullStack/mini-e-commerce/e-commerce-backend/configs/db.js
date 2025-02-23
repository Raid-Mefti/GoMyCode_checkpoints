import mongoose from "mongoose";
import logger from "./logger.js";

const dbConnection = mongoose
    .connect(process.env.MONGODB_URI, {
        auth: {
            username: process.env.MONGODB_USER,
            password: process.env.MONGODB_PW,
        },
        dbName: process.env.MONGODB_DB,
    })
    .then(() => {
        console.log(`DB connected in ${process.env.MONGODB_DB}`);
        logger.debug(`DB connected in ${process.env.MONGODB_DB}`);
    })
    .catch((error) => {
        logger.error(error);
        process.exit(-1);
    });

export default dbConnection;

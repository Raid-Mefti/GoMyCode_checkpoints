import userModel from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function loginUser(req, res) {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email: email });
        if (!user) throw new Error(`User ${email} not found`);
        if (!bcrypt.compare(user.password, password))
            throw new Error(`ìnvalid credentials`);
        // generate token for login
        const token = jwt.sign(
            { _id: user._id.toString() },
            process.env.AUTH_SECRET
        );
        res.json({ user: user, token: token });
    } catch (e) {
        res.status(404).json({ error: e.message });
    }
}

export async function registerUser(req, res) {
    const { email, password, firstName, lastName } = req.body;
    try {
        const user = await userModel.create({
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
        });
    } catch (e) {
        resizeTo.status(400).json({ error: e.message });
    }
    const token = jwt.sign(
        { _id: user._id.toString() },
        process.env.AUTH_SECRET
    );
    res.json({ user: user.toSimpleUser, token: token });
}

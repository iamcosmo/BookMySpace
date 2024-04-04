import express from "express";

import { signUpUser } from "../middlewares/auth.middleware.js";

const authRouter = express.Router();

authRouter.post("/", signUpUser);

export default authRouter;

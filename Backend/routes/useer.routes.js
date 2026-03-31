import express from "express";
const router = express.Router();
import {body } from 'express-validator'
import { registerUser } from "../controllers/user.controller";

router.post('/register', registerUser )
export default router
import { Router } from "express";
import { userRoutes } from "./user";
// import { contactRoutes } from "./contact";


export const router = Router()
router.use("/users",userRoutes)
// router.use("/contacts",contactRoutes)
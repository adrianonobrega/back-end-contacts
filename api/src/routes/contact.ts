import { Router } from "express";
import { contactCreateController } from "../controller/contact.controller";
import { contactListController } from "../controller/contact.controller";
import { contactListOneController } from "../controller/contact.controller";
import { contactUpdateController } from "../controller/contact.controller";
import { contactDeleteController } from "../controller/contact.controller";
import {authUser} from "../middleware/authUser.middleware";

export const contactRoutes = Router()

contactRoutes.post("/:user_id",authUser,contactCreateController)
contactRoutes.get("/",authUser,contactListController)
contactRoutes.patch("/:id",authUser,contactUpdateController)
contactRoutes.delete("/:id",authUser,contactDeleteController)
contactRoutes.get("/:user_id",authUser,contactListOneController)
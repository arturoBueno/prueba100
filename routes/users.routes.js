import { Router } from "express";
import checkIdNumber from "../middlewares/users/checkIdNumber.middleware";
import userExists from "../middlewares/users/userExists.middleware";
import User from "../models/user";
import { CreateUser, deleteUser, GetAllUsers, GetUneUserById, updateUser } from "../controllers/user.controllers";

const usersRouter = Router();

usersRouter.get("/",GetAllUsers);

usersRouter.get("/:id", [checkIdNumber, userExists], GetUneUserById);

// GET => app.com/users
// POST {name:"Luis"} => app.com/users

usersRouter.post("/", CreateUser );

// PATCH { name: "Juan" } => app.com/user/3
usersRouter.patch("/:id", [checkIdNumber, userExists], updateUser);

usersRouter.delete("/:id", [checkIdNumber, userExists], deleteUser);

export default usersRouter;

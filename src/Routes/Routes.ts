import { Router } from "express";
import { Login, createUser, getUser } from "../Controllers";

const Routes: Router = Router();
Routes.use(function (req: any, res: any, next: any) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,Authorization"
  );
  next();
});
Routes.post("/login", Login);
Routes.get("/getUser/:userId", getUser);
Routes.post("/createUser", createUser);

export { Routes };

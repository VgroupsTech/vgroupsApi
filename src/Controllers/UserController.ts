import { FindOne, InsertOne, ObjectId, User, checkExistance } from "../Common";
import { Users } from "../Schema";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const body = req.body;
    const user: User = new Users(body);
    const userExist = await checkExistance(Users, { username: body.username });
    if (userExist && userExist._id) {
      res.json({
        status: 400,
        usernameTaken: true,
        message: "Username is already taken",
      });
    } else {
      const newUser: User = await InsertOne(user);
      if (newUser && newUser?._id) {
        res.json({
          status: 200,
          message: "User Added Successfully",
          data: newUser,
        });
      } else {
        let errors = newUser?.errors || "";
        if (errors) {
          res.json({
            status: 400,
            message: "Error while saving User",
            errors: newUser,
          });
          var length = Object.keys(errors).length;
          if (length) {
            let errorObj: any = Object.values(errors);
            errorObj.forEach((error: any) => {
              let message: any = error?.message.split(":");
              // console.log({
              //   errorLabel: message[0],
              //   errorValue: message?.[1] || "",
              // });
            });
          }
        }
      }
    }
  } catch (error) {
    res.json({
      message: "Error while adding user",
      data: error,
    });
  }
};

export const Login = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req?.body || {};
    const { sign } = jwt;
    if (body?.username && body?.password) {
      const userData = await FindOne(Users, {
        username: body.username,
        password: body.password,
      });
      if (userData && userData._id) {
        let payload = {
          username: body.username,
          userId: userData._id,
        };
        if (userData?.personalDetails?.userRole?.value) {
          Object.assign(payload, {
            userRole: userData?.personalDetails?.userRole?.value,
          });
        }
        const token = sign(payload, process.env.JWT_SECRET || "secret", {
          expiresIn: 86400,
        });
        res.json({
          message: "User Logged in successfully",
          code: "success",
          authToken: token,
          data: userData,
        });
      } else {
        res.json({
          message: "Username or password is incorrect",
          code: "incorrectDetails",
          status: 400,
        });
      }
    }
  } catch (error) {
    res.json({
      data: error,
      message: "Error while logging in",
    });
  }
};

export const getUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const params = req?.params || {};
    if (params && params.userId) {
      const userData = await FindOne(Users, {
        _id: new ObjectId(params.userId),
      });
      res.json({
        message: "User data retrived successfully",
        data: userData,
      });
    }
  } catch (error) {
    res.json({
      data: error,
      message: "Error while getting user data",
    });
  }
};

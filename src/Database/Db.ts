import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
// const DatabaseUrl: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@vgroups.cn6t9ny.mongodb.net/test`;
const DatabaseUrl: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@vgroups.cn6t9ny.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`;
export const connectedDB = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(DatabaseUrl)
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => {
      throw err;
    });
};

import express from "express";
import dotenv from "dotenv";
import { connectedDB } from "./Database/Db";
import { Routes } from "./Routes";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 3001;
app.use(Routes);
const corsOptions = {
  origin: "http://localhost:8080",
  credentials: true,
  optionSuccessStatus: 200,
  Authorization: "",
};
app.use(cors(corsOptions));
//some other code
connectedDB();
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

// import express from "express";
// import dotenv from "dotenv";
// import { connectedDB } from "./Database/Db";
// import { Routes } from "./Routes";
// import cors from "cors";
// // import bodyParser from "body-parser";

// dotenv.config();
// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// const port = process.env.PORT || 3001;
// app.use(Routes);
// const corsOptions = {
//   origin: "http://localhost:3000",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };
// app.use(cors(corsOptions));
// //some other code
// connectedDB();
// app.listen(port, () => {
//   return console.log(`Express is listening at http://localhost:${port}`);
// });

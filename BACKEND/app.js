import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dataConnection.js"
import { errorMiddleware } from "./Middleware/error.js";
import reservationRouter from "./routes/reservatiorRoute.js";
const app = express();
dotenv.config({path:"./config/config.env"})

//We are only sending method to send the backend so, POST
//Frontend_URL
app.use(
    cors({
      origin: [process.env.FRONTEND_URL],
      methods: ["POST"],
      credentials: true,
    })
  );
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(reservationRouter);
  //app.use(authRoutes); in ReactNative-Server without a route path
dbConnection();

app.use(errorMiddleware);
export default app;

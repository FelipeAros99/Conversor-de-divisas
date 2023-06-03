import express  from "express";
import morgan from "morgan";

const app=express();

//Settings
app.set("port",process.env.REACT_APP_SERVER_PORT)

//middlewares
app.use(morgan("dev"))



export default app;
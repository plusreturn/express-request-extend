import express from "express";
import { usersRouter } from "./routes/usersRouter";

const app = express();

app.use("/api/v1", usersRouter);

app.listen(4321, () => {
  console.log("🚀 server started at port 4321");
});

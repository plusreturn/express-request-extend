import express from "express";

export const usersRouter = express.Router();

usersRouter.get("/users", (request, response) => {
  response.status(200).json({});
});

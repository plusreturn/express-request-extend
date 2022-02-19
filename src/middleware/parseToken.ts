import { Request, Response, NextFunction } from "express";

export const parseToken =
  () => (request: Request, response: Response, next: NextFunction) => {
    // hypothetical token decode
    const tokenData = {
      userId: "7489234",
      iat: "857349534",
    };

    next();
  };

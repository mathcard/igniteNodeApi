import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UserRepository";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    throw new AppError("Token missing", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(
      token,
      "1b40b3229c5d9da5d0c73f28cb0eced9"
    ) as IPayload;
    console.log(user_id);

    const userRepository = new UsersRepository();

    const user = userRepository.findById(user_id);

    if (!user) {
      throw new AppError("User does not exists!", 401);
    }

    next();
  } catch {
    throw new AppError("Invalid token", 401);
  }
}

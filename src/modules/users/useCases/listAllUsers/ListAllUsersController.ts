import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;
    let all;
    try {
      all = this.listAllUsersUseCase.execute(user_id.toString());
    } catch (error) {
      return response.status(400).json({ error });
    }

    if (all) {
      return response.status(201).send(all);
    }

    return response.status(404).json({ error: "User not found" });
  }
}

export { ListAllUsersController };

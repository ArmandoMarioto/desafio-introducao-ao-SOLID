import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    let user;
    try {
      user = this.turnUserAdminUseCase.execute(user_id);
    } catch (error) {
      return response.status(404).json({ error });
    }

    if (user) {
      return response.status(201).send(user);
    }

    return response.status(404).json({ error: "User not found" });
  }
}

export { TurnUserAdminController };

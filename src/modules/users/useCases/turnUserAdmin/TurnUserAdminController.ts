import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user } = request;
    this.turnUserAdminUseCase.execute(user);

    return response.status(200).json(user);
  }
}

export { TurnUserAdminController };

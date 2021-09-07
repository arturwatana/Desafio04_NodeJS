import { request } from "express";

import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    if(!user_id) {
      return 
    }
    const { user_id } = user_id;
    const user = this.usersRepository.findById(user_id);
    console.log(user);
  }
}

export { TurnUserAdminUseCase };
3;

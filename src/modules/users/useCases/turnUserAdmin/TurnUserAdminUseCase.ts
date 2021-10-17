import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute(user_id: string): User {
    let user = this.usersRepository.findById(user_id);
    if (user) {
      user = this.usersRepository.turnAdmin(user);
      return user;
    }
    throw new Error("Mensagem do erro");
  }
}

export { TurnUserAdminUseCase };

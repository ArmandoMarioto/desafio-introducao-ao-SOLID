import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute(user_id: string): User[] {
    const user = this.usersRepository.findById(user_id);
    if (user) {
      if (user.admin) {
        return this.usersRepository.list();
      }
    }
    throw new Error("Mensagem do erro");
  }
}

export { ListAllUsersUseCase };

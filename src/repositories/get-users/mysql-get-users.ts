import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../model/user";

export class MySqlGetUsersRepository implements IGetUsersRepository {
    async getUsers(): Promise<User[]> {
        return [{
            fistName: 'Wendell Bruno',
            email: "teste@teste.com",
            lastName: "Santos",
            password: "123456"
        }]
    }

}
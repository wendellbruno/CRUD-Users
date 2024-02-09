import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../model/user";
import { databaseConnection } from "../../database";

export class MySqlGetUsersRepository implements IGetUsersRepository {
    async getUsers(): Promise<User[]> {
        const users = await databaseConnection<User>('usuario').select('*');
        return users
    }

}
import { IUpdateUserRepository, UpdateUserParams } from "../../controllers/update-user/protocols";
import { databaseConnection } from "../../database";
import { User } from "../../model/user";

export class MySqlUpdateUserRepository implements IUpdateUserRepository{
    async updateUser(id: number, params: UpdateUserParams): Promise<User> {
        await databaseConnection('usuario').update(params).where({id: id})
        const usuario = await databaseConnection('usuario').select('*').where({id: id})
        return usuario[0];
    }
   

}
import { CreateUserParams, ICreateUserRepository } from "../../controllers/create-user/protocols";
import { databaseConnection } from "../../database";
import { User } from "../../model/user";

export class MysqlCreateusers implements ICreateUserRepository {
    async createUser(params: CreateUserParams): Promise<User> {
        const usuario = await databaseConnection('usuario').insert(params)
        if(usuario) {
           const user =  await databaseConnection<User>('usuario').select('*');
           return user[0];
        }
       throw new Error('Erro ao inserir o usuario');
    }
    

}
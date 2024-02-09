import { CreateUserParams, ICreateUserRepository } from "../../controllers/create-user/protocols";
import { databaseConnection } from "../../database";
import { User } from "../../model/user";

export class MysqlCreateusersRepository implements ICreateUserRepository {
  
    async createUser(params: CreateUserParams): Promise<User> {
        try{
            const usuario = await databaseConnection('usuario').insert(params)
            console.log('aqui')
            if(usuario) {
                const user =  await databaseConnection<User>('usuario').select('*');
                return user[0];
            }
        }catch(erro){
            console.log(erro);
        }
        throw new Error('Erro ao inserir o usuario');
    }
    

}
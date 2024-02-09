import { User } from "../../model/user";
import { HttpRequest, HttpResponse } from "../protocols";
import { CreateUserParams, ICreateUserController, ICreateUserRepository } from "./protocols";
import validor from 'validator';

export class CreateUserController implements ICreateUserController {
    constructor(private readonly createUserRepository: ICreateUserRepository) {}
   async handle(httpRequest: HttpRequest<CreateUserParams>): Promise<HttpResponse<User>> {
    const requiredFields = ['firstName', 'lastName', 'email', 'password']
    try{
        const {body} = httpRequest;
        for(const field of requiredFields){
            if(!body?.[field as keyof CreateUserParams]?.length){
                return {statusCode: 400, body: `Field ${field} is required`}
            }
        }
        const emailIsValid = validor.isEmail(body?.email!)
        if(!emailIsValid) return {statusCode: 400, body: `Email is invalid`}
        const user = await this.createUserRepository.createUser(body!);
        return {statusCode: 201, body: user}
    }catch(erro){
        return {statusCode: 500, body: 'Erro no Servidor'}
    }
    }

}
import { User } from "../../model/user";
import { HttpRequest, HttpResponse } from "../protocols";

export type CreateUserParams = Omit<User, 'id'>;

export interface ICreateUserRepository {
    createUser(params: CreateUserParams): Promise<User>;
}

export interface ICreateUserController {
    handle(httpRequest: HttpRequest<CreateUserParams>): Promise<HttpResponse<User>>
}
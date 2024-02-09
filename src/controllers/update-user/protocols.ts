import { User } from "../../model/user";
import { HttpRequest, HttpResponse } from "../protocols";

export interface UpdateUserParams {
    firstName?: string;
    lastName?: string;
    password?: string;
}

export interface IUpdateUserRepository {
    updateUser(id: number, params: UpdateUserParams): Promise<User>
}

export interface IUpdateUserController {
    handle(HttpRequest: HttpRequest<any>): Promise<HttpResponse<User>>;
}
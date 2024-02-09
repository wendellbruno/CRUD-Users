import { User } from "../../model/user";

export type CreateUserParams = Omit<User, 'id'>;

export interface ICreateUserRepository {
    createUser(params: CreateUserParams): Promise<User>;
}
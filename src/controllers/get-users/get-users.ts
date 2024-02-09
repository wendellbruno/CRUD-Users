import { IGetUsersController, IGetUsersRepository } from "./protocols";
import { Request, Response } from "express";

export class GetUsersController implements IGetUsersController {
  constructor(private readonly getUsersRepository: IGetUsersRepository) {}

  async handle() {
    try {
      const users = await this.getUsersRepository.getUsers();

      return {
        statusCode: 200,
        body: users,
      };
    } catch (erro) {
      console.log(erro)
      return {
        statusCode: 500,
        body: "erro",
      };
    }
  }
}

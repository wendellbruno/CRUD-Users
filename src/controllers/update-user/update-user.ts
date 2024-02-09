import { User } from "../../model/user";
import { CreateUserParams } from "../create-user/protocols";
import { HttpRequest, HttpResponse } from "../protocols";
import { IUpdateUserController, IUpdateUserRepository, UpdateUserParams } from "./protocols";

export class UpdateUserControllers implements IUpdateUserController {
    constructor(private readonly updateUserRepository: IUpdateUserRepository){}
  async handle(HttpRequest: HttpRequest<any>): Promise<HttpResponse<User>> {
    const id = HttpRequest?.params?.id;
    const body = HttpRequest?.body;

    try {
      if (!id) return { statusCode: 400, body: "erro no ID" };

      const allowedFieldsToUpdate: (keyof CreateUserParams)[] = [
        "fistName",
        "lastName",
        "password",
      ];
      const someFieldsNotAllowedToUpdate = Object.keys(body).some(
        (key) => !allowedFieldsToUpdate.includes(key as any)
      );
      if(someFieldsNotAllowedToUpdate) return { statusCode: 400, body: "campo não permitido" };

      const user = await this.updateUserRepository.updateUser(id, body);
      return { statusCode: 200, body: user};
    } catch (erro) {
      return { statusCode: 500, body: "Erro no Servidor" };
    }
  }
}

import { Request, Response } from "express";
import { CreateUserService } from '../../services/user/CreateUserService'
class CreateUserController {

    async handle(request: Request, response: Response) {
        const createUserService = new CreateUserService();
        const { userName, email, fullName, password } = request.body;

        const user = createUserService.execute({ userName, email, fullName, password })

        return response.status(201).json(user);
    }

}

export { CreateUserController };
import { Request, Response } from "express";
import { AuthenticationService } from "../../../services/auth/AuthenticationService";

class AuthenticationController {
    async handle(request: Request, response: Response) {
        const { userName, password } = request.body;
        const authenticationService = new AuthenticationService();

        const token = await authenticationService.execute({ userName, password })

        response.setHeader("x-access-token", token)
        return response.json({
            message: "ok"
        })
    }
}

export { AuthenticationController }
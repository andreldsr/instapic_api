import { Request, Response } from "express";
import { PhotoDeleteService } from "../../services/photo/PhotoDeleteService";


class PhotoDeleteController {
    async handle(request: Request, response: Response) {
        const photoId = request.params.photoId;
        const userId = request.userId;
        const photoDeleteService = new PhotoDeleteService();

        await photoDeleteService.execute({ photoId, userId })

        return response.json({ message: "Photo deleted!" })
    }
}

export { PhotoDeleteController }
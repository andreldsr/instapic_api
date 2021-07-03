import { Request, Response } from "express";
import { PhotoUploadService } from "../../services/photo/PhotoUploadService";


class PhotoUploadController {
    async handle(request: Request, response: Response) {
        const imageFile = request.file
        const { description, allowComments } = request.body;
        const userId = request.userId;
        const photoUploadService = new PhotoUploadService()

        const photo = await photoUploadService.execute({ description, allowComments, imageFile, userId })
        return response.json(photo)

    }
}

export { PhotoUploadController }
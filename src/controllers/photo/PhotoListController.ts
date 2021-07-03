import { Request, Response } from "express";
import { PhotoListService } from "../../services/photo/PhotoListService";

class PhotoListController {
    async handle(request: Request, response: Response) {
        const userName = request.params.userName
        const photoListService = new PhotoListService()

        const photos = await photoListService.execute(userName)

        return response.json(photos)
    }
}

export { PhotoListController }
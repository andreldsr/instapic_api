import { Request, Response } from "express";
import { PhotoDetailService } from "../../services/photo/PhotoDetailService";


class PhotoDetailController {
    async handle(request: Request, response: Response) {
        const photoDetailService = new PhotoDetailService()
        const id = request.params.photoId;

        const photo = await photoDetailService.execute(id);

        return response.json(photo);
    }
}

export { PhotoDetailController }
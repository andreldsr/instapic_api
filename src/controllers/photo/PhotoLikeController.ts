import { Request, Response } from "express";
import { PhotoLikeService } from "../../services/photo/PhotoLikeService";


class PhotoLikeController {
    async handle(request: Request, response: Response) {
        const photoId = request.params.photoId;
        const userId = request.userId;
        const photoLikeService = new PhotoLikeService()

        const like = await photoLikeService.execute({ photoId, userId })

        return response.json(like)

    }
}

export { PhotoLikeController }
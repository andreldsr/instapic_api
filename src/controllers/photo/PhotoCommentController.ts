import { Request, Response } from "express";
import { PhotoCommentService } from "../../services/photo/PhotoCommentService";

class PhotoCommentController {
    async handle(request: Request, response: Response) {
        const photoCommentService = new PhotoCommentService()
        const photoId = request.params.photoId
        const comments = await photoCommentService.execute(photoId)
        return response.json(comments)
    }
}

export { PhotoCommentController }
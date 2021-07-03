import { Request, Response } from "express";
import { PhotoCreateCommentService } from "../../services/photo/PhotoCreateCommentService";


class PhotoCreateCommentController {
    async handle(request: Request, response: Response) {
        const userId = request.userId;
        const { commentText } = request.body;
        const photoId = request.params.photoId;
        const photoCreateCommentService = new PhotoCreateCommentService()

        const comment = await photoCreateCommentService.execute({ photoId, text: commentText, userId })
        return response.status(201).json(comment)
    }
}

export { PhotoCreateCommentController }
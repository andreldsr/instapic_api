import { getCustomRepository } from 'typeorm';
import { CommentRepository } from '../../repositories/CommentRepository';


class PhotoCommentService {
    async execute(photoId: string) {
        const commentRepository = getCustomRepository(CommentRepository)
        const comments = await commentRepository.find({
            photoId
        })
        return comments
    }
}

export { PhotoCommentService }
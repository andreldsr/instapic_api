import { getCustomRepository } from 'typeorm';
import { CommentRepository } from '../../repositories/CommentRepository';

interface CommentDTO {
    date: Date;
    text: string;
    userName: string;
}
class PhotoCommentService {
    async execute(photoId: string) {
        const commentRepository = getCustomRepository(CommentRepository)
        const comments = await commentRepository.find({
            where: {
                photoId
            },
            join: {
                alias: "comment",
                leftJoinAndSelect: {
                    user: "comment.user"
                }
            }
        })
        const commentsDTO: CommentDTO[] = comments.map<CommentDTO>((comment): CommentDTO => {
            return { date: comment.date, text: comment.text, userName: comment.user.userName }
        })
        return commentsDTO
    }
}

export { PhotoCommentService }
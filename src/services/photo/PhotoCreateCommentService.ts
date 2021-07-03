import { getCustomRepository } from 'typeorm';
import { CommentRepository } from '../../repositories/CommentRepository';
import { PhotoRepository } from "../../repositories/PhotoRepository";

interface PhotoCommentDTO {
    photoId: string;
    userId: string;
    text: string;
}

class PhotoCreateCommentService {
    async execute({ photoId, text, userId }: PhotoCommentDTO) {
        const photoRepository = getCustomRepository(PhotoRepository)
        const commentRepository = getCustomRepository(CommentRepository)

        const photo = await photoRepository.findOne({ id: photoId })
        if (!photo) {
            throw new Error("Photo doesnt exist!")
        }

        const comment = commentRepository.create({
            photoId,
            userId,
            text
        })

        await commentRepository.save(comment)
        photo.comments++;
        await photoRepository.save(photo)
        return comment
    }
}

export { PhotoCreateCommentService }
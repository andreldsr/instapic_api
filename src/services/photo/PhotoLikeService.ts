import { getCustomRepository } from 'typeorm';
import { LikeRepository } from '../../repositories/LikeRepository';
import { PhotoRepository } from '../../repositories/PhotoRepository';
import { UserRepository } from '../../repositories/UserRepository';

interface PhotoLikeDTO {
    photoId: string;
    userId: string;
}

class PhotoLikeService {
    async execute({ photoId, userId }: PhotoLikeDTO) {
        const photoRepository = getCustomRepository(PhotoRepository)
        const likeRepository = getCustomRepository(LikeRepository)
        const userRepository = getCustomRepository(UserRepository)

        const photo = await photoRepository.findOne({ id: photoId })
        if (!photo) {
            throw new Error("Photo doesnt exist!")
        }
        const user = await userRepository.findOne({ id: userId })
        if (!user) {
            throw new Error("User doesnt exist!")
        }
        const likeAlreadyExists = await likeRepository.findOne({ userId, photoId })
        if (likeAlreadyExists) {
            return likeAlreadyExists;
        }
        const like = likeRepository.create({
            photoId,
            userId
        })
        await likeRepository.save(like);
        photo.likes++;
        await photoRepository.save(photo);
        return like;
    }
}

export { PhotoLikeService }
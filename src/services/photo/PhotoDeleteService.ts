import { getCustomRepository } from 'typeorm';
import { PhotoRepository } from '../../repositories/PhotoRepository';

interface PhotoDeleteDTO {
    photoId: string;
    userId: string;
}

class PhotoDeleteService {
    async execute({ photoId, userId }: PhotoDeleteDTO) {
        const photoRepository = getCustomRepository(PhotoRepository);
        const photo = await photoRepository.findOne({ id: photoId })
        if (!photo) {
            throw new Error("Photo doesnt exist!")
        }
        if (photo.userId != userId) {
            throw new Error("User doesnt own the photo")
        }

        await photoRepository.delete({
            id: photoId
        })

    }
}

export { PhotoDeleteService }
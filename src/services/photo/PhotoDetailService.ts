import { getCustomRepository } from 'typeorm';
import { PhotoRepository } from '../../repositories/PhotoRepository';


class PhotoDetailService {
    async execute(id: string) {
        const photoRepository = await getCustomRepository(PhotoRepository)

        const photo = await photoRepository.findOne({
            id
        })

        if (!photo) {
            throw new Error("Photo doesnt exists!")
        }

        return photo;
    }
}

export { PhotoDetailService }
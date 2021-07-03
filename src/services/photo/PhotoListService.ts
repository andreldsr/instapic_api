import { getCustomRepository } from 'typeorm';
import { PhotoRepository } from '../../repositories/PhotoRepository';
import { UserRepository } from '../../repositories/UserRepository';
class PhotoListService {
    async execute(userName: string) {
        const userRepository = getCustomRepository(UserRepository)
        const photoRepository = getCustomRepository(PhotoRepository)

        const user = await userRepository.findOne({
            userName
        })

        if (!user) {
            throw new Error("User doesnt exists!")
        }

        const photos = await photoRepository.find({
            where: {
                userId: user.id
            },
            order: {
                postDate: 'DESC'
            }
        })

        return photos
    }
}

export { PhotoListService }
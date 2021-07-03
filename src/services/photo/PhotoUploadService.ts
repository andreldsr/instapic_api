import { getCustomRepository } from 'typeorm';
import jimp, { MIME_JPEG } from 'jimp';
import { PhotoRepository } from '../../repositories/PhotoRepository';
import fs from 'fs';

interface PhotoUploadDTO {
    description: string;
    allowComments: boolean;
    imageFile: any;
    userId: string;
}

class PhotoUploadService {
    async execute({ description, allowComments, imageFile, userId }: PhotoUploadDTO) {
        const photoRepository = getCustomRepository(PhotoRepository);
        const url = await this._imageToBase64(imageFile);
        const photo = photoRepository.create({
            allowComments: allowComments ? true : false,
            description,
            url,
            userId,
            likes: 0,
            comments: 0
        })
        await photoRepository.save(photo);
        return photo;
    }

    async _imageToBase64(imageFile: any): Promise<string> {
        const image = await jimp.read(imageFile.path);
        await image
            .cover(460, 460)
            .write(imageFile.path);
        const url = await image.getBase64Async(MIME_JPEG);
        await fs.unlink(imageFile.path, () => { })
        return url;
    }
}

export { PhotoUploadService }
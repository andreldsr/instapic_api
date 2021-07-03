import multer from 'multer';
import fs from 'fs';
import { v4 as uuid } from 'uuid'
import path from 'path';

const uploadDir = './uploads';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
    fs.mkdirSync(uploadDir + '/imgs');
}

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'uploads/imgs')
    },
    filename: function (req, file, cb) {
        cb(null, `${uuid()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({
    storage,
    fileFilter(req, file, cb) {
        console.log("Receiving image file")
        cb(null, true)
    }
});

export { upload };
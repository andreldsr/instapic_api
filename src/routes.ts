import { Router } from "express";

import { upload } from './config/multer.conf'

import { PhotoCommentController } from "./controllers/photo/PhotoCommentController";
import { PhotoCreateCommentController } from "./controllers/photo/PhotoCreateCommentController";
import { PhotoDeleteController } from "./controllers/photo/PhotoDeleteController";
import { PhotoDetailController } from "./controllers/photo/PhotoDetailController";
import { PhotoLikeController } from "./controllers/photo/PhotoLikeController";
import { PhotoListController } from "./controllers/photo/PhotoListController";
import { PhotoUploadController } from "./controllers/photo/PhotoUploadController";
import { AuthenticationController } from "./controllers/user/auth/AuthenticationController";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { ensureAuthenticated } from "./middlewares/EnsureAuthenticated";

const router = Router();

const createUserController = new CreateUserController();
const authenticationController = new AuthenticationController()

const photoListController = new PhotoListController()
const photoDetailController = new PhotoDetailController()
const photoCommentController = new PhotoCommentController()
const photoLikeController = new PhotoLikeController()
const photoCreateComment = new PhotoCreateCommentController()
const photoDeleteController = new PhotoDeleteController()
const photoUploadController = new PhotoUploadController()



router.get("/", (_, res) => res.send("HELLO WORLD!"))

router.post("/user/signup", createUserController.handle);
router.post("/user/login", authenticationController.handle);

router.use(ensureAuthenticated)

router.get("/:userName/photos", photoListController.handle);
router.get("/photos/:photoId/comments", photoCommentController.handle);
router.get("/photos/:photoId", photoDetailController.handle);
router.post("/photos/:photoId/like", photoLikeController.handle);
router.post("/photos/:photoId/comments", photoCreateComment.handle);
router.delete("/photos/:photoId", photoDeleteController.handle);

router.post("/photos/upload", upload.single('imageFile'), photoUploadController.handle)

export { router };
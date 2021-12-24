import Router from "express";
import PostController from "./PostController.js";
import * as multerStorage from "./multerStorageSetup.js";

const router = new Router();
const { upload } = multerStorage;

router.post('/posts', upload.single('picture'), PostController.create); // all endpoints
router.get('/posts', PostController.getAll);
router.get('/posts/:id', PostController.getOne);
router.put('/posts', upload.single('picture'), PostController.update);
router.delete('/posts/:id', PostController.delete);

export default router;

// в приложении может быть несколько роутеров

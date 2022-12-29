import express from 'express';
import {
  addUser,
  getUser,
  updateUser,
  deleteUser,
  getAllUser
} from '../controllers/userController.js';
import { handleValidations } from '../middlewares/handleValidation.js';
import validation from '../validation/index.js';
import accessControl from '../middlewares/accessControl.js';

const router = express.Router();

router.route('/').post(handleValidations(validation.userValidation), addUser);
router.route('/').get( getAllUser);
router.route('/:number').get(accessControl, getUser);
router.route('/:id').put(updateUser).delete(deleteUser);

const configure = (app) => {
  app.use('/api/user', router);
};

export default configure;
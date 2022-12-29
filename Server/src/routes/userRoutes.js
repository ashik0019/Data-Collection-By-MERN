import express from 'express';
import {
  addUser,
  getUser,
  updateUser,
  deleteUser,
} from '../controllers/userController';
import { handleValidations } from '../middlewares/handleValidation';
import validation from '../models/validation/index';
import accessControl from '../middlewares/accessControl';

const router = express.Router();

router.route('/').post(handleValidations(validation.userValidation), addUser);
router.route('/:number').get(accessControl, getUser);
router.route('/:id').put(updateUser).delete(deleteUser);

const configure = (app) => {
  app.use('/api/user', router);
};

export default configure;
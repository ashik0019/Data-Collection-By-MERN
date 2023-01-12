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
import validators from '../validation/index.js';

const router = express.Router();

router.route('/').post(handleValidations(validation.userValidation), addUser);
router.route('/').get( getAllUser);
router.route('/:number').get(accessControl, getUser);
router.route('/:id').put(updateUser).delete(deleteUser);


router.route('/register').post(handleValidations(validators.userRegisterValidator));
router.route('/login').post(handleValidations(validators.loginValidation));

const configure = (app) => {
  app.use('/api/user', router);
};

export default configure;
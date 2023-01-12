import express from 'express';
import { handleValidations } from '../middlewares/handleValidation.js';
import permit from '../middlewares/permit.js';
import validation from '../validation/index.js';
import accessControl from '../middlewares/accessControl.js';
import validators from '../validation/index.js';
import {
  addUser,
  getUser,
  updateUser,
  deleteUser,
  getAllUser,
  signInUser,
  signUpUser
} from '../controllers/userController.js';

const router = express.Router();

router.route('/').post(handleValidations(validation.userValidation), addUser);
router.route('/').get( getAllUser);
router.route('/:number').get(accessControl, getUser);
router.route('/:id').put(updateUser).delete(deleteUser);


router.route('/register').post(permit('Super Admin','Admin'), handleValidations(validators.userRegisterValidator), signUpUser);
router.route('/login').post(handleValidations(validators.loginValidation), signInUser);

const configure = (app) => {
  app.use('/api/user', router);
};

export default configure;
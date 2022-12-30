import express from 'express';
import {
  getAllCats,
  getCat,
  addCat,
  updateCat,
  deleteCat
} from '../controllers/categoryController.js';
import { handleValidations } from '../middlewares/handleValidation.js';
import validation from '../validation/index.js';
import accessControl from '../middlewares/accessControl.js';

const router = express.Router();

router.route('/create').post(handleValidations(validation.categoryValidation), addCat);
router.route('/').get( getAllCats);
router.route('/:name').get( getCat);
router.route('/:id').put(updateCat).delete(deleteCat);

const configure = (app) => {
  app.use('/api/category', router);
};

export default configure;
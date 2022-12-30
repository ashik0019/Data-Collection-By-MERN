import asyncHandler from '../utils/async.js';
import {
  addCatService,
  getAllCatService,
  getCatService,
  updateCatService,
  deleteCatService,
  checkCatrService
} from '../services/categoryService.js';
import { NotFound } from '../utils/error.js';

export const addCat = asyncHandler(async (req, res) => {
  const newCat = await addCatService(req.body);
  return res.status(201).json({ newCat, msg: `Category create successfully` });
});

export const getCat = asyncHandler(async (req, res) => {
  const cat = await getCatService(req.params.name);
  return res.status(200).json({ cat, msg: `${cat.name} fetch successfully` });
});

export const getAllCats = asyncHandler(async (req, res) => {
  const cats = await getAllCatService();
  return res.status(200).json({ cats, msg: `All users data fetch successfully` });
});

export const updateCat = asyncHandler(async (req, res) => {
  const cat = checkCatrService(req.params.id);
  if (!cat) {
    throw new NotFound('Category not found');
  }
  const updatedCat = await updateCatService(req.params.id, req.body);
  return res.status(200).json({ updatedCat, msg: `${updatedCat.name} update successfully` });
});

export const deleteCat = asyncHandler(async (req, res) => {
  const cat = await checkCatrService(req.params.id);
  if (!cat) {
    throw new NotFound(`Category not found in this id:${req.params.id}`);
  }
  
  const deletedCat = await deleteCatService(req.params.id);
  return res.status(200).json({ deletedCat, msg: `${deletedCat.name} delete successfully` });
});
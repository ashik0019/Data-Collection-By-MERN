import models from '../models/index.js';

const { Categories } = models;

export const addCatService = async (catData) => {
  const newCat = await Categories.create(catData);
  return newCat;
};

export const getCatService = async (catData) => {
  const cat = await Categories.findOne({ catData });
  return cat;
};

export const getAllCatService = async () => {
    const cats = await Categories.find();
    return cats;
  };
  

export const updateCatService = async (id, data) => {
  const updatedCat = await Categories.findByIdAndUpdate(id, data, { new: true });
  return updatedCat;
};

export const deleteCatService = async (id) => {
  const deletedCat = await Categories.findByIdAndUpdate(id, { new: true });
  return deletedCat;
};

export const checkCatrService = async (id) => {
  const checkTemp = await Categories.findById(id);
  return checkTemp;
};
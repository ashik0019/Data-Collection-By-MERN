import bcrypt from 'bcryptjs';
import asyncHandler from '../utils/async.js';
import {
  addUserService,
  getUserService,
  updateUserService,
  deleteUserService,
  checkTempUserService,
  getAllUserService,
} from '../services/userService.js';
import { NotFound } from '../utils/error.js';

export const addUser = asyncHandler(async (req, res) => {
  const newUser = await addUserService(req.body);
  return res.status(201).json({ newUser, msg: `${newUser.role} create successfully` });
});

export const getUser = asyncHandler(async (req, res) => {
  const user = await getUserService(req.params.number);
  return res.status(200).json({ user, msg: `${user.role} fetch successfully` });
});

export const getAllUser = asyncHandler(async (req, res) => {
  const user = await getAllUserService();
  return res.status(200).json({ user, msg: `All users data fetch successfully` });
});

export const updateUser = asyncHandler(async (req, res) => {
  const user = checkTempUserService(req.params.id);
  if (!user || user.tempDeleted === true) {
    throw new NotFound('User not found');
  }
  const updatedUser = await updateUserService(req.params.id, req.body);
  return res.status(200).json({ updatedUser, msg: `${updateUser.role} update successfully` });
});

export const deleteUser = asyncHandler(async (req, res) => {
  const user = await checkTempUserService(req.params.id);
  if (!user) {
    throw new NotFound(`User not found in this id:${req.params.id}`);
  }
  if (user && user.tempDeleted === true) {
    throw new NotFound('You have already deleted');
  }
  const deletedUser = await deleteUserService(req.params.id);
  return res.status(200).json({ deletedUser, msg: `${deleteUser.role} delete successfully` });
});
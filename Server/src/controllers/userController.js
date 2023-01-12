import bcrypt from 'bcryptjs';
import asyncHandler from '../utils/async.js';
import { NotFound, BadRequest } from '../utils/error.js';
import sendTokenResponse from '../utils/sendTokenResponse.js';
import {
  addUserService,
  getUserService,
  updateUserService,
  deleteUserService,
  checkTempUserService,
  getAllUserService,
  findUserByEmail,
  findUserById,
  createUserServices
} from '../services/userService.js';




// register  user
export const signUpUser = asyncHandler(async (req, res) => {
  const { email,role,password } = req.body;
  const user = await findUserByEmail(email);
  if (user) {
    throw new BadRequest('Email already Exits');
  }
  if(role == 'Super Admin'){
    throw new BadRequest('Super admin already Exits');
  }
  const hasPassword = await bcrypt.hash(password, 11);
  const dataWithHash = { ...req.body, password: hasPassword };
  console.log(dataWithHash)
  const registeredUser = await createUserServices(dataWithHash);
  res.status(200).json({ success: true, details: registeredUser, msg: 'User Register Success' });
});




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
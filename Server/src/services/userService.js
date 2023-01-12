import models from '../models/index.js';

const { User } = models;

export const addUserService = async (user) => {
  const newUser = await User.create(user);
  return newUser;
};

export const getUserService = async (number) => {
  const user = await User.findOne({ number });
  return user;
};

export const getAllUserService = async () => {
    const user = await User.find();
    return user;
  };
  

export const updateUserService = async (id, data) => {
  const updatedUser = await User.findByIdAndUpdate(id, data, { new: true });
  return updatedUser;
};

export const deleteUserService = async (id) => {
  const deletedUser = await User.findByIdAndUpdate(id, { tempDeleted: true }, { new: true });
  return deletedUser;
};

export const checkTempUserService = async (id) => {
  const checkTemp = await User.findById(id);
  return checkTemp;
};

export const findUserById = async (id) => {
  const user = User.findById(id).select('-password -resetPasswordExpires -resetPasswordToken ');
  return user;
};


export const findUserByEmail = async (email) => {
  const result = await User.findOne({ email });
  console.log(result)
  return result;
};

export const createUserServices = async (user) => {
  const result = await User.create(user);
  return result;
};

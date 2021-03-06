import { User } from "../models/user.js";

export const insertUser = async (userDetails) => {
  const user = new User(userDetails);
  await user.save();
};

export const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

export const deleteUserByEmail = async ({ email }) => {
  return await User.deleteOne({ email });
};

export const updateUserByEmail = async (email, userDetails) => {
  return await User.findOneAndUpdate({ email }, userDetails, { new: true });
};

import { User } from "../models/user.js";

export const insertUser = async (userDetails) => {
  const user = new User(userDetails);
  await user.save();
};

export const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

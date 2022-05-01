import { insertUser, findUserByEmail } from "../repositories/userRepository.js";
import { encryptPassword } from "../utils/crypto.js";

export const createUser = async ({ password, ...user }) => {
  if (password.length < 6) throw new Error("Password must have more than 6 characters");
  await insertUser({ ...user, password: await encryptPassword(password) });
};

export const getUserByEmail = async (email) => {
  if (!email) throw new Error("Email not provided");
  return await findUserByEmail(email);
};

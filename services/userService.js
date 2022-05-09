import { insertUser, findUserByEmail, deleteUserByEmail } from "../repositories/userRepository.js";
import { encryptPassword } from "../utils/crypto.js";
import { HttpError } from "../utils/httpError.js";

export const createUser = async ({ password, ...user }) => {
  if (password.length < 6) throw new HttpError(400, "Password must have more than 6 characters");
  await insertUser({ ...user, password: await encryptPassword(password) });
};

export const getUserByEmail = async (email) => {
  if (!email) throw new HttpError(400, "Email not provided");
  return await findUserByEmail(email);
};

export const removeUserByEmail = async (email) => {
  if (!email) throw new HttpError(400, "Email not provided");
  return await deleteUserByEmail(email);
};

import { createUser } from "./userService.js";
import { validatePassword } from "../utils/crypto.js";
import { findUserByEmail } from "../repositories/userRepository.js";
import jwt from "jsonwebtoken";
import { HttpError } from "../utils/httpError.js";

const { SECRET_KEY } = process.env;

export const signUpUser = async (user) => {
  await createUser({ ...user, type: "user" });
};

export const signUpAdmin = async (user) => {
  await createUser({ ...user, type: "admin" });
};

export const logIn = async ({ email, password }) => {
  if (!email) throw new HttpError(400, "Email not provided");
  const user = await findUserByEmail(email);
  if (!user) throw new HttpError(400, "User not found");
  const isPasswordValid = await validatePassword(password, user.password);
  if (!isPasswordValid) throw new HttpError(400, "Invalid password");
  const jwt = await generateJWT({ email: user.email, _id: user._id, role: user.role });
  return { ...user.toJSON(), jwt };
};

export const generateJWT = async (payload) => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: "2 days" });
};

export const verifyJWT = async (token) => {
  return jwt.verify(token, SECRET_KEY);
};

import { scrypt } from "crypto";
import { promisify } from "util";

const { SALT_KEY } = process.env;

const encripter = promisify(scrypt);

export const encryptPassword = async (password) => {
  const encryptedPassword = await encripter(password, SALT_KEY, 32);
  return encryptedPassword.toString("hex");
};

export const validatePassword = async (password, encryptedPassword) => {
  return encryptedPassword === (await encryptPassword(password));
};

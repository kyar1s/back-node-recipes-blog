import { verifyJWT } from "../services/authService.js";
import { HttpError } from "../utils/httpError.js";

export const tokenValidation = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return next();
  try {
    const { email, role, _id } = await verifyJWT(authorization.slice(7));
    req.user = { email, role, _id };
    next();
  } catch (err) {
    next(new HttpError(409, "Wrong JWT"));
  }
};

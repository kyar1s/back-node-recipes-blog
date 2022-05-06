import { HttpError } from "../utils/httpError.js";

export const roleValidation = (roles) => {
  return (req, res, next) => {
    if (!req.user) throw new HttpError(401, "No user logged");
    if (!["master", ...roles].includes(req.user.role)) throw new HttpError(403, "You dont have permission to access to this resource");
    next();
  };
};

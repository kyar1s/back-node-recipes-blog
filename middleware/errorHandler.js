export const errorHandler = (error, req, res, next) => {
  console.log(error);
  res.status(error.errorCode).json({ message: error.message, error });
};

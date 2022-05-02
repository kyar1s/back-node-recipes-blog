import { STATUS_CODES } from "http";

export class HttpError extends Error {
  constructor(errorCode, message) {
    super();

    Error.captureStackTrace(this, this.constructor);

    this.errorCode = errorCode || 500;

    this.message = message || STATUS_CODES[this.errorCode];
  }
}

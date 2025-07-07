class HttpError extends Error {
  constructor(message, errorCode) {
    super(message); // accessing this from super class
    this.code = errorCode;
  }
}

export default HttpError;

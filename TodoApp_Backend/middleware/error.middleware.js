const errorHandler = (statusCode, Message) => {
    const error = new Error();
    error.statusCode = statusCode || 500;
    error.Message = Message || "An unexpected error occured";
}

export default errorHandler;
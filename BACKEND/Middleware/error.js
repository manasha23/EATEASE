class ErrorHandler extends Error{
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
}
}



//Inside the function, it sets the err.message to the provided message or defaults to "Internal Server Error" if no message is provided.
// It also sets the err.statusCode to the provided status code or defaults to 500 if no status code is provided.
// Then, it sends a JSON response with the appropriate status code and an object containing the error message.
export const errorMiddleware = (err,req,res,next) =>{
    err.message = err.message || "Internal Server Error";
    err.statusCode =err.statusCode || 500;

    return res.status(err.statusCode).json({
        suceess: false,
        message: err.message,
    });
};

export default ErrorHandler;
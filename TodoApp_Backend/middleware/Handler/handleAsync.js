import errorHandler from "../error.middleware.js"

export const handleAsync = (controller) => {

    // return middleware function
    return async (req, res, next) => {
        try {
            await controller(req,res,next)
            } catch (error) {
                next(errorHandler(error));
            }
    }
}
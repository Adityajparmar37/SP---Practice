export const handleAsync = (controller) => {

    // return middleware function
    return async (req, res, next) => {
        try {
            await controller(req,res,next)
        } catch (error) {
            console.log(error)
                next(error);
            }
    }
}
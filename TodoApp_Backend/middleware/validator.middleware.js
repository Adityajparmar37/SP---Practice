//ae toh bass ek wrapper che
export const validatorMid = (validator) => {

    // middleware function
    return (req, res, next) => {
        const {error} = validator.validate(req.body,{
            abortEarly: false
        }) // abortEarly etla k ek error Joi ape to code stop na thai jai rather contiune to collect all error
        
        if (error) {
            const errorList = error.details.map((error) => error.message);
            return res.status(400).json({
            success: false,
            message: "Validation Error",
            fields: errorList
        });
    }
        next();
    }
}
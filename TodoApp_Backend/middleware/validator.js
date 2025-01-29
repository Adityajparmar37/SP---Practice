export const validatorMiddleware = (validator) => (req, res, next) => {
    console.log(req.body)
    const { error } = validator(req.body);

    if (error) {
        return res.status(400).json({
            message: "Validatio Error",
            details: error.details
        })
    }

    next();
}
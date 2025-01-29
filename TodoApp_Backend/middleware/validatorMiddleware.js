export const validatorMiddleware = (validators) => (req, res, next) => {
    
    const checkData = { ...req.body, ...req.params, ...req.query };
    
    const errors = [].concat(...validators.map((validator) => validator(checkData)?.error?.details || []));

    if (errors.length > 0) {
        return res.status(400).json({
            message: "Validatio Error",
            details: errors
        })
    }

    next();
}
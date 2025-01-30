export const validator = (validators) => (req, res, next) => {
  const checkData = { ...req.body, ...req.params, ...req.query };
  const url = req.url;

  const errors = [].concat(
    ...validators.map(
      (validator) => validator(checkData, url)?.error?.details || []
    )
  );

  if (errors.length > 0) {
    return res.status(400).json({
      message: "Validatio Error",
      details: errors,
    });
  }

  next();
};

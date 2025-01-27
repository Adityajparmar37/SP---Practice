import Joi from "joi";

export const todoValidator = Joi.object({
    description: Joi.string().min(3).required(),
    priority: Joi.string().valid("Low", "Medium", "High").required(),
    status:Joi.string().valid("Pending","In Progress","Completed").required()
})


export const updateTodoValidator = Joi.object({
    description: Joi.string().min(3),
    priority: Joi.string().valid("Low", "Medium", "High"),
    status:Joi.string().valid("Pending","In Progress","Completed")
})
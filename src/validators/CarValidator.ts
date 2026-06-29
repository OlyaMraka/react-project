import Joi from "joi";

export const CarValidator = Joi.object({
    brand: Joi.string()
        .pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/)
        .min(1)
        .max(20)
        .required()
        .messages({
            "string.pattern.base": "Бренд повинен містити лише літери українського" +
                " або англійського алфавіту та мати довжину від 1 до 20 символів",
            "string.min": "Мінімальна довжина бренду - 1 символ",
            "string.max": "Максимальна довжина бренду - 20 символів",
        }),

    price: Joi.number()
        .max(1000000)
        .min(0)
        .messages({
            "number.max": "Максимальне значення ціни 1000000",
            "number.min": "Мінімальне значення ціни 0"
        }),

    year: Joi.number()
        .max(2026)
        .min(1990)
        .messages({
            "number.max": "Максимальне значення року 2026",
            "number.min": "Мінімальне значення року 1990"
        })
})

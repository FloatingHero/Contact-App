import { checkSchema } from "express-validator";

const loginSchema = checkSchema({
    emai: {
        notEmpty: true,
        isEmail: true
    },
    password: {
        notEmpty: true
    }
});

export default loginSchema;
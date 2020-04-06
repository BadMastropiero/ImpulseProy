import { extend } from "vee-validate";

extend("minmax", {
    validate(value, { min, max }) {
        return value.length >= min && value.length <= max;
    },
    params: ["min", "max"],
    message: (fieldName, placeholders) => {
        return `The ${fieldName} field must have at least ${placeholders.min} characters and ${placeholders.max} characters at most`;
    }
});
const i18n = {
    validationErrors: {
        required:  "This field is required",
        minLength: "The minimum length for this field is %1",
        maxLength: "The maximum length for this field is %1",
        isEmail:   "This is not a valid e-mail address",
        regex:     "This is not a valid value for this field",
        lowerCase: "At least one lower case letter is required",
        upperCase: "At least one upper case letter is required",
        numeric:   "At least one number is required",
        symbol:    "At least one non-alphanumeric character is required",
        func:      "This is not a valid value for this field"
    }
};

export const validateInput = (value, validation) => {
    if (!validation) {
        return [true, []];
    }

    const validationErrors = [];
    let isValid            = true;
    if (validation.required) {
        let stepValid = value.trim() !== '';
        if (!stepValid) {validationErrors.push(i18n.validationErrors.required)}
        isValid = isValid && stepValid;
    }
    if (validation.isEmail) {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let stepValid = pattern.test(value);
        if (!stepValid) {validationErrors.push(i18n.validationErrors.isEmail)}
        isValid = isValid && stepValid;
    }
    if (validation.regex) {
        let stepValid = validation.regex.test(value);
        if (!stepValid) {validationErrors.push(i18n.validationErrors.regex)}
        isValid = isValid && stepValid;
    }
    if(validation.requireLowerCase) {
        let stepValid = /[a-z]/.test(value);
        if (!stepValid) {validationErrors.push(i18n.validationErrors.lowerCase)}
        isValid = isValid && stepValid;
    }
    if(validation.requireUpperCase) {
        let stepValid = /[A-Z]/.test(value);
        if (!stepValid) {validationErrors.push(i18n.validationErrors.upperCase)}
        isValid = isValid && stepValid;
    }
    if(validation.requireNumeric) {
        let stepValid = /[0-9]/.test(value);
        if (!stepValid) {validationErrors.push(i18n.validationErrors.numeric)}
        isValid = isValid && stepValid;
    }
    if(validation.requireSymbols) {
        let stepValid = /[^0-9A-Za-z ]/.test(value);
        if (!stepValid) {validationErrors.push(i18n.validationErrors.symbol)}
        isValid = isValid && stepValid;
    }
    if (validation.minLength) {
        let stepValid = value && value.length >= validation.minLength;
        if (!stepValid) {validationErrors.push(i18n.validationErrors.minLength.replace("%1", validation.minLength))}
        isValid = isValid && stepValid;
    }
    if (validation.maxLength) {
        let stepValid = value && value.length <= validation.maxLength;
        if (!stepValid) {validationErrors.push(i18n.validationErrors.maxLength.replace("%1", validation.maxLength))}
        isValid = isValid && stepValid;
    }
    if (validation.func) {
        let stepValid = validation.func(value);
        if (!stepValid) {validationErrors.push(i18n.validationErrors.func)}
        isValid = isValid && stepValid;
    }
    return [isValid, validationErrors];
};
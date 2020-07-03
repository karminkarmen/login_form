const validatePassword = (password: string): string => {
    const validationOutput = [];

    if (password.length < 6) {
        validationOutput.push('minimum 6 digits')
    }

    if (password.search(/[0-9]/) < 0) {
        validationOutput.push('at least one number')
    }

    if (password.search(/[A-Z]/) < 0) {
        validationOutput.push('at least one upper case letter')
    }

    if (password.search(/[a-z]/) < 0) {
        validationOutput.push('at least one lower case letter')
    }

    if (validationOutput.length !== 0) {
        return `Invalid password. Your password needs: ${validationOutput.join(', ')}.`
    }

    return validationOutput.join('\r\n');
}

const validateEmail = (email: string): string => {
    const emailRegx = /\S+@\S+\.\S+/;
    const validationOutput = [];

    if (!emailRegx.test(email)) {
        validationOutput.push('Invalid email.')
    }

    return validationOutput.join('\r\n');
}

export const validateForm = (): {
    validatePassword: any,
    validateEmail: any
} => {
    return {
        validatePassword,
        validateEmail
    }
}
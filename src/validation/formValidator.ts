import messages from '../constants/messagesConsts';

const validatePassword = (password: string): string => {
    const validationOutput = [];

    if (password.length < 6) {
        validationOutput.push('minimum 6 characters')
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
        return `${messages.invalidPasswordInfo} Your password needs: ${validationOutput.join(', ')}.`
    }

    return validationOutput.join('');
}

const validateEmail = (email: string): string => {
    const emailRegx = /\S+@\S+\.\S+/;
    const validationOutput = [];

    if (!emailRegx.test(email)) {
        validationOutput.push(messages.invalidEmailInfo);
    }

    return validationOutput.join('');
}

export const formValidator = (): {
    validatePassword: (password: string) => string,
    validateEmail: (password: string) => string,
} => {
    return {
        validatePassword,
        validateEmail
    }
}

import { formValidator } from '../formValidator';
import messages from '../../constants/messagesConsts';

describe('Validation spec', () => {

    const validator = formValidator();
    const emailValidator = validator.validateEmail;
    const passwordValidator = validator.validatePassword;

    const emailWithoutDot = 'invalid@dot';
    const emailWithoutAt = 'invalid.dot';
    const validEmail = 'valid@email.com';

    const tooShortPassword = 'happy';
    const withoutUpperCasedPassword = 'happy1';
    const withoutLowerCasedPassword = 'HAPPY1';
    const withoutNumberPassword = 'happy!';
    const validPassword = 'Happy1';

    const { invalidEmailInfo, invalidPasswordInfo } = messages;

    // EMAIL
    it('Does not allow to provide empty email address', () => {
        const result = emailValidator('');
        expect(result).toContain(invalidEmailInfo);
    })

    it('Does not allow to provide invalid email address (without .)', () => {
        const result = emailValidator(emailWithoutDot);
        expect(result).toContain(invalidEmailInfo);
    })

    it('Does not allow to provide invalid email address (without @)', () => {
        const result = emailValidator(emailWithoutAt);
        expect(result).toContain(invalidEmailInfo);
    })

    it('Allows to provide valid email address', () => {
        const result = emailValidator(validEmail);
        expect(result).toBe('');
    })

    
    // PASSWORD
    it('Does not allow to provide empty password', () => {
        const result = passwordValidator('');
        expect(result).toContain(invalidPasswordInfo);
    })

    it('Does not allow to provide too short password', () => {
        const result = passwordValidator(tooShortPassword);
        expect(result).toContain(invalidPasswordInfo);
    })

    it('Does not allow to provide password without uppercased letter', () => {
        const result = passwordValidator(withoutUpperCasedPassword);
        expect(result).toContain(invalidPasswordInfo);
    })

    it('Does not allow to provide password without lowercased letter', () => {
        const result = passwordValidator(withoutLowerCasedPassword);
        expect(result).toContain(invalidPasswordInfo);
    })

    it('Does not allow to provide password without number', () => {
        const result = passwordValidator(withoutNumberPassword);
        expect(result).toContain(invalidPasswordInfo);
    })

    it('Allow to provide valid password', () => {
        const result = passwordValidator(validPassword);
        expect(result).toBe('');
    })

});

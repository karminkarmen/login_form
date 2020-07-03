import { validateForm } from '../formValidation';
import { invalidPasswordInfo, invalidEmailInfo } from '../../constants/messagesConsts';

describe('Validation spec', () => {

    const validator = validateForm();
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


    // EMAIL
    it('Does not allow to provide empty email adress', () => {
        const result = emailValidator('');
        expect(result).toContain(invalidEmailInfo);
    })

    it('Does not allow to provide invalid email adress (without .)', () => {
        const result = emailValidator(emailWithoutDot);
        expect(result).toContain(invalidEmailInfo);
    })

    it('Does not allow to provide invalid email adress (without @)', () => {
        const result = emailValidator(emailWithoutAt);
        expect(result).toContain(invalidEmailInfo);
    })

    it('Allows to provide invalid email adress (without @)', () => {
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

    it('Allow to provide password without number', () => {
        const result = passwordValidator(validPassword);
        expect(result).toBe('');
    })

});
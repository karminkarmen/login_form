import credentials from '../../configs/credentials';
import messages from '../../constants/messagesConsts';
import loginHandler from '../loginHandler';

describe('Login handler spec', () => {

    const incorrectCredentials = {
        email: 'fake@credentials.com',
        password: 'fakePassword1',
    };

    it('Does not allow to provide incorrect credentils (email, password)', async() => {
        await expect(loginHandler(incorrectCredentials.email, incorrectCredentials.password)).rejects.toEqual(messages.loginRejectInfo);
    });

    it('Does not allow to provide incorrect one of credential (email)', async() => {
        await expect(loginHandler(incorrectCredentials.email, credentials.password)).rejects.toEqual(messages.loginRejectInfo);
    });

    it('Does not allow to provide incorrect one of credential (password)', async() => {
        await expect(loginHandler(credentials.email, incorrectCredentials.password)).rejects.toEqual(messages.loginRejectInfo);
    })

    it('Allows to provide correct credentials', async() => {
        await expect(loginHandler(credentials.email, credentials.password)).resolves.toEqual(messages.loginResolveInfo);
    });

});
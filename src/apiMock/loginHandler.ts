import messages from '../constants/messagesConsts';
import credentials from '../configs/credentials';

const loginHandler = (email: string, password: string): Promise<string> =>  {
    return new Promise((resolve, reject) => {
        if (email === credentials.email && password === credentials.password) {
            resolve(messages.loginResolveInfo);
        } else {
            reject(messages.loginRejectInfo);
        }
    });
}

export default loginHandler;

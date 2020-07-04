const loginHandler = (email: string, password: string): Promise<string> =>  {
    return new Promise((resolve, reject) => {
        if (email === 'test@test.pl' && password === 'Password1') {
            resolve('User is logged in');
        } else {
            reject('User is not authorized');
        }
    });
}

export default loginHandler;
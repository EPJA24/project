import axios, { HttpStatusCode } from 'axios';

interface loginCreds {
    username: string;
    password: string;
}

interface Token {
    access_token: string;
    token_type: string;
}

interface loginResponse {
    token?: Token;
    resCode: HttpStatusCode;
    errorMsg?: string;
}

const login = async (creds: loginCreds): Promise<loginResponse> => {
    let args = new FormData();
    args.append('username', creds.username);
    args.append('password', creds.password);

    try {
        const res = await axios.post('https://www.backendus.com/auth/token', args, {
            withCredentials: true
        });

        if (res.status === 200) {
            return {
                token: res.data as Token,
                resCode: res.status
            };
        } else {
            return {
                resCode: res.status,
                errorMsg: 'Unexpected response status'
            };
        }
    } catch (err: any) {
        console.log(err);

        return {
            resCode: err.response?.status || 500,
            errorMsg: err.message || 'An unknown error occurred'
        };
    }
};

export default login;

import axios from 'axios';

// const API_URL = 'https://impulseguillermo.herokuapp.com/api/auth/';

class AuthService {
    login(user) {
        return axios
            .post('https://impulseguillermo.herokuapp.com/api/auth/signin', {
                email: user.email,
                password: user.password
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }
                return response.data;
            });
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(user) {
        return axios.post("https://impulseguillermo.herokuapp.com/api/auth/signup", {
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            password: user.password,
            phonenumber: user.phonenumber
        });
    }
}

export default new AuthService();
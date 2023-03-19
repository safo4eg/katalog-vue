import settings from '@/api/settings';
settings.body.method = 'POST'

async function register(formData) {
    settings.body.body = formData
    let result = await fetch(`${settings.baseUrl}/signup`, settings.body);
    return result;
}

async function login(formData) {
    settings.body.body = formData
    let result = await fetch(`${settings.baseUrl}/login`, settings.body);
    return result;
}

async function logout(token) {
    let result = await fetch(`${settings.baseUrl}/logout`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    return result;
}

export default {
    register: register,
    login: login,
    logout: logout
}
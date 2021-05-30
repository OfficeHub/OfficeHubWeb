import { SHA256 } from '../hashing.js';

export async function fetchUserData(id) {
    const response = await fetchHub("test/users")
        .then(response => response.json());

    return {
        name: response.name,
        description: response.comment,
        phoneNumber: response.phoneNum,
        department: response.department,
    };
}

export async function requestLogin(email, password) {
    await fetchHub("login/getlogin", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    });
}

export async function registerUser(userId, password) {
    const response = await fetchHub("login/useradd", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            userId: userId,
            password: SHA256(password)
        })
    });
    console.log(response);
    return response;
}

async function fetchHub(endPoint, init) {
    const localUrl = "http://localhost:8080/"
    const remoteUrl = "http://13.125.35.33:8080/"
    const targetUrl = remoteUrl + endPoint;
    console.log("request  " + targetUrl);
    const response = await fetch(targetUrl, init);
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}
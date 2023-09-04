import axios from "axios"
const url = import.meta.env.VITE_API_JAVAURL

//登入程式
async function login(userName, password) {
    const result = {
        status: 1,
        token: "",
        loa: 0,
    }

    const data = {
        memberemail: userName,
        memberpassword: password
    }
    const res = await axios.post(`${url}/login`, data)
    if (res.data.status) {
        result.status = 0
        result.token = res.data.token
        result.loa = res.data.loa
        setLoginStore({
            isLogin: true,
            token: result.token,
            userName: res.data.username,
            loa: result.loa,
        })
    }

    return result
}



async function authToken(token) {
    const result = {
        status: false,
        token: "",
        userName: "",
        loa: 0,
    }
    const data = {
        token: token
    }
    const res = await axios.post(`${url}/auth`, data)
    console.log('res.status:' + res.data.status)
    if (res.data.status) {
        console.log('authToken1')
        console.log('res.data:' + res.data)
        result.status = true
        result.token = res.data.token
        result.userName = res.data.username
        result.loa = res.data.loa
        setLoginStore({
            isLogin: true,
            token: result.token,
            userName: result.userName,
            loa: result.loa,
        })
    } else {
        console.log('authToken2')
        setLoginStore({
            isLogin: false,
            token: "",
            userName: "",
            loa: result.loa,
        })
    }

    return result
}


function setLoginStore(options) {
    window.localStorage.setItem("isLogin", options.isLogin)
    window.localStorage.setItem("token", options.token)
    window.localStorage.setItem("username", options.userName)
    window.localStorage.setItem("loa", options.loa)
}


export { login, authToken }
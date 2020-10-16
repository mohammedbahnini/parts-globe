import axios from 'axios';

export const isLoggedIn = async ()=>{
    const response = await axios.get(`${process.env.api}/user/checkLoggedIn`);
    return response.data.isLogged;
}

export const getClientData = async ()=>{
    const response =  await axios.get(`${process.env.api}/user/getData`);
    return response.data.client ;
}
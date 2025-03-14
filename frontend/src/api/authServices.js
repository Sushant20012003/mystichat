import { useSelector } from "react-redux";
import store from "../store/store";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "./config";

export const signup = async(formData) => {
    try {
        let response = await fetch(`${BASE_URL}/api/auth/register`, {
            method:"POST",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(formData),
            credentials:'include'
        });

        response = await response.json();

        return response;
    } catch (error) {
        console.log(error);
        
    }
    
}



export const verifyOTP = async(email, otp) => {
    try {
        let response = await fetch(`${BASE_URL}/api/auth/verify-otp`, {
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({email:email, otp:otp}),
            credentials:'include'
        });

        response = await response.json();
        return response;
    } catch (error) {
        console.log(error);
        
    }
}


export const resendOTP = async(email) => {
    try {
        let response = await fetch(`${BASE_URL}/api/auth/resend-otp`, {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({email:email}),
            credentials:'include'
        });

        response = await response.json();
        return response;

    } catch (error) {
        console.log(error);
    }
}



export const login = async(formData) => {
    try {
        let response = await fetch(`${BASE_URL}/api/auth/login`, {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(formData),
            credentials:'include'
        });

        response = await response.json();
        return response;

    } catch (error) {
        console.log(error);
        
    }
}


export const logout = async() => {
    try {
        let response = await fetch(`${BASE_URL}/api/auth/logout`, {
            method:'GET',
            credentials:'include'
        });

        response = await response.json();
        return response;

    } catch (error) {
        console.log(error);
        
    }
}


export const deleteUser = async(email) => {
    try {
        let response = await fetch(`${BASE_URL}/api/auth/delete`, {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({email:email}),
            credentials:'include'
        });

        response = await response.json();
        return response;

    } catch (error) {
        console.log(error);
        
    }
}
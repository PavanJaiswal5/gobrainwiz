import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

export const registerStudent = (data) => {
  return axios.post(`${API_URL}/StudentRegister/DirectStduentRegister`, data);
};

export const verifyStudentOtp = (data) => {
  return axios.post(`${API_URL}/StudentRegister/Verify-otp`, data);
};

export const resendOtp = (data) => {
  return axios.post(`${API_URL}/StudentRegister/Resend-otp`, data);
};

export const loginStudent = (data) => {
  return axios.post(`${API_URL}/StudentRegister/DirectStudentLogin`, data);
};

export const user =()=>{
  console.log("user")
}
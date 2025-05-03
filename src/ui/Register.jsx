import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
const API_URL = import.meta.env.VITE_API_URL;
console.log(`API_URL: ${API_URL}`);
function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    mobile: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstname, lastname, mobile, password } = formData;

    // Check for empty fields
    if (!firstname || !lastname || !mobile || !password) {
      Swal.fire({
        icon: "warning",
        title: "⚠️ Incomplete Form",
        text: "Please fill out all fields before submitting.",
        confirmButtonColor: "#d33",
      });
      return;
    }

    // Check for valid 10-digit mobile number
    if (!/^\d{10}$/.test(mobile)) {
      Swal.fire({
        icon: "error",
        title: "📵 Invalid Mobile Number",
        text: "Mobile number must be exactly 10 digits.",
        confirmButtonColor: "#d33",
      });
      return;
    }

 

    // Check for minimum password length
    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "🔐 Weak Password",
        text: "Password must be at least 6 characters long.",
        confirmButtonColor: "#d33",
      });
      return;
    }

    try {
     
      console.log(`hii the data is ${formData}`);
      const res = await axios.post(
        `${API_URL}/StudentRegister/DirectStduentRegister`,
        formData
      );
      console.log("sub ok hai ");
      if (res.status === 200 || res.status === 201) {
        Swal.fire({
          icon: "success",
          title: "🎉 Registered!",
          text: "Your account has been created successfully.",
          confirmButtonColor: "#3085d6",
        }).then(()=>{
          navigate("/login");
        });

      
      } else {
        Swal.fire({
          icon: "error",
          title: "😞 Oops!",
          text: "Something went wrong while signing up.",
          confirmButtonColor: "#d33",
        });
      }
    } catch (error) {
      console.error("Registration Error:", error);
      Swal.fire({
        icon: "error",
        title: "🚫 Submission Failed",
        text: "Please check your input or try again later.",
        confirmButtonColor: "#d33",
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div
          className="text-[30px] font-bold mb-[3px]"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          Sign Up
        </div>
  
        <div
          className="text-[14px] font-normal text-gray-400"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Please sign up to your account and start the adventure
        </div>
  
        <div className="grid grid-cols-12 gap-[20px] my-[20px]">
          {/* First Name */}
          <div
            className="col-span-12 md:col-span-6 floating-label"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <input
              type="text"
              className="form-control"
              value={formData.firstname}
              onChange={handleChange}
              id="firstname"
              placeholder=""
            />
            <label htmlFor="firstname">First Name</label>
          </div>
  
          {/* Last Name */}
          <div
            className="col-span-12 md:col-span-6 floating-label"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <input
              type="text"
              className="form-control"
              id="lastname"
              value={formData.lastname}
              onChange={handleChange}
              placeholder=""
            />
            <label htmlFor="lastname">Last Name</label>
          </div>
  
          {/* Mobile - Full Width */}
          <div
            className="col-span-12 floating-label"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <input
              type="text"
              className="form-control"
              value={formData.mobile}
              onChange={handleChange}
              id="mobile"
              placeholder=""
            />
            <label htmlFor="mobile">Mobile</label>
          </div>
  
          {/* Password - Full Width */}
          <div
            className="col-span-12 floating-label"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder=""
              value={formData.password}
              onChange={handleChange}
            />
            <label htmlFor="password">Password</label>
          </div>
        </div>
  
        <div className="flex flex-col gap-[10px]">
          <button
            type="submit"
            className="btn btn-primary w-full"
            data-aos="fade-up"
            data-aos-delay="350"
          >
            Sign Up
          </button>
          <Link
            to="/login"
            className="btn btn-link w-full"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <span className="text-gray-500">Already have an account?</span> Sign In
          </Link>
        </div>
      </form>
    </>
  );
  
}

export default Register;

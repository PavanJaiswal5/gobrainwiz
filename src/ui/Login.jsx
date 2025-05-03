import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { loginStudent} from "../Services/studentAPi";

const API_URL = import.meta.env.VITE_API_URL; // Make sure the API URL is correctly set in the environment variable

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
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
    const { mobile, password } = formData;

    // Validate empty fields
    if (!mobile || !password) {
      Swal.fire({
        icon: "warning",
        title: "⚠️ Incomplete Form",
        text: "Please fill out all fields before submitting.",
        confirmButtonColor: "#d33",
      });
      return;
    }

    // Validate mobile number format (optional, you can adjust it according to your country)
    if (!/^\d{10}$/.test(mobile)) {
      Swal.fire({
        icon: "error",
        title: "📵 Invalid Mobile Number",
        text: "Please enter a valid 10-digit mobile number.",
        confirmButtonColor: "#d33",
      });
      return;
    }

    try {
      console.log("Form Data:", formData);
      const res = await loginStudent({mobile, password});
console.log("Response:", res);
      if (res.status === 200 && res.data.success) {
               navigate("/account");
      } else {
        Swal.fire({
          icon: "error",
          title: "📵 Invalid Mobile Number or Password",
          text: "Something went wrong. Please try again.",
          confirmButtonColor: "#d33",
        });
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "📵 Something went wrong",
        text: "Please try again later.",
        confirmButtonColor: "#d33",
      });
    }
  };

 

  return (
    <>
      <div
        className="text-[30px] font-bold mb-[3px]"
        data-aos="fade-up"
        data-aos-delay="50"
      >
        Welcome to Back! 👋
      </div>
      <div
        className="text-[14px] font-normal mb-[20px] text-gray-400"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Please sign in to your account and start the adventure
      </div>
      <form onSubmit={handleSubmit}>
        <div
          className="floating-label mb-[20px]"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <input
            type="tel"
            className="form-control"
            id="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder=""
            required
          />
          <label htmlFor="mobile">Number</label>
        </div>
        <div
          className="floating-label mb-[20px]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <input
            type="password"
            className="form-control"
            id="password"
            value={formData.password}
            onChange={handleChange}
            placeholder=""
            required
          />
          <label htmlFor="password">Password</label>
        </div>
        <div className="flex flex-col gap-[10px]">
          <Link
            to="/forgot-password"
            className="btn btn-link w-full"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            Forgot Your Password?
          </Link>
          <button
            type="submit"
            className="btn btn-primary w-full"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Sign In
          </button>
          <Link
            to="/signup"
            className="btn btn-link w-full"
            data-aos="fade-up"
            data-aos-delay="350"
          >
            <span className="text-gray-500">New on our platform?</span> Sign Up
          </Link>
        </div>
      </form>

      {/* OTP Modal */}
      {/* <Modal show={showOTPModal} onHide={() => setShowOTPModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>OTP Verification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-center">
            Enter 4 digit OTP sent to <b>+91 {formData.mobile}</b>
          </p>
          <div className="flex justify-center mb-[1rem]">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderInput={({ className, ...props }) => (
                <input
                  className="form-control size-[40px] mx-[5px]"
                  {...props}
                />
              )}
            />
          </div>
          <div className="flex justify-center mb-[1rem]">
            <button onClick={handleVerifyOtp} className="btn btn-primary">
              Verify and Proceed
            </button>
          </div>
          <p className="text-center">
            Did not receive the OTP?{" "}
            <span
              className="font-bold cursor-pointer text-blue-600"
              onClick={handleResendOtp}
            >
              Resend
            </span>
          </p>
        </Modal.Body>
      </Modal> */}
    </>
  );
}

export default Login;

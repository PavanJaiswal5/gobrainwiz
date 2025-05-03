import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import OtpInput from "react-otp-input";
import { Link, useNavigate } from "react-router-dom";
import {
  registerStudent,
  verifyStudentOtp,
  resendOtp,
} from "../Services/studentAPi";

const API_URL = import.meta.env.VITE_API_URL;

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    password: "",
  });
  const [otp, setOtp] = useState("");
  const [showOTPModal, setShowOTPModal] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, mobile, password } = formData;

    if (!name || !mobile || !password) {
      Swal.fire("⚠️", "Please fill out all fields.", "warning");
      return;
    }

    if (!/^\d{10}$/.test(mobile)) {
      Swal.fire("📵", "Please enter a valid 10-digit mobile number.", "error");
      return;
    }

    if (password.length < 6) {
      Swal.fire(
        "🔐 Weak Password",
        "Password must be at least 6 characters long.",
        "error"
      );
      return;
    }

    try {
      const res = await registerStudent({ name, mobile, password });
      if (res.status === 200 && res.data.success) {
        const tempToken = res.data.tempToken;
        localStorage.setItem("tempToken", tempToken);
        console.log("Saved token:", localStorage.getItem("tempToken"));

        setShowOTPModal(true);
      } else {
        Swal.fire("❌", res.data.message || "Signup failed", "error");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("❌ Error", "Something went wrong. Try again later.", "error");
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const temptoken = localStorage.getItem("tempToken");
      console.log("Token:", temptoken);
      if (temptoken) {
        const res = await verifyStudentOtp({
          mobile: formData.mobile,
          otp,
          temptoken,
        });
        if (res.data.success) {
          Swal.fire(
            "✅ Account Created!",
            "Redirecting to your account...",
            "success"
          ).then(() => navigate("/account"));
        } else {
          Swal.fire("❌ Invalid OTP", res.data.message, "error");
        }
      }
    } catch (err) {
      Swal.fire("❌ Error", "Something went wrong", "error");
    }
  };

  const handleResendOtp = async () => {
    try {
      const res = await resendOtp({ mobile: formData.mobile });

      if (res.data.success) {
        Swal.fire("✅ OTP Resent", "Check your terminal or phone", "success");
      } else {
        Swal.fire(
          "❌ Error",
          res.data.message || "Unable to resend OTP",
          "error"
        );
      }
    } catch (error) {
      console.error("Resend OTP Error:", error);
      Swal.fire(
        "❌ Error",
        "Something went wrong while resending OTP",
        "error"
      );
    }
  };

  return (
    <>
      <div
        className="text-[30px] font-bold mb-[3px]"
        data-aos="fade-up"
        data-aos-delay="50"
      >
        Welcome New User 👋
      </div>
      <div
        className="text-[14px] font-normal mb-[20px] text-gray-400"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Please create your account to get started
      </div>
      <form onSubmit={handleSubmit}>
        <div
          className="floating-label mb-[20px]"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <input
            type="text"
            className="form-control"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder=""
            required
          />
          <label htmlFor="name">Name</label>
        </div>
        <div
          className="floating-label mb-[20px]"
          data-aos="fade-up"
          data-aos-delay="200"
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
          <label htmlFor="mobile">Mobile Number</label>
        </div>
        <div
          className="floating-label mb-[20px]"
          data-aos="fade-up"
          data-aos-delay="250"
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
          <button
            type="submit"
            className="btn btn-primary w-full"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Sign Up
          </button>
          <Link
            to="/login"
            className="btn btn-link w-full"
            data-aos="fade-up"
            data-aos-delay="350"
          >
            Already have an account?{" "}
            <span className="text-blue-600">Sign In</span>
          </Link>
        </div>
      </form>

      {/* OTP Modal */}
      <Modal show={showOTPModal} onHide={() => setShowOTPModal(false)}>
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
              Verify and Create Account
            </button>
          </div>
          <p className="text-center">
            Didn't get the OTP?{" "}
            <span
              className="font-bold cursor-pointer text-blue-600"
              onClick={handleResendOtp}
            >
              Resend
            </span>
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Signup;

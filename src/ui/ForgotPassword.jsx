import { Link } from "react-router"


function ForgotPassword() {
  return (
    <>
      <div className="text-[30px] font-bold mb-[3px]" data-aos="fade-up" data-aos-delay="50">Forgot Password?</div>
      <div className="text-[14px] font-normal text-gray-400" data-aos="fade-up" data-aos-delay="100">Lost your password? Please enter your mobile number to receive a OTP, login with OTP and change your password in your Profile</div>
      <div className="grid grid-cols-12 gap-[10px] my-[20px]">
        <div className="col-span-12 md:col-span-12 floating-label" data-aos="fade-up" data-aos-delay="150">
          <input type="mobile" className="form-control" id="mobile" />
          <label htmlFor="mobile">Mobile Number</label>
        </div>
      </div>
      <div className="flex flex-col gap-[10px]">
        <Link to="/login" className="btn btn-primary w-full" data-aos="fade-up" data-aos-delay="200">Get OTP</Link>
        <Link to="/login" className="btn btn-link w-full" data-aos="fade-up" data-aos-delay="250"><i className="fa fa-angle-left mr-[10px]"></i>Back to Sign In</Link>
      </div>
    </>
  )
}

export default ForgotPassword
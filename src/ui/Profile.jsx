import { useState } from "react";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
console.log(`API_URL: ${API_URL}`);
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

function Profile() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    subject: "",
    college: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post(`${ API_URL}/studentdata`, formData);
  //     console.log("hii how are you ")
  //     console.log(`hii the data is ${formData}`);
  //     // await axios.post(`http://localhost:3000/studentdata`, formData);
  //     alert("Data submitted successfully");
  //   } catch (error) {
  //     console.error(error);
  //     alert("Failed to submit data");
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}/studentdata`, formData);
      if (res.status === 200) {
        MySwal.fire({
          icon: 'success',
          title: '🎉 Profile Updated!',
          text: 'Your information was saved successfully.',
          confirmButtonColor: 'var(--primary)',
        });
      } else {
        MySwal.fire({
          icon: 'error',
          title: '😞 Oops!',
          text: 'Something went wrong while updating your profile.',
          confirmButtonColor: 'var(--primary)',
        });
      }
    } catch (error) {
      console.error(error);
      MySwal.fire({
        icon: 'error',
        title: '🚫 Submission Failed',
        text: 'Please check your input or try again later.',
        confirmButtonColor: 'var(--primary)',
      });
    }
  };
  
  return (
    <>
      <nav aria-label="breadcrumb" className="flex-none mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item active" aria-current="page">Profile</li>
        </ol>
      </nav>

      <form onSubmit={handleSubmit}>
        <div className="rounded-[10px] overflow-hidden shadow">
          <div className="relative">
            <img src="/images/profile.jpeg" className="w-full object-cover aspect-[1/.3] md:aspect-[1/0.15]" alt="Cover" />
            <div className="size-[80px] xl:size-[100px] border-[3px] border-white absolute left-[20px] bottom-0 translate-y-1/2 bg-gray-300 rounded-full bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3)]">
              <button type="button" className="absolute right-[-5px] bottom-[-5px] btn btn-sm btn-icon btn-dark size-[30px]">
                <i className="fa fa-pen text-[14px]"></i>
              </button>
            </div>
          </div>

          <div className="p-[20px] pt-[50px] xl:p-[20px] bg-white">
            <div className="container mx-auto max-w-[600px]">
              <div className="text-[18px] font-bold mb-[5px]">Kushi Shroff</div>
              <div className="flex-col lg:flex-row flex gap-[10px] md:gap-[20px] [&_span]:flex [&_span]:gap-[10px] [&_span]:items-center [&_span>i]:text-gray-400 mb-3">
                <span><i className="fa fa-building-columns fa-fw"></i>Shri Ramdeobaba University</span>
                <span><i className="fa fa-calendar fa-fw"></i>Join 22 Aug 2024</span>
              </div>

              <hr className="border-gray-400 mb-4" />

              <div className="grid grid-cols-12 gap-[20px]">
                <div className="col-span-12 md:col-span-6 floating-label">
                  <input type="text" className="form-control" id="firstname" value={formData.firstname} onChange={handleChange} placeholder="" />
                  <label htmlFor="firstname">First Name</label>
                </div>

                <div className="col-span-12 md:col-span-6 floating-label">
                  <input type="text" className="form-control" id="lastname" value={formData.lastname} onChange={handleChange} placeholder="" />
                  <label htmlFor="lastname">Last Name</label>
                </div>

                <div className="col-span-12 md:col-span-6 floating-label">
                  <input type="email" className="form-control" id="email" value={formData.email} onChange={handleChange} placeholder="" />
                  <label htmlFor="email">Email</label>
                </div>

                <div className="col-span-12 md:col-span-6 floating-label">
                  <input type="tel" className="form-control" id="mobile" value={formData.mobile} onChange={handleChange} placeholder="" />
                  <label htmlFor="mobile">Mobile</label>
                </div>

                <div className="col-span-12 floating-label">
                  <select className="form-select" id="subject" value={formData.subject} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <label htmlFor="subject">Subject</label>
                </div>

                <div className="col-span-12 floating-label">
                  <input type="text" className="form-control" id="college" value={formData.college} onChange={handleChange} placeholder="" />
                  <label htmlFor="college">College</label>
                </div>
              </div>

              <hr className="border-gray-400 my-4" />

              <div className="flex justify-end gap-[10px]">
                <button type="button" className="btn btn-secondary">Cancel</button>
                <button type="submit" className="btn btn-primary">Save Details</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Profile;

import { Link, Outlet, useLocation } from "react-router"
function AuthLayout() {
    const location = useLocation();
    const getImage = ()=>{
        switch (location.pathname) {
         
        
            case "/register":
                return "/images/register.svg"
                break;

            case "/forgot-password":
                return "/images/forgot-password.svg"
                break;

                default: 
                return "/images/login.svg"
                break;
        
            
        }
    }
    return (
        <div className="bg-[#F7F7FA] min-h-screen grid grid-cols-12" data-aos="fade">
            <div className="bg-slate-100 col-span-12 lg:col-span-7 hidden md:flex flex-col items-center justify-center min-w-0 p-[20px] md:p-[40px]">
                <img src={getImage()} alt="logo" className="w-[600px] max-w-full" data-aos="zoom-out" />
            </div>
            <div className="bg-white col-span-12 lg:col-span-5 min-w-0 flex flex-col justify-center py-[40px] px-[20px] md:p-[40px]">
                <div className="md:w-[450px] max-w-full mx-auto">
                    <Link to="/"><img src="/images/logo.svg" className="h-[30px] max-w-full mb-[20px] md:mb-[60px]" data-aos="fade-up" /></Link>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
export default AuthLayout
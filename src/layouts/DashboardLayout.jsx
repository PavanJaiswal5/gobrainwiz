import { NavLink, Outlet, useNavigate } from "react-router"
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from "react"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import React from "react";
import data from "../ui/data";
const Recursive = ({ items, active }) => {
  const [openNodeId, setOpenNodeId] = useState(null);
  const handleToggle = (id) => {
    setOpenNodeId(prev => (prev === id ? null : id));
  };
  return (<ul className={`${active ? 'active' : ''}`}>
    {
      items.map((item, i) =>
        <li key={i} className={`${item.submenu && 'has-child'}`} >
          {
            item.submenu ?
              <a onClick={(e) => { e.preventDefault(); handleToggle(item.id) }} >
                {item.icon && <i className={`fa ${item.icon}`}></i>}
                <span>{item.label}</span>
                {item.badge && <div className="glare-effect">{item.badge}</div>}
              </a> :
              <NavLink to={item.to} className={({ isActive }) => isActive ? "active" : ''} onClick={(e) => { handleToggle(item.id) }} >
                {item.icon && <i className={`fa ${item.icon}`}></i>}
                <span>{item.label}</span>
              </NavLink>
          }
          {
            item.submenu && <Recursive items={item.submenu} active={openNodeId === item.id} />
          }
        </li>)
    }
  </ul>)
}
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <div ref={ref} onClick={(e) => onClick(e)}>
    {children}
  </div>
));
function DashboardLayout() {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(true)
  const logout = ()=>{
    MySwal.fire({
      html: `<div class="tw-font-bold">Are you sure you want to logout?</div>`,
      showCancelButton: true,
      confirmButtonText: "Yes",
      confirmButtonColor: "var(--primary)",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/login")
      }
    });
   }
  return (
    <>
      <div className="bg-[#F7F7FA] md:pl-[260px] pt-[60px] min-h-screen flex flex-col transition-all duration-300 ease-out [&:has([data-layout='sidebar'].open)]:pl-0">
        <div className={`fixed flex flex-col z-[999] left-0 top-[60px] bottom-0 bg-white w-[260px] transition-all duration-300 ease-out -translate-x-full [&.open]:-translate-x-0 [&.open]:shadow-2xl md:-translate-x-0 [&.open]:md:-translate-x-full [&.open]:md:shadow-none ${!sidebar && 'open'}`} data-layout="sidebar">
          <div className="flex-none flex items-center gap-[10px] p-[20px]">
            <div className="text-[18px] font-bold">Hi, Kushi Shroff</div>
          </div>
          <div className="
          overflow-y-auto
          flex-auto
          min-h-0
          [&_ul]:list-none
          [&_ul]:p-0
          [&_ul]:m-0
          [&_ul]:flex
          [&_ul]:flex-col
          [&_ul>li>a]:flex
          [&_ul>li>a]:gap-[5px]
          [&_ul>li>a]:text-black
          [&_ul>li>a]:h-[50px]
          [&_ul>li>a]:cursor-pointer
          [&_ul>li:hover>a]:bg-gray-100
          [&_ul>li>a]:relative
          [&_ul>li>a:before]:content-['']
          [&_ul>li>a:before]:absolute
          [&_ul>li>a:before]:left-0
          [&_ul>li>a:before]:top-0
          [&_ul>li>a:before]:w-[4px]
          [&_ul>li>a:before]:h-full
          [&_ul>li>a:before]:bg-primary
          [&_ul>li>a:before]:rounded-r-full
          [&_ul>li>a:before]:hidden

          [&_ul>li>a:after]:font-['Font_Awesome_6_Free']
          [&_ul>li>a:after]:content-['\f078']   
          [&_ul>li>a:after]:font-bold
          [&_ul>li>a:after]:hidden
          [&_ul>li.has-child>a:after]:block

          [&_ul>li>a]:no-underline
          [&_ul>li>a]:items-center
          [&_ul>li>a]:px-[20px]
          [&_ul>li>a]:!text-[#6F6F6F]
          [&_ul>li>a>i]:size-[24px]
          [&_ul>li>a>i]:flex
          [&_ul>li>a>i]:mr-[10px]
          [&_ul>li>a>i]:items-center
          [&_ul>li>a>i]:justify-center
          [&_ul>li>a>i]:text-[18px]
          [&_ul>li>a>span]:flex-auto
          [&_ul>li>a>span]:truncate
          [&_ul>li>a>div]:bg-red-400
          [&_ul>li>a>div]:text-white
          [&_ul>li>a>div]:text-[12px]
          [&_ul>li>a>div]:px-[6px]
          [&_ul>li>a>div]:rounded-full
          [&_ul>li>a[data-bs-toggle='collapse']:after]:content-['\f077']
          [&_ul>li>a.collapsed[data-bs-toggle='collapse']:after]:content-['\f078']
          [&_ul>li>a[data-bs-toggle='collapse']:after]:font-bold
          [&_ul>li>a[data-bs-toggle='collapse']:after]:font-['Font_Awesome_6_Free']
          [&_ul>li>ul]:hidden
          [&_ul>li>ul.active]:flex
          [&_ul>li>ul:has(li>a.active)]:flex
          [&_ul>li>ul]:pl-[39px]
          [&_ul>li>a.active]:!text-primary
          [&_ul>li>a.active:before]:!block"
            data-menu="group">
            <Recursive items={data.menu} />
          </div>
        </div>
        <div className="fixed left-0 top-0 right-0 h-[60px] bg-white flex items-center gap-[0px] z-[999]">
          <div className="flex-none flex items-center gap-[10px] px-[20px]">
            <button type="button" className="btn btn-dark btn-icon size-[30px] [&_i]:text-[16px]" onClick={() => setSidebar(value => !value)}><i className={`fa ${sidebar ? 'fa-bars' : 'fa-xmark'}`}></i></button>
            <img src="/images/logo.svg" className="flex-col max-w-full h-[35px] max-w-full" />
          </div>
          <div className="flex-none flex gap-[10px] items-center ml-auto px-[10px]">
            <button type="button" className="btn btn-light btn-icon"><i className="far fa-bell"></i></button>
            <Dropdown className="[&.dropdown-menu]:shadow-2xl [&.dropdown-menu]:border-gray-300 [&.dropdown-menu]:w-[250px] [&.dropdown-menu]:py-[10px] [&_.dropdown-item]:flex [&_.dropdown-item]:items-center [&_.dropdown-item]:h-[45px]">
              <Dropdown.Toggle as={CustomToggle}>
                <div className=" flex items-center gap-[5px] cursor-pointer">
                  <div className="size-[40px] bg-gray-300 rounded-full bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]" data-bs-toggle="dropdown"></div>
                  <i className="fa fa-chevron-down text-[12px] text-gray-400"></i>
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as="button" onClick={() => navigate("profile")}><i className="fa fa-user text-[20px] mr-[15px] text-gray-400"></i>Profile</Dropdown.Item>
                <Dropdown.Item as="button" onClick={() => navigate("change-password")}><i className="fa fa-cog text-[20px] mr-[15px] text-gray-400"></i>Change Password</Dropdown.Item>
                <Dropdown.Item as="button" onClick={logout}><i className="fa fa-power-off text-[20px] mr-[15px] text-gray-400"></i>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="flex-auto flex flex-col border-[0px] border-t border-l border-solid border-[#F1F1F2] p-[20px] md:p-[30px]">
          <Outlet />
        </div>
      </div>
    </>
  )
}
export default DashboardLayout
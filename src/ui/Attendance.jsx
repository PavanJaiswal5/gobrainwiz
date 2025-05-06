
function Attendance() {
    return (
        <>
            <nav aria-label="breadcrumb" className=" flex-none">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Attendance</li>
                </ol>
            </nav>
            <div className=" flex-auto  grid  grd-cols-1 md: grid-cols-2  gap-[20px] md: gap-[30px]">
                <div className=" flex  flex-col">
                    <div className=" shadow-md  bg-white  p-[20px]  rounded-[10px]  flex  flex-col  items-center  gap-[20px]">
                        <div className=" text-[30px]  font-bold  leading-tight">Show your <span className=" text-primary">QR code</span> to your college representative</div>
                        <div className=" shadow-md  bg-gray-100  p-[5px] md: py-[20px] md: px-[30px]  rounded-[10px]  flex  flex-col  items-center  justify-center  gap-[20px]">
                            <div className=" flex  flex-col  items-center  justify-center  gap-[5px]">
                                <div className=" size-[40px]  bg-gray-300  rounded-full  bg-cover  bg-center  bg-[url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]"></div>
                                <div className=" text-[20px]  font-bold">Kushi Shroff</div>
                            </div>
                            <img src="/images/qr.png" className=" w-[400px]  max-w-full  p-[10px]  bg-white  shadow  rounded-[5px]" />
                            <a className="btn btn-primary" href="#"><i className="fa fa-download"></i> Download</a>
                        </div>
                    </div>
                </div>
                <div className=" flex  flex-col  gap-[20px] md: gap-[30px]">
                    <div className=" shadow-md  bg-white  p-[20px]  rounded-[10px]">
                        <div className=" flex  items-center  flex-gap-[20px]  pb-[10px]  justify-between  border-[0px]  border-b  border-solid  border-[#F1F1F2]">
                            <div className=" text-[25px]  font-semibold">Your CRT Attendance</div>
                            <button type="button" className="btn btn-light btn-icon ! bg-gray-200 ! size-[50px]"><i className="fa fa-user-group  text-primary"></i></button>
                        </div>
                        <div className=" text-[60px]  font-bold  text-primary">92%</div>
                        <div className=" text-base">Note: Daily Attendance report will be sent to college</div>
                    </div>
                    <div className=" shadow-md  bg-white  p-[20px]  rounded-[10px]">
                        <div className=" flex  items-center  flex-gap-[20px]  pb-[10px]  justify-between  border-[0px]  border-b  border-solid  border-[#F1F1F2]">
                            <div className=" text-[25px]  font-semibold">Your JAVA Attendance</div>
                            <button type="button" className="btn btn-light btn-icon ! bg-gray-200 ! size-[50px]"><i className="fa fa-user-group  text-primary"></i></button>
                        </div>
                        <div className=" text-[60px]  font-bold  text-primary">88%</div>
                        <div className=" text-base">Note: Daily Attendance report will be sent to college</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Attendance
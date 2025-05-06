
function Certifications() {
  return (
    <>
      <div className="flex-auto grid grd-cols-1 md:grid-cols-2 -m-[20px md:-m-[30px]">
        <div className="flex flex-col border-[0px] border-r border-solid border-[#DADADA]">
          <div className="flex-none p-[20px] border-[0px] border-b border-solid border-[#DADADA]">
            <nav aria-label="breadcrumb" className="flex-none">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Certifications</li>
              </ol>
            </nav>
            <h3 className="text-[28px] font-bold text-primary m-0">Congratulations!</h3>
          </div>
          <div className="flex-auto flex flex-col items-center justify-center p-[20px]">
            <img src="/images/success.gif" className="w-[500px] max-w-full mix-blend-multiply -my-[50px] relative z-[1]" />
            <div className="text-[20px] font-normal text-center">We know it was hard but you have successfully <br />completed xxx days challenge.</div>
          </div>
        </div>
        <div className="flex flex-col p-[20px] flex flex-col items-center justify-center gap-[30px]">
          <img src="/images/certificate.png" className="w-[500px] max-w-full" />
          <a className="btn btn-primary" href="#"><i className="fa fa-download"></i> Download Your Certification</a>
        </div>
      </div>
      {/* <div className="flex-auto flex flex-col items-center justify-center gap-[10px]">
  <img src="/images/progress.png" className="w-[500px] max-w-full" />
  <div className="text-[16px] font-bold text-center">You are almost there to earn your certificate, <br />complete the course...</div>
</div> */}
    </>
  )
}
export default Certifications
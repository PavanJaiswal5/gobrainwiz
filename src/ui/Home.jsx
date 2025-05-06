import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import ProgressBar from 'react-bootstrap/ProgressBar';

const MySwal = withReactContent(Swal)
import data from "./data";
function Home() {
  const send = () => {
    MySwal.fire({
      html:"Thank you for your interest in <b>BRAINWIZ</b>. <br/>Our Team will contact your soon",
      icon: "success",
      confirmButtonColor: "var(--primary)",
      
    }) 
  }
  return (
    <>
      <section className="bg-gradient-to-b from-[#fff4f6] to-[#f6d5f7] flex flex-col justify-center px-[12px] py-[70px]">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-[80px] items-center">
            <div data-aos="zoom-in">
              <div className="w-[500px] max-w-full mx-auto lg:mx-0 bg-white/50 shadow-[0_0_12px_rgba(0,0,0,0.2)] p-[15px] md:p-[30px] rounded-[20px] flex flex-col gap-[8px]">
                <h1 className="text-[20px] md:text-[24px] font-medium">Like to know about CRT Course ?</h1>
                <div className="flex flex-col gap-[15px]">
                  <div className="floating-label">
                    <input type="text" className="form-control" id="name" placeholder=" " />
                    <label htmlFor="name">Write your name</label>
                  </div>
                  <div className="floating-label">
                    <input type="text" className="form-control" id="phone" placeholder=" " />
                    <label htmlFor="phone">Phone Number</label>
                  </div>
                  <div className="floating-label">
                    <input type="email" className="form-control" id="email" placeholder=" " />
                    <label htmlFor="email">Email address</label>
                  </div>
                  <div className="floating-label">
                    <textarea className="form-control h-[100px]" placeholder=" " id="query"  ></textarea>
                    <label htmlFor="query">Write Query</label>
                  </div>
                  <button type="button" className="btn btn-warning w-full" onClick={send}>Submit</button>
                </div>
              </div>
            </div>
            <div>
              <img className="block w-[500px] max-w-full mx-auto" data-aos="zoom-in" src="/images/kids-studying-from-home-animate.svg" />
              <h2 className="text-[32px] font-bold" data-aos="fade-up" data-aos-delay="300">Prepare yourself to get hired in the top tech companies easily</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="block bg-white px-[12px] py-[50px]">
        <div className="flex flex-col gap-[30px] max-w-[1280px] mx-auto">
          <div className="flex flex-col gap-[5px]">
            <h3 className="page-title-bw text-[25px] text-center font-bold m-0">Courses We Offered</h3>
            <p className="w-[500px] max-w-full mx-auto text-center opacity-60 m-0">Brainwiz includes everything that a candidate requires to progress from the level of a fresher to become a skillful employee. Catch a glimpse of what can make you employment-ready!</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[20px]">
            {
              data.courses.map((course, i) => <div key={i} className="bg-white flex flex-col rounded-[10px] overflow-hidden shadow-[0_0_5px_#cfcfcf] cursor-pointer transition-all duration-300 ease-out hover:scale-[1.05] hover:shadow-lg">
                <img src={`/images/${course.image}`} className="aspect-video object-cover" />
                <div className="p-[20px] flex flex-col gap-[10px]">
                  <div className="text-[18px] font-bold truncate">{course.title}</div>
                  <div className="opacity-60 line-clamp-2">{course.content}</div>
                  <div className="font-bold text-primary">₹{course.price}</div>
                  <a href="#" className="btn btn-primary btn-bw self-start">Learn More <i className="fa fa-angle-right"></i></a>
                </div>
              </div>)
            }
          </div>
        </div>
      </section>
      <section className="block px-[12px] py-[50px] bg-gradient-to-b from-white to-[#c7e2ff]">
        <div className="flex flex-col gap-[30px] max-w-[1280px] mx-auto">
          <div className="flex flex-col gap-[5px]">
            <h3 className="page-title-bw text-[25px] text-center font-bold m-0">Skill Up with our free content</h3>
            <p className="w-[500px] max-w-full mx-auto text-center opacity-60 m-0">Make a free ride to experience the richness!</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-[20px]">
            <div className="bg-white flex flex-col rounded-[10px] overflow-hidden shadow-[0_0_5px_#cfcfcf] cursor-pointer transition-all duration-300 ease-out hover:scale-[1.05] hover:shadow-lg">
              <img src="/images/article.svg" className="aspect-video object-contain max-w-full" />
              <div className="p-[20px] flex flex-col gap-[10px] text-center">
                <div className="text-[18px] font-bold truncate">Article</div>
                <div className="opacity-60 line-clamp-2">In grammar, an article is any member of a className of dedicated words that are used.</div>
              </div>
            </div>
            <div className="bg-white flex flex-col rounded-[10px] overflow-hidden shadow-[0_0_5px_#cfcfcf] cursor-pointer transition-all duration-300 ease-out hover:scale-[1.05] hover:shadow-lg">
              <img src="/images/tests.svg" className="aspect-video object-contain max-w-full" />
              <div className="p-[20px] flex flex-col gap-[10px] text-center">
                <div className="text-[18px] font-bold truncate">Tests</div>
                <div className="opacity-60 line-clamp-2">In grammar, an article is any member of a className of dedicated words that are used.</div>
              </div>
            </div>
            <div className="bg-white flex flex-col rounded-[10px] overflow-hidden shadow-[0_0_5px_#cfcfcf] cursor-pointer transition-all duration-300 ease-out hover:scale-[1.05] hover:shadow-lg">
              <img src="/images/videos.svg" className="aspect-video object-contain max-w-full" />
              <div className="p-[20px] flex flex-col gap-[10px] text-center">
                <div className="text-[18px] font-bold truncate">Videos</div>
                <div className="opacity-60 line-clamp-2">In grammar, an article is any member of a className of dedicated words that are used.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="block px-[12px] py-[50px] bg-white">
        <div className="flex flex-col gap-[30px] max-w-[1280px] mx-auto">
          <div className="flex flex-col gap-[5px]">
            <h3 className="page-title-bw text-[25px] text-center font-bold m-0">Get Ready for Placements with Us</h3>
            <p className="w-[800px] max-w-full mx-auto text-center opacity-60 m-0">Our Outstanding Training makes your gateway to various career opportunities</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 [&>div]:flex [&>div]:flex-col [&>div]:gap-[20px] [&>div]:items-center [&>div]:px-[12px] [&>div]:py-[40px] [&_svg]:size-[80px] [&>div>div]:w-[150px] [&>div>div]:text-center">
            <div className="flex flex-col bg-amber-100">
              <svg><use href="#icon-uniE913"></use></svg>
              <div>Interactive Live Online Sessions</div>
            </div>
            <div className="flex flex-col bg-blue-100">
              <svg><use href="#icon-uniE912"></use></svg>
              <div>Hands-on Learning Experience</div>
            </div>
            <div className="flex flex-col bg-green-100">
              <svg><use href="#icon-uniE911"></use></svg>
              <div>Certificate of Completion</div>
            </div>
            <div className="flex flex-col bg-red-100">
              <svg><use href="#icon-uniE910"></use></svg>
              <div>Highly Affordable and Resourceful</div>
            </div>
          </div>
        </div>
      </section>
      <section className="block px-[12px] py-[50px] bg-white">
        <div className="flex flex-col gap-[30px] max-w-[1280px] mx-auto">
          <div className="flex flex-col gap-[5px]">
            <h3 className="page-title-bw text-[25px] text-center font-bold m-0">BRAINWIZ Instructor</h3>
            <p className="w-[800px] max-w-full mx-auto text-center opacity-60 m-0">Watch our Online Sessions to know about Us</p>
          </div>
          <div className="grid grid-cols-12 gap-[20px] [&_img]:w-full [&_img]:object-cover [&_img]:border [&_img]:border-solid [&_img]:border-gray-300  [&_img:hover]:border-blue-300 [&_.swiper-videos_img]:aspect-[16/9] [&_.swiper-video_img]:aspect-[16/9] md:[&_.swiper-video_img]:aspect-[16/6]">
            <div className="col-span-12 swiper-video">
              <a href="https://youtu.be/bJSu7faNda4" target="_blank"><img src="https://img.youtube.com/vi/bJSu7faNda4/maxresdefault.jpg" /></a>
            </div>
            <div className="col-span-12">
              <Swiper modules={[Autoplay]} loop={true} autoplay={true} slidesPerView={1} spaceBetween={20} breakpoints={{ 640: { slidesPerView: 2 }, 768: { slidesPerView: 3 }, 1024: { slidesPerView: 4 } }} className='swiper-videos pb-[30px]'>
                <SwiperSlide><a href="https://youtu.be/MxRiAL0GlCM" target="_blank"><img src="https://img.youtube.com/vi/MxRiAL0GlCM/maxresdefault.jpg" /></a></SwiperSlide>
                <SwiperSlide><a href="https://youtu.be/uUG_m7_kUhQ" target="_blank"><img src="https://img.youtube.com/vi/uUG_m7_kUhQ/maxresdefault.jpg" /></a></SwiperSlide>
                <SwiperSlide><a href="https://youtu.be/kKQjMpIAbYo" target="_blank"><img src="https://img.youtube.com/vi/kKQjMpIAbYo/maxresdefault.jpg" /></a></SwiperSlide>
                <SwiperSlide><a href="https://youtu.be/bJSu7faNda4" target="_blank"><img src="https://img.youtube.com/vi/bJSu7faNda4/maxresdefault.jpg" /></a></SwiperSlide>
                <SwiperSlide><a href="https://youtu.be/MxRiAL0GlCM" target="_blank"><img src="https://img.youtube.com/vi/MxRiAL0GlCM/maxresdefault.jpg" /></a></SwiperSlide>
                <SwiperSlide><a href="https://youtu.be/uUG_m7_kUhQ" target="_blank"><img src="https://img.youtube.com/vi/uUG_m7_kUhQ/maxresdefault.jpg" /></a></SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="flex justify-center">
            <a href="#" className="btn btn-primary btn-bw self-start">Learn More <i className="fa fa-angle-right"></i></a>
          </div>
        </div>
      </section>
      <section className="block p-[3px]">
        <Swiper modules={[Autoplay, FreeMode]} loop={true} slidesPerView={"auto"} spaceBetween={3} autoplay={{ delay: 0, disableOnInteraction: false }} speed={5000} freeMode={true} allowTouchMove={false} className="swiper-gallery [&_img]:w-full [&_img]:h-full [&_img]:object-cover]">
          <SwiperSlide className="swiper-slide w-[300px] h-[500px]"><img src="/images/gallery01.webp" alt="" /></SwiperSlide>
          <SwiperSlide className="swiper-slide w-[300px] h-[500px]"><img src="/images/gallery02.webp" alt="" /></SwiperSlide>
          <SwiperSlide className="swiper-slide w-[600px] h-[500px] grid gap-[3px] [&>img:nth-child(1)]:col-start-1 [&>img:nth-child(1)]:col-end-3 [&>img:nth-child(1)]:row-start-1 [&>img:nth-child(1)]:row-end-2 [&>img:nth-child(2)]:col-start-1 [&>img:nth-child(2)]:col-end-2 [&>img:nth-child(2)]:row-start-2 [&>img:nth-child(2)]:row-end-3 [&>img:nth-child(3)]:col-start-2 [&>img:nth-child(3)]:col-end-3 [&>img:nth-child(3)]:row-start-2 [&>img:nth-child(3)]:row-end-3">
            <img src="/images/gallery03.webp" alt="" />
            <img src="/images/gallery04.webp" alt="" />
            <img src="/images/gallery05.webp" alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide w-[300px] h-[500px]"><img src="/images/gallery06.webp" alt="" /></SwiperSlide>
          <SwiperSlide className="swiper-slide w-[300px] h-[500px]"><img src="/images/gallery07.webp" alt="" /></SwiperSlide>
          <SwiperSlide className="swiper-slide w-[300px] h-[500px]"><img src="/images/gallery08.webp" alt="" /></SwiperSlide>
          <SwiperSlide className="swiper-slide w-[300px] h-[500px]"><img src="/images/gallery01.webp" alt="" /></SwiperSlide>
          <SwiperSlide className="swiper-slide w-[300px] h-[500px]"><img src="/images/gallery02.webp" alt="" /></SwiperSlide>
          <SwiperSlide className="swiper-slide w-[600px] h-[500px] grid gap-[3px] [&>img:nth-child(1)]:col-start-1 [&>img:nth-child(1)]:col-end-3 [&>img:nth-child(1)]:row-start-1 [&>img:nth-child(1)]:row-end-2 [&>img:nth-child(2)]:col-start-1 [&>img:nth-child(2)]:col-end-2 [&>img:nth-child(2)]:row-start-2 [&>img:nth-child(2)]:row-end-3 [&>img:nth-child(3)]:col-start-2 [&>img:nth-child(3)]:col-end-3 [&>img:nth-child(3)]:row-start-2 [&>img:nth-child(3)]:row-end-3">
            <img src="/images/gallery03.webp" alt="" />
            <img src="/images/gallery04.webp" alt="" />
            <img src="/images/gallery05.webp" alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide w-[300px] h-[500px]"><img src="/images/gallery06.webp" alt="" /></SwiperSlide>
          <SwiperSlide className="swiper-slide w-[300px] h-[500px]"><img src="/images/gallery07.webp" alt="" /></SwiperSlide>
          <SwiperSlide className="swiper-slide w-[300px] h-[500px]"><img src="/images/gallery08.webp" alt="" /></SwiperSlide>
        </Swiper>
      </section>
      <section className="block bg-[url(/images/trackrecord-bg.jpg)] bg-cover bg-center">
        <div className="px-[12px] py-[50px] bg-gradient-to-r from-[#432371]/90 to-[#faae7b]/90 text-white">
          <div className="flex flex-col gap-[30px] max-w-[1280px] mx-auto">
            <div className="flex flex-col gap-[5px]">
              <h3 className="page-title-bw text-[25px] text-center font-bold m-0">Our Track Record</h3>
              <p className="w-[800px] max-w-full mx-auto text-center opacity-60 m-0">BRAINWIZ has trained more than 50k students and helping them to get placed in top tech companies. Our Expert Trainers provide from basic to Advance level of knowledge that makes students standout in their campus placements.</p>
            </div>
            <div className="grid grid-cols-3 [&_h5]:text-[20px] lg:[&_h5]:text-[80px] [&_h5]:m-0 [&_p]:m-0 [&_h5]:font-bold [&_p]:text-[20px] text-center">
              <div className="flex flex-col">
                <h5>50K</h5>
                <p>Active Learners</p>
              </div>
              <div className="flex flex-col">
                <h5>20+</h5>
                <p>Happy Institutions</p>
              </div>
              <div className="flex flex-col">
                <h5>90%</h5>
                <p>Placed Students</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="block px-[12px] py-[50px] bg-white">
        <div className="flex flex-col gap-[30px] max-w-[1280px] mx-auto">
          <div className="flex flex-col gap-[5px]">
            <h3 className="page-title-bw text-[25px] text-center font-bold m-0">Our Students Success Stories</h3>
          </div>
          <div className="-mt-[10px] -mb-[30px]">
            <div className="-mx-[10px]">
              <Swiper modules={[Autoplay, FreeMode]} loop={true} slidesPerView={1} spaceBetween={0} autoplay={true} breakpoints={{ 640: { slidesPerView: 2 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }} className="swiper swiper-stories w-full">
                {[1, 2, 3, 4, 5, 6].map((item, i) =>
                  <SwiperSlide key={i} className="swiper-slide p-[10px] pb-[30px]">
                    <div className="bg-white flex flex-col text-center rounded-[10px] items-center p-[20px] overflow-hidden shadow-[0_0_10px] shadow-black/10">
                      <div>
                        <img src="/images/kamalakar.jpg" className="size-[75px] rounded-full" />
                      </div>
                      <div className="mb-[10px] mt-[5px]">Placed in TCS</div>
                      <div className="mb-[10px]">I learned CRT training from Brainwiz. Excellent CRT training Institute I suggest who are studying 3rd & 4th b.tech join first for CRT that will help you more in written test. Thankyou Brainwiz& pavan jaiswal sir</div>
                      <div className="font-bold">Kamalakar</div>
                    </div>
                  </SwiperSlide>)}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section className="hidden lg:block px-[12px] py-[50px] text-white bg-gradient-to-b from-[#0d3b3c]/90 to-[#001f64]">
        <div className="flex flex-col gap-[30px] max-w-[1280px] mx-auto">
          <div className="flex flex-col gap-[5px]">
            <h3 className="text-[25px] text-center font-bold m-0">The BRAINWIZ advantages</h3>
          </div>
          <table className="[&_i]:text-[20px] [&_i.fa-circle-check]:text-transparent [&_i.fa-circle-check]:bg-clip-text [&_i.fa-circle-check]:bg-gradient-to-t [&_i.fa-circle-check]:from-amber-500 [&_i.fa-circle-check]:to-yellow-100 [&_tr:nth-child(even)]:bg-black/20 [&_td]:p-[20px] [&_tr>td:not(:first-child)]:text-center">
            <thead>
              <tr>
                <td></td>
                <td>Brainwiz</td>
                <td>Free Resources</td>
                <td>Other Courses</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Structured + program solving based</td>
                <td><i className="fa fa-circle-check"></i></td>
                <td><i className="fa fa-xmark"></i></td>
                <td><i className="fa fa-xmark"></i></td>
              </tr>
              <tr>
                <td>Fastest 1:1 doubt support</td>
                <td><i className="fa fa-circle-check"></i></td>
                <td><i className="fa fa-xmark"></i></td>
                <td><i className="fa fa-check"></i></td>
              </tr>
              <tr>
                <td>Expert Faculty</td>
                <td><i className="fa fa-circle-check"></i></td>
                <td><i className="fa fa-xmark"></i></td>
                <td><i className="fa fa-xmark"></i></td>
              </tr>
              <tr>
                <td>Test Series with Integrated Learning Platform</td>
                <td><i className="fa fa-circle-check"></i></td>
                <td><i className="fa fa-check"></i></td>
                <td><i className="fa fa-check"></i></td>
              </tr>
            </tbody>
          </table>
          <div className="flex flex-col gap-[5px]">
            <div className="flex justify-between">
              <div>Brainwiz</div>
              <div>Your dream role, faster and with confidence!</div>
            </div>
            <ProgressBar now={100} className='h-[8px]' />
          </div>
          <div className="flex flex-col gap-[5px]">
            <div className="flex justify-between">
              <div>Others</div>
              <div>Average role, under-cofident</div>
            </div>
            <ProgressBar now={50} className='h-[8px]' />
          </div>
          <div className="text-center">
            <a href="#" className="btn btn-primary btn-bw self-start mb-[20px]">Explore Courses <i className="fa fa-angle-right"></i></a>
            <h4 className="text-[24px] font-bold">Trusted by learners</h4>
            <p>50,000+ BRAINWIZ Students working in top Tech companies</p>
            <div className="flex justify-center gap-[40px] mt-[30px]">
              <div className="flex items-center gap-[10px] text-left">
                <img src="/images/fb-icon2.png" className="size-[30px]" />
                <div>
                  <strong className="text-[18px] font-bold">4.5 </strong>
                  <div>354+ reviews</div>
                </div>
              </div>
              <div className="flex items-center gap-[10px] text-left">
                <img src="/images/gl-icon.png" className="size-[30px]" />
                <div>
                  <strong className="text-[18px] font-bold">4.8</strong>
                  <div>385+ reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </>
  )
}
export default Home
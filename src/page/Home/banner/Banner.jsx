import p_img from "../../../assets/My project.png";
import RusemeButton from "../../../component/RusemeButton";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
/* eslint-disable react/no-unescaped-entities */
const Banner = () => {
  return (
   <section id="banner">
    <div className="lg:flex justify-between items-center">
      <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="px-4 lg:ml-3">
        <div className="font-bold pt-8">
          <p className="text-2xl lg:text-3xl text-black">
            HI, <span className="text-orange-500">I'm</span>
          </p>
          <h2 className="text-5xl lg:text-8xl text-slate-800 font-bold py-5">
            Saiful Islam
          </h2>
          <h1 className="text-2xl lg:text-3xl py-8">I,m Web Developer</h1>
          {/* <p className="lg:w-96 py-6">
          Dedicated programmer eager to explore new challenges and opportunities in the tech world
          </p> */}
          <RusemeButton/>
        </div>
      </div>
      <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" className="lg:w-6/12 w-full">
        <div className="lg:right-32 lg:top-32 right-28 bottom-56 p-4 shadow-sm bg-orange-500 w-44 h-44 lg:w-96 lg:h-96 rounded-full absolute z-0"></div>
        <img className="rounded-b-full relative z-10" src={p_img} alt="" />
      </div>
    </div>
   </section> 
  );
};   

export default Banner;

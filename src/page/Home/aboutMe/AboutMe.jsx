/* eslint-disable react/no-unescaped-entities */
import RusemeButton from "../../../component/RusemeButton";
import img from "./../../../assets/My project-1.png";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const AboutMe = () => {
  return (
    <section className="py-8">
      <div className="grid lg:grid-cols-2">
        <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="w-3/5 mx-auto">
          <img className="rounded-xl" src={img} alt="" />
        </div>
        <div data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
          <h1 className="text-2xl font-bold italic underline pt-3 pb-3">About <span className="text-rose-500">Me</span></h1>
          <p className="lg:w-4/5 font-semibold text-slate-700 pb-4">Hello! I'm Saiful Islam, a programmer with a strong expertise in Front-End Web Development. I completed my studies in Computer Science & Engineering at Faridpur Polytechnic Institute. I'm passionate about technology and enjoy writing blogs about programming and web development. Currently, I'm delving into MERN (MongoDB, ExpressJS, ReactJS, NodeJS) stack web development, while also expanding my knowledge by learning PostgreSQL and Prisma.</p>
          <button className="btn btn-outline btn-error rounded-3xl">CONTACT ME</button>
          <RusemeButton/>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

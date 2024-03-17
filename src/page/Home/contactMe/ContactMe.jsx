import { FaLocationDot, FaMobileScreen, FaEnvelope } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const ContactMe = () => {
  return (
    <section id="contact" className="py-8">
      <div className="text-center pb-6">
        <h2 className="text-3xl font-bold italic underline tracking-widest py-4">CONTACT ME</h2>
        {/* <h1 className="font-medium">LET’S Talk About Ideas</h1> */}
      </div>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse lg:gap-10">
          <div
            data-aos="fade-right"
            className="flex flex-col space-y-12 font-semibold"
          >
            <div className="flex items-center gap-3">
              <div className="bg-orange-200 p-4 rounded-md">
                <FaLocationDot className="text-2xl text-orange-500" />
              </div>
              <div>
                <h3>Address</h3>
                <p>
                  Village / Road Bhajandanga, Post office: <br /> Faridpur- 7800,
                  Faridpur Bangladesh
                </p>
              </div>
            </div>
            <div className="flex items-center  gap-3">
              <div className="bg-orange-200 p-4 rounded-md">
                <FaMobileScreen className="text-2xl text-orange-500" />
              </div>
              <div>
                <h3>Phone</h3>
                <p>+8801902486366</p>
              </div>
            </div>
            <div className="flex items-center  gap-3">
              <div className="bg-orange-200 p-4 rounded-md">
                <FaEnvelope className="text-2xl text-orange-500" />
              </div>
              <div>
                <h3>Email</h3>
                <p>safiulislamx264@gmail.com</p>
              </div>
            </div>
          </div>
          <div data-aos="fade-left">
            <div className=" lg:flex lg:gap-4">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold uppercase">
                    Full Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-full max-w-lg"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">
                    YOUR EMAIL ADDRESS
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="EMAIL ADDRESS"
                  className="input input-bordered w-full max-w-lg"
                />
              </div>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">YOUR SUBJECT</span>
              </label>
              <input
                type="text"
                placeholder="YOUR SUBJECT"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text font-bold">YOUR MESSAGE</span>
              </label>
              <textarea
                type="text"
                className="input input-bordered w-full"
                placeholder="MESSAGE"
              />
            </div>
            <button className="btn btn-outline rounded-3xl mt-3 btn-error">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;

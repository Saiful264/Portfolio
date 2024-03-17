/* eslint-disable react/no-unescaped-entities */
// import HeartButton from '../Button/HeartButton'
import project_1 from "../../../assets/project1.png";
import project_2 from "../../../assets/projcet2.png";
import project_3 from "../../../assets/projcet3.png";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Portfolio = () => {
  return (
    <div data-aos="fade-up"
    data-aos-anchor-placement="center-bottom" className="pt-8">
      <div className="text-center pb-2">
        <h2 className="font-bold text-3xl italic underline">My Work & Projects</h2>
        {/* <p className="lg:w-96 mx-auto text-lg font-semibold py-4">
          Obviously I'm a Web Designer.Experienced with all stages of the
          development.
        </p> */}
      </div>
      <div className="grid lg:grid-cols-3">
        <div className="col-span-1 cursor-pointer p-2 bg-white mx-auto rounded-xl group">
          <div className="flex flex-col gap-2 lg:w-96">
            <div
              className="
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          ">
              <img
                className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
                src={project_2}
                alt="Room"
              />
              <div
                className="absolute
            top-3
            right-3">
              </div>
            </div>
            <div className="font-semibold text-lg p-2">CHEF'S RECIPE</div>
            <div className="font-light text-neutral-500 p-2">
            This project about all the defirent type of cuisine in world. Show case all those chef make it and share it.
            </div>
            <div className="flex flex-row justify-between p-2 gap-1">
              <a href="https://github.com/Saiful264/chef-recipe-hunter-client-side">
                Github Link
              </a>
              <a href="https://splendid-meerkat-8eba7c.netlify.app/">Live Link</a>
            </div>
          </div>
        </div>

        <div className="col-span-1 cursor-pointer p-2 bg-white mx-auto rounded-xl group">
          <div className="flex flex-col gap-2 w-96">
            <div
              className="
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          "
            >
              <img
                className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
                src={project_3}
                alt="Room"
              />
              <div
                className="
            absolute
            top-3
            right-3
          "
              >
              </div>
            </div>
            <div className="font-semibold text-lg p-2">Toy Marketplace</div>
            <div className="font-light text-neutral-500 p-2">
            My project about the kid learn by playing. Now parents are going to not about playin kid they also learning.
            </div>
            <div className="flex flex-row justify-between p-2 gap-1">
              <a href="https://github.com/Saiful264/Toy_Marketplace_Client_Side">
                Github Link
              </a>
              <a href="https://toy-marketplace-5f4cf.web.app/">Live Link</a>
            </div>
          </div>
        </div>

        <div className="col-span-1 cursor-pointer p-2 bg-white mx-auto rounded-xl group">
          <div className="flex flex-col gap-2 w-96">
            <div
              className="
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          "
            >
              <img
                className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
                src={project_1}
                alt="Room"
              />
              <div
                className="
            absolute
            top-3
            right-3
          "
              >
              </div>
            </div>
            <div className="font-semibold text-lg p-2">Summer sports</div>
            <div className="font-light text-neutral-500 p-2">
            This site hase all kind user bashbor like: studernt dashboard, admin dashboard and instuction dashboard.
            </div>
            <div className="flex flex-row justify-between p-2 gap-1">
              <a href="https://github.com/Saiful264/summer-camp-client-side">
                Github Link
              </a>
              <a href="https://summer-camp-608a5.web.app/">Live Link</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

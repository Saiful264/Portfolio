import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Skills = () => {
  return (
    <div data-aos="zoom-in-up" className="py-8">
      <div>
        <h2 className="text-4xl italic underline text-center font-bold py-9">
          PROFESSIONAL SKILLS
        </h2>
      </div>
      <div className="lg:flex justify-evenly">
        <div>
          <div className="lg:w-[500px] w-full">
            <div className="flex justify-between font-bold">
              <span>HTML</span>
              <span>85%</span>
            </div>
            <progress
              className="progress progress-error w-full"
              value="85"
              max="100"
            ></progress>
          </div>
          <div className="lg:w-[500px] w-full">
            <div className="flex justify-between font-bold">
              <span>JavaScript</span>
              <span>75%</span>
            </div>
            <progress
              className="progress progress-error w-full"
              value="75"
              max="100"
            ></progress>
          </div>
          <div className="lg:w-[500px] w-full">
            <div className="flex justify-between font-bold">
              <span>React</span>
              <span>70%</span>
            </div>
            <progress
              className="progress progress-error w-full"
              value="70"
              max="100"
            ></progress>
          </div>
          <div className="lg:w-[500px] w-full">
            <div className="flex justify-between font-bold">
              <span>espress js</span>
              <span>70%</span>
            </div>
            <progress
              className="progress progress-error w-full"
              value="70"
              max="100"
            ></progress>
          </div>
        </div>
        <div>
          <div className="lg:w-[500px] w-full">
            <div className="flex justify-between font-bold">
              <span>CSS</span>
              <span>85%</span>
            </div>
            <progress
              className="progress progress-error w-full"
              value="85"
              max="100"
            ></progress>
          </div>
          
          <div className="lg:w-[500px] w-full">
            <div className="flex justify-between font-bold">
              <span>Tailwind</span>
              <span>70%</span>
            </div>
            <progress
              className="progress progress-error w-full"
              value="70"
              max="100"
            ></progress>
          </div>
          <div className="lg:w-[500px] w-full">
            <div className="flex justify-between font-bold">
              <span>Bootstrap</span>
              <span>80%</span>
            </div>
            <progress
              className="progress progress-error w-full"
              value="80"
              max="100"
            ></progress>
          </div>
          <div className="lg:w-[500px] w-full">
            <div className="flex justify-between font-bold">
              <span>MongoDB</span>
              <span>50%</span>
            </div>
            <progress
              className="progress progress-error w-full"
              value="50"
              max="100"
            ></progress>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;

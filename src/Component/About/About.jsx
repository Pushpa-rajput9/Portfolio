import mysql from "./1012821_code_development_logo_mysql_icon.png";
import resume from "../Home/assets/Pushpa Rajput.pdf";
function About() {
  return (
    <div className=" bg-gray-200">
      <div className="flex w-full justify-center items-center    ">
        <button className=" w-60 h-16 border-b-4 relative bottom-20 border-r-2 font-bold border-slate-950 rounded-3xl text-xl bg-amber-500 shadow-2xl shadow-black ">
          About Me
        </button>
      </div>
      <div className=" mainContainer w-full flex  justify-center items-center">
        <div className="w-3/4 max-sm:w-full max-sm:p-2">
          <h1 className=" lg:text-4xl pb-5  underline font-bold text-blue-500 max-sm:text-2xl ">
            A bit about me
          </h1>
          <div className="w-full flex justify-center items-center pl-8 pr-8 max-sm:p-2">
            <p className="lg:text-xl lg:pl-8 lg:pr-8  decoration-from-font text-gray-700 text-justify   max-sm:text-[18px]">
              A BCA graduate, thrive to work on Web Development and its advanced
              solutions, while applying technical and functional knowledge in
              the process. Looking out for ground-breaking success in leading
              full spectrum of Web Development. Demonstrate high logical and
              application skills and maintaining positive relationships with
              colleagues, clients as well as corporate partners. I take into
              consideration the user experience while writing reusable and
              efficient code. I passionately combine good design, technology,
              and innovation in all my projects, which I like to accompany from
              the first idea to release.Currently, I am focused on the backend
              development.
            </p>
          </div>
          <h4 className="mt-12 lg:text-4xl font-bold text-blue-500 underline max-sm:text-2xl">
            Technologies and Tools
          </h4>
          <p className="mt-4 lg:text-xl text-justify text-gray-700 max-sm:text-[18px]">
            Using a combination of cutting-edge technologies and reliable
            open-source software I build user-focused, performant apps and
            websites for smartphones, tablets, and desktops.
          </p>

          <div className="mt-8 flex flex-wrap max-sm:gap-2 justify-between lg:pb-0 max-sm:pb-10 ">
            <div className="c py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 max-sm:m-0 max-sm:p-0 max-sm:w-36 rounded-lg transform-none opacity-100 flex items-center hover:scale-125 cursor-pointer md:w-48 w-40">
              <img
                alt=""
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-plain.svg"
                className="w-12"
              />
              <h4 className="text-md max-sm:text-sm ml-4">C Language</h4>
            </div>
            <div className="nodejs py-2 px-4 bg-gray-50  max-sm:m-0 max-sm:p-0 max-sm:w-36 md:m-4 mx-2 mt-6 rounded-lg transform-none opacity-100 flex items-center hover:scale-125 cursor-pointer md:w-48 w-40">
              <img
                alt=""
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                className="w-12"
              />
              <h4 className="text-md max-sm:text-sm ml-4">NodeJS</h4>
            </div>
            <div className="ReactNative py-2 px-4  max-sm:m-0 max-sm:p-0 max-sm:w-36 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg transform-none opacity-100 flex items-center hover:scale-125 cursor-pointer md:w-48 w-40">
              <img
                alt=""
                src="https://pagepro.co/blog/wp-content/uploads/2020/03/react-native-logo-884x1024.png"
                className="w-12"
              ></img>
              <h4 className="text-md max-sm:text-sm ml-4">React Native</h4>
            </div>
            <div className="html py-2 px-4 bg-gray-50  max-sm:m-0 max-sm:p-0 max-sm:w-36 md:m-4 mx-2 mt-6 rounded-lg transform-none opacity-100 flex items-center hover:scale-125 cursor-pointer md:w-48 w-40">
              <img
                alt=""
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                className="w-12"
              ></img>
              <h4 className="text-md max-sm:text-sm ml-4">HTML5</h4>
            </div>
            <div className="css py-2 px-4 bg-gray-50  max-sm:m-0 max-sm:p-0 max-sm:w-36 md:m-4 mx-2 mt-6 rounded-lg transform-none opacity-100 flex items-center hover:scale-125 cursor-pointer md:w-48 w-40">
              <img
                alt=""
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
                className="w-12"
              />
              <h4 className="text-md max-sm:text-sm ml-4">CSS</h4>
            </div>
            <div className="bootstrap py-2 px-4 bg-gray-50  max-sm:m-0 max-sm:p-0 max-sm:w-36 md:m-4 mx-2 mt-6 rounded-lg transform-none opacity-100 flex items-center hover:scale-125 cursor-pointer md:w-48 w-40">
              <img
                alt=""
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"
                className="w-12"
              />
              <h4 className="text-md max-sm:text-sm ml-4">Bootstrap</h4>
            </div>
            <div className="redux py-2 px-4 bg-gray-50  max-sm:m-0 max-sm:p-0 max-sm:w-36 md:m-4 mx-2 mt-6 rounded-lg transform-none opacity-100 flex items-center hover:scale-125 cursor-pointer md:w-48 w-40">
              <img
                alt=""
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                className="w-12"
              />
              <h4 className="text-md max-sm:text-sm ml-4">Redux</h4>
            </div>
            <div className="js py-2 px-4 bg-gray-50  max-sm:m-0 max-sm:p-0 max-sm:w-36 md:m-4 mx-2 mt-6 rounded-lg transform-none opacity-100 flex items-center hover:scale-125 cursor-pointer md:w-48 w-40">
              <img
                alt=""
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                className="w-12"
              />
              <h4 className="text-md max-sm:text-sm ml-4">Javascript</h4>
            </div>
            <div className="Tailwind py-2 px-4 bg-gray-50  max-sm:m-0 max-sm:p-0 max-sm:w-36 md:m-4 mx-2 mt-6 rounded-lg transform-none opacity-100 flex items-center hover:scale-125 cursor-pointer md:w-48 w-40">
              <img
                alt=""
                src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                className="w-12"
              />
              <h4 className="text-md max-sm:text-sm ml-4">Tailwind CSS</h4>
            </div>
            <div className="React py-2 px-4 bg-gray-50  max-sm:m-0 max-sm:p-0 max-sm:w-36 md:m-4 mx-2 mt-6 rounded-lg transform-none opacity-100 flex items-center hover:scale-125 cursor-pointer md:w-48 w-40">
              <img
                alt=""
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                className="w-12"
              />
              <h4 className="text-md max-sm:text-sm ml-4">React</h4>
            </div>
            <div className="mysql py-2 px-4 bg-gray-50  max-sm:m-0 max-sm:p-0 max-sm:w-36 md:m-4 mx-2 mt-6 rounded-lg transform-none opacity-100 flex items-center hover:scale-125 cursor-pointer md:w-48 w-40">
              <img alt="" src={mysql} className="w-12" />
              <h4 className="text-md max-sm:text-sm ml-4">MYSQL</h4>
            </div>
            <div className="mysql py-2 px-4 bg-gray-50  max-sm:m-0 max-sm:p-0 max-sm:w-36 md:m-4 mx-2 mt-6 rounded-lg transform-none opacity-100 flex items-center hover:scale-125 cursor-pointer md:w-48 w-40">
              <img
                alt=""
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg"
                className="w-12"
              />
              <h4 className="text-md max-sm:text-sm ml-4">Git</h4>
            </div>
          </div>
          {/* <div className=" w-60 h-14 rounded-3xl flex justify-center items-center border-4 border-slate-700 shadow-inner shadow-black m-8 bg-slate-300">
            <a href={resume} target="_blank" download={resume}>
              Resume
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default About;

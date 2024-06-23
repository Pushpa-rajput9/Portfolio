import image1 from "./assets/img.gif";
import resume from "./assets/Pushpa Rajput.pdf";
//import resume1 from "./assets/Pushpa-1-1.docx";
function Home() {
  return (
    <div className="  mt-[95px]">
      <img src={image1} className=" w-full h-[550px]"></img>
      <div className=" w-full  relative bottom-40  z-10 pl-14 ">
        <a
          href={resume}
          target="_blank"
          className="flex justify-center items-center w-60 h-16 border-b-4 border-r-2 font-bold border-slate-950 rounded-3xl text-xl bg-white shadow-2xl shadow-black "
        >
          Resume
        </a>
      </div>
    </div>
  );
}

export default Home;

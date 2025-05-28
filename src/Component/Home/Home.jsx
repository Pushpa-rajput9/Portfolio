import { About, Contact, Projects } from "../Index";
import "primereact/resources/themes/lara-light-blue/theme.css"; // or any other theme
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
//import "primeflex/primeflex.css"; // optional for layout
import { Carousel } from "primereact/carousel";
import hackerthonCertificate from "./assets/1719384385160.jpg";
import sql from "./assets/Screenshot 2025-05-28 123133.png";
import pw from "./assets/Screenshot 2025-05-28 122904.png";
import internship from "./assets/Screenshot 2025-05-27 003529.png";

const products = [
  {
    id: "1",
    name: "Internship Certificate",
    image: internship,
  },
  {
    id: "2",
    name: "Full Stack Web Development Certificate",
    image: pw,
  },
  {
    id: "3",
    name: "Hackathon Winner Certificate",
    image: hackerthonCertificate,
  },
  {
    id: "4",
    name: "SQL Certificate ",
    image: sql,
  },
  {
    id: "5",
    name: "Internship Certificate",
    image: internship,
  },
  {
    id: "6",
    name: "Full Stack Web Development Certificate",
    image: pw,
  },
];

const ProductTemplate = (product) => {
  return (
    <div className="border-2 surface-border bg-white mt-5 rounded m-2 text-center py-5 px-3">
      <img
        src={product.image}
        alt={product.name}
        className=" w-96 h-72 max-sm:h-64 max-[324px]:w-72 shadow-2 mb-3"
      />
      <div className="text-xl font-bold flex justify-center  max-md:text-sm">
        {product.name}
      </div>
    </div>
  );
};

function Home() {
  const responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "768px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "560px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  return (
    <div className=" bg-gray-200">
      <div>
        <div className="flex w-full flex-col justify-center items-center    ">
          <button className=" w-60 max-md:w-52 h-12 max-md:text-lg  border-b-4 relative bottom-20 border-r-2 font-bold border-slate-950 rounded-3xl text-xl bg-amber-500 shadow-2xl shadow-black ">
            My Achievements
          </button>
          <div className="mb-32 w-11/12 bg-teal-800 rounded-xl p-6 max-md:w-full max-sm:p-0 max-md:rounded-none overflow-hidden">
            <div className="card ">
              <Carousel
                value={products}
                itemTemplate={ProductTemplate}
                numVisible={3}
                numScroll={1}
                autoplayInterval={3000}
                responsiveOptions={responsiveOptions}
              />
            </div>
          </div>
        </div>
      </div>
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;

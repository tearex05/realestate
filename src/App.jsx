import {useState, useEffect} from "react";
import pic1 from "./assets/pic1.jpg";
import pic2 from "./assets/pic2.jpg";
import pic3 from "./assets/pic3.jpg";
import pic4 from "./assets/pic4.jpg";
import pic5 from "./assets/pic5.jpg";
import pic6 from "./assets/pic6.jpg";
import bg from "./assets/bg.jpg";
import Nav from "./Nav";
import { IoIosArrowDropdown } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
        AOS.init();
      }, [])
  const [style, setStyle] = useState({
    q1: "block",
    q2: "hidden",
    q3: "hidden",
    r1: "rotate-180",
    r2: "rotate-0",
    r3: "rotate-0",
  })
  const styleHandler1 = () => {
    if(style.q1 === "hidden"){
      setStyle({...style, q1: "block", r1: "rotate-180"})
    } else {
      setStyle({...style, q1: "hidden", r1: "rotate-0"})
    }
  }
  const styleHandler2 = () => {
    if(style.q2 === "hidden"){
      setStyle({...style, q2: "block", r2: "rotate-180"})
    } else {
      setStyle({...style, q2: "hidden", r2: "rotate-0"})
    }
  }
  const styleHandler3 = () => {
    if(style.q3 === "hidden"){
      setStyle({...style, q3: "block", r3: "rotate-180"})
    } else {
      setStyle({...style, q3: "hidden", r3: "rotate-0"})
    }
  }
  return (
    <>
      <Nav />
      <div
        id="home"
        className="w-full px-6 lg:w-10/12 mx-auto h-screen text-center flex flex-col items-center justify-center relative overflow-hidden"
      >
      <div className="bg w-full h-full load -translate-y-full" style={{ backgroundImage: `url(${bg})` }}></div>
        <h1 className="text-8xl sm:text-9xl md:text-10xl text-white font2 md:mb-10 absolute load2 opacity-0">
          NATHOSY
        </h1>
      </div>

      <div className="w-11/12 lg:w-10/12 bg-white hx2 mx-auto mb-5"></div>

      <div className="w-full lg:w-10/12 text-white mx-auto flex flex-col items-center text-center px-9">
        <div className="md:w-full flex flex-col md:flex-row items-center justify-around md:mt-6 md:mb-2">
          <h1 className="font2 text-3xl my-2 sm:text-4xl md:w-1/2 lg:text-5xl mr-4">
            COMFORT IS OUR PRIORITY
          </h1>
          <p className="text-start text-zinc-400 md:w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            laudantium voluptas, culpa ab temporibus tempore ipsam hic natus,
            quia aliquam nihil esse nisi minima fuga.
          </p>
        </div>
        <div className="flex flex-col items-center justify-around mt-12 sm:flex-row sm:w-full">
          <p className="font2 flex flex-col text-4xl mb-7 sm:mb-0 animation1">
            +20K
            <span className="text-lg text-zinc-400">Unit Ready</span>
          </p>
          <p className="font2 flex flex-col text-4xl  mb-7 sm:mb-0 animation2">
            +50K
            <span className="text-lg text-zinc-400">Costumers</span>
          </p>
          <p className="font2 flex flex-col text-4xl animation3">
            +400K
            <span className="text-lg text-zinc-400">Reviews</span>
          </p>
        </div>
      </div>

      <div
        className="w-full lg:w-10/12 mt-20 pt-20 flex flex-col lg:flex-row mx-auto"
        id="product"
      >
        <div data-aos="flip-left"
          className="hidden lg:block w-1/3 h-96 bg lg:mr-4"
          style={{ backgroundImage: `url(${pic3})` }}
        ></div>
        <div className="flex flex-col items-start justify-center w-full lg:w-2/3 text-white px-9">
          <h1 className="font2 text-4xl md:text-5xl">WHAT YOU GET?</h1>
          <p className="mt-2 text-zinc-400">
            Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Totam
            veniam aliquid sint voluptates esse dicta maiores sed corrupti
            nesciunt animi, accusamus dolorum, assumenda
          </p>
          <span className="mt-4 text-lg flex items-center justify-center animate cursor-pointer hover:translate-x-2">
            See More{" "}
            <span className="text-3xl ml-4 mb-1 animate2">&#8594;</span>
          </span>
          <div data-aos="flip-up"
            className="w-full h-40 bg mt-5"
            style={{ backgroundImage: `url(${pic1})` }}
          ></div>
        </div>
      </div>

      <div className="w-full lg:w-10/12 mt-40 flex flex-col mx-auto text-white items-center px-9 lg:px-0">
        <h1 className="font2 text-6xl text-center">OUR PRODUCT</h1>
        <div className="flex flex-col items-center w-full mt-20 mb-40 relative">
          <div className="hx2 w-1/2 absolute bg-white left-0 z-10"></div>
          <div className="hx2 right-0 w-1/2 absolute bg-white bottom-0 z-20"></div>
          <div className="flex items-center justify-between mb-6 w-full">
            <div className="w-full mt-8 pr-3 sm:w-3/5">
              <h1 className="font2 text-2xl mb-3 sm:text-4xl">MINIMALISM</h1>
              <p className="text-zinc-400 mb-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequuntur velit nihil debitis pariatur facere impedit.
              </p>
            </div>
            <div data-aos="fade-right"
              className="hidden sm:block w-2/5 h-56 bg"
              style={{ backgroundImage: `url(${pic4})` }}
            ></div>
          </div>
          <div data-aos="fade-up"
            className="w-full h-40 bg relative mb-36"
            style={{ backgroundImage: `url(${pic2})` }}
          >
            <span className="bg-zinc-800 p-5 hover:p-6 absolute bottom-0 left-0 cursor-pointer">
              More Details
            </span>
          </div>

          <div data-aos="fade-down"
            className="w-full h-40 bg relative mb-6"
            style={{ backgroundImage: `url(${pic5})` }}
          ></div>
          <div className="flex items-center justify-between mb-6 w-full">
            <div data-aos="fade-left"
              className="hidden sm:block w-2/5 h-56 bg relative"
              style={{ backgroundImage: `url(${pic6})` }}
            >
              <span className="bg-zinc-800 p-5 hover:p-6 absolute bottom-0 left-0 cursor-pointer">
                More Details
              </span>
            </div>
            <div className="w-full mt-2 pl-12 sm:w-3/5 text-right">
              <h1 className="font2 text-2xl mb-3 sm:text-4xl">CLASSIC</h1>
              <p className="text-zinc-400 mb-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequuntur velit nihil debitis pariatur facere impedit.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        id="about"
        className="w-full px-6 lg:w-10/12 mx-auto flex flex-col items-center bg-black md:flex-row"
      >
        <div className="w-full flex flex-col items-center justify-center text-center text-white md:w-1/3 md:mr-3">
          <h1 className="text-white font2 text-9xl">FAQ</h1>
          <p className="text-zinc-400 mt-5 w-2/3 text-right">
            We Have Collected Most Asked Questions
          </p>
        </div>
        <div className="flex flex-col md:w-2/3 w-full ml-3">
          <div className="border-b w-full flex items-start justify-between pb-3 cursor-pointer mb-6 mt-10" onClick={styleHandler1}>
          <div className="">
            <h1 className="text-white font2 text-2xl md:text-3xl">Question1</h1>
            <p className={`text-zinc-400 my-2 ${style.q1}`}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequuntur velit nihil
            </p>
          </div>
          <span className={`text-xl text-white ${style.r1}`} >
            <IoIosArrowDropdown />
          </span>
        </div>
        <div className="border-b w-full flex items-start justify-between pb-3 cursor-pointer mb-6" onClick={styleHandler2}>
          <div className="">
            <h1 className="text-white font2 text-2xl md:text-3xl">Question2</h1>
            <p className={`text-zinc-400 my-2 ${style.q2}`}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequuntur velit nihil
            </p>
          </div>
          <span className={`text-xl text-white ${style.r2}`} >
            <IoIosArrowDropdown />
          </span>
        </div>
        <div className="w-full flex items-start justify-between pb-3 cursor-pointer mb-6" onClick={styleHandler3}>
          <div className="">
            <h1 className="text-white font2 text-2xl md:text-3xl">Question3</h1>
            <p className={`text-zinc-400 my-2 ${style.q3}`}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequuntur velit nihil debitis pariatur facere impedit.
            </p>
          </div>
          <span className={`text-xl text-white ${style.r3}`} >
            <IoIosArrowDropdown />
          </span>
        </div>
        </div>
      </div>

      <footer className="w-full px-6 lg:w-10/12 mx-auto flex flex-col sm:flex-row border-t mt-20 text-white pb-12 sm:pt-12 sm:justify-between">
        <div className="w-full text-center mt-6 sm:mt-0 sm:w-1/4">
          <p className="font2 text-3xl">NATHOSY</p>
          <p className="text-zinc-400 mt-1 mb-6">Comfort is our priority for our customer</p>
        </div>
        <div className="flex items-start justify-between sm:justify-around sm:pl-8 sm:w-2/3">
          <div className="flex flex-col items-start text-zinc-400">
            <h1 className="font2 text-white text-2xl">MENU</h1>
            <a href="#home" className="">Home</a>
            <a href="#product" className="">Product</a>
            <a href="#store" className="">Store</a>
            <a href="#contact" className="">Contact</a>
          </div>
          <div className="flex flex-col items-start text-zinc-400">
            <h1 className="font2 text-white text-2xl">HELP</h1>
            <p className="">Privacy and Policy</p>
            <p className="">Terms of Use</p>
          </div>
          <div className="flex flex-col items-start text-zinc-400">
            <h1 className="font2 text-white text-2xl">SOCIAL</h1>
            <p className="">Facebook</p>
            <p className="">Twitter</p>
            <p className="">Instagram</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;

import {useState, useEffect} from "react"
import {FiArrowUp} from "react-icons/fi"

function Nav() {
	const [style, setStyle] = useState({
		move: "translate-x-full",
		height: "h-11"
	})
	const [scrollTop, setScrollTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 200) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    });
  }, []);
	const bottomToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const styleHandler = () => {
  	if(style.move === "translate-x-full"){
  		setStyle({...style, move: "translate-x-0", height: "h-5"})
  	} else {
  		setStyle({...style, move: "translate-x-full", height: "h-11"})
  	}
  }
	return (
		<>
			<span className={`fixed flex lg:hidden flex-col ${style.height} z-10 top-0 left-0 m-8 items-center justify-around cursor-pointer bg-black p-2 load3 -translate-y-96`} onClick={styleHandler}>
				<span className="inline-block hx w-8 bg-white"></span>
				<span className="inline-block hx w-8 bg-white"></span>
				<span className="inline-block hx w-8 bg-white"></span>
			</span>
			<div className={`h-screen w-2/3 bg-zinc-950 flex flex-col lg:hidden fixed right-0 text-white text-xl z-40 ${style.move} sm:text-2xl`}>
				<div className="w-full grid grid-cols-1 sm:grid-cols-2 place-items-center text-center h-full">
					<a href="#home" className="hover:-translate-y-1 cursor-pointer">Home</a>
					<a href="#product" className="hover:-translate-y-1 cursor-pointer">Product</a>
					<a href="#store" className="hover:-translate-y-1 cursor-pointer">Store</a>
					<a href="#about" className="hover:-translate-y-1 cursor-pointer">About Us</a>
				</div>
				<div className="w-full h-1/6 grid grid-cols-2 place-items-center text-center">
					<p className="hover:-translate-y-1 cursor-pointer">Sign Up</p>
				<p className="hover:-translate-y-1 cursor-pointer">Sign In</p>
				</div>
			</div>
			<nav className="w-full hidden items-center justify-between lg:flex text-white p-4 pr-8 bg-zinc-950 fixed top-0 z-40 load3 -translate-y-full">
			<section className="flex items-center justify-around w-1/4">
				<a href="#home" className="cursor-pointer hover:text-zinc-400 tranx">Home</a>
				<a href="#product" className="cursor-pointer hover:text-zinc-400 tranx">Product</a>
				<a href="#store" className="cursor-pointer hover:text-zinc-400 tranx">Store</a>
				<a href="#about" className="cursor-pointer hover:text-zinc-400 tranx">About Us</a>
			</section>
			<section className="flex items-center justify-around">
				<p className="cursor-pointer hover:text-zinc-400 tranx">Sign Up</p>
				<span className="mx-2">|</span>
				<p className="cursor-pointer hover:text-zinc-400 tranx">Sign In</p>
			</section>
			</nav>
			<span className={`text-black fixed bottom-0 bg-white right-0 text-2xl p-2 z-20 m-10 hidden lg:inline-block ${scrollTop === false ? ("translate-y-80") : ("translate-y-0")} cursor-pointer`} onClick={bottomToTop}>
				<FiArrowUp />
			</span>
		</>
	);
}

export default Nav;

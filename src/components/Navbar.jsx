import { useState, useEffect } from "react";
import Image from "./image.jsx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {  // Tailwind md breakpoint
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Run once on mount to close menu if starting in desktop view
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between glass px-4 md:px-8 rounded-xl shadow-lg text-white relative z-50">
      {/* LOGO */}
      <Link
        to="/"
        className="flex items-center gap-4 text-2xl font-bold accent"
      >
        <Image src="logo.png" alt="logo" w={32} h={32} />
        <span>DevScoop</span>
      </Link>

      {/* MOBILE MENU TOGGLE */}
      <div className="md:hidden z-50">
        <div
          className="cursor-pointer text-3xl glow-hover"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "✕" : "☰"}
        </div>
      </div>

      {/* MOBILE LINK LIST */}
      <div
        className={`fixed top-16 right-0 bg-[#0f1117]/80 backdrop-blur-md w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg transition-all duration-300 ${
          open ? "right-0" : "right-[-100%]"
        }`}
      >
        <Link
          to="/"
          className="glow-hover px-4 py-2 rounded-3xl hover:bg-electric/20 transition"
        >
          Home
        </Link>
        <Link
          to="/"
          className="glow-hover px-4 py-2 rounded-3xl hover:bg-electric/20 transition"
        >
          Trending
        </Link>
        <Link
          to="/"
          className="glow-hover px-4 py-2 rounded-3xl hover:bg-electric/20 transition"
        >
          Most Popular
        </Link>
        <Link
          to="/"
          className="glow-hover px-4 py-2 rounded-3xl hover:bg-electric/20 transition"
        >
          About
        </Link>
        <Link to="/login">
          <button className="py-2 px-5 rounded-3xl bg-electric text-white glow-hover transition">
            Login 👋
          </button>
        </Link>
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link
          to="/"
          className="glow-hover px-4 py-2 rounded-3xl hover:bg-electric/20 transition"
        >
          Home
        </Link>
        <Link
          to="/"
          className="glow-hover px-4 py-2 rounded-3xl hover:bg-electric/20 transition"
        >
          Trending
        </Link>
        <Link
          to="/"
          className="glow-hover px-4 py-2 rounded-3xl hover:bg-electric/20 transition"
        >
          Most Popular
        </Link>
        <Link
          to="/"
          className="glow-hover px-4 py-2 rounded-3xl hover:bg-electric/20 transition"
        >
          About
        </Link>
        <Link to="/login">
          <button className="py-2 px-5 rounded-3xl bg-electric text-white glow-hover transition">
            Login 👋
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

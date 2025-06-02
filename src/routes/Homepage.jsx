import { Link } from "react-router-dom";
import MainCategories from '../components/MainCategories'; 
import FeaturedPosts from "../components/FeaturedPosts";



const Homepage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* BREADCRUMBS */}
      <div className="flex gap-4 text-sm text-gray-400">
        <Link to="/" className="hover:text-blue-400 transition-colors">
          Home
        </Link>
        <span>/</span>
        <span className="text-blue-500 font-medium">Blogs and Articles</span>
      </div>

      {/* INTRODUCTION */}
      <div className="flex items-center justify-between">
        {/* TITLES */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-blue-400">
            Welcome to Devscoop
          </h1>
          <p className="text-gray-300 mt-2 max-w-xl">
            Discover practical tips, tutorials, and stories that help you grow
            as a modern web developer.
          </p>
        </div>

        {/* ANIMATED BUTTON */}
        <Link to="write" className="relative w-40 h-40 group hidden md:block">
          <svg
            viewBox="0 0 200 200"
            width="160"
            height="160"
            className="text-blue-400 group-hover:text-blue-600 transition-colors duration-300"
            //className="text-blue-400 group-hover:text-blue-600 transition-colors duration-300 animate-spin animatedButton"
          >
            {/* Invisible path used only as guide */}
            <path
              id="circlePath"
              fill="none"
              stroke="none" // Hide the path line completely
              d="M 100, 100 m -75, 0 a 75, 75 0 1, 1 150, 0 a 75, 75 0 1, 1 -150,0"
            />
            <text className="fill-current text-blue-400 font-semibold">
              <textPath
                href="#circlePath"
                startOffset="0%"
                className="text-sm md:text-base"
              >
                Write your story .&nbsp;&nbsp;&nbsp;&nbsp;
              </textPath>
              <textPath
                href="#circlePath"
                startOffset="50%"
                className="text-sm md:text-base"
              >
                Share your idea .
              </textPath>
            </text>
          </svg>

          <button
            className="
                            absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                            w-20 h-20 rounded-full
                            bg-blue-700
                            shadow-[0_0_10px_#2563EB]
                            flex items-center justify-center
                            transition
                            duration-300
                            group-hover:bg-blue-600
                            group-hover:shadow-[0_0_15px_#1D4ED8]
                        "
            aria-label="Write your story"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="28"
              height="28"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
            </svg>
          </button>
        </Link>
      </div>

      {/* CATEGORIES */}
      <MainCategories/>
      {/* FEATURED POSTS */}
      <FeaturedPosts/>
      {/* POST LIST */}
    </div>
  );
};

export default Homepage;

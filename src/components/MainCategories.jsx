import { Link } from "react-router-dom";

const MainCategories = () => {
  return (
    <div className="hidden md:flex bg-[#1E2131] rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">
      {/* LINKS container with horizontal scroll */}
      <div className="flex-1 flex items-center gap-4 overflow-x-auto no-scrollbar whitespace-nowrap">
        <Link
          to="/posts"
          className="bg-blue-800 text-white rounded-full px-4 py-2 font-semibold hover:bg-blue-700 transition inline-block"
        >
          All Posts
        </Link>
        <Link
          to="/posts?cat=web-design"
          className="text-blue-300 hover:bg-blue-900 rounded-full px-4 py-2 font-semibold transition inline-block"
        >
          Web Design
        </Link>
        <Link
          to="/posts?cat=development"
          className="text-blue-300 hover:bg-blue-900 rounded-full px-4 py-2 font-semibold transition inline-block"
        >
          Development
        </Link>
        <Link
          to="/posts?cat=databases"
          className="text-blue-300 hover:bg-blue-900 rounded-full px-4 py-2 font-semibold transition inline-block"
        >
          Databases
        </Link>
        <Link
          to="/posts?cat=seo"
          className="text-blue-300 hover:bg-blue-900 rounded-full px-4 py-2 font-semibold transition inline-block"
        >
          Search Engines
        </Link>
        <Link
          to="/posts?cat=marketing"
          className="text-blue-300 hover:bg-blue-900 rounded-full px-4 py-2 font-semibold transition inline-block"
        >
          Marketing
        </Link>
      </div>

      <span className="text-xl font-medium text-gray-500">|</span>

      {/* SEARCH */}
      <div className="bg-gray-800 p-2 rounded-full flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="gray"
        >
          <circle cx="10.5" cy="10.5" r="7.5" />
          <line x1="16.5" y1="16.5" x2="22" y2="22" />
        </svg>
        <input
          type="text"
          placeholder="search a post...."
          className="bg-transparent text-gray-300 focus:outline-none placeholder-gray-500"
        />
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </div>
  );
};

export default MainCategories;

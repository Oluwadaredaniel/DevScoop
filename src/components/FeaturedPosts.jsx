import Image from "./image";
import { Link } from "react-router-dom";

const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* FIRST */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4 p-4 rounded-3xl border border-blue-900/30 bg-[#1B1E2A]/60 backdrop-blur-md shadow-lg transition-all duration-300 hover:shadow-blue-700/30 hover:border-blue-500/50">
        {/* IMAGE */}
        <Image
          src="featured1.jpeg"
          className="rounded-3xl object-cover"
          w="895"
        />

        {/* DETAILS */}
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <h1 className="font-semibold text-blue-400">01.</h1>
          <Link
            to="/posts?cat=web-design"
            className="text-blue-500 hover:underline"
          >
            Web Design
          </Link>
          <span>2 days ago</span>
        </div>

        {/* TITLE */}
        <Link
          to="/test"
          className="text-xl lg:text-3xl font-semibold lg:font-bold text-white hover:text-blue-400 transition-colors"
        >
          Building Responsive Layouts with Flexbox and Grid: A Practical Guide
        </Link>
      </div>

      {/* OTHERS */}
      <div className="lg:w-1/2 flex flex-col gap-4">
        {/* SECOND */}
        <div className="flex justify-between gap-4 p-4 rounded-3xl border border-blue-900/20 bg-[#1B1E2A]/50 backdrop-blur-md hover:border-blue-500/40 hover:shadow-blue-800/20 transition-all">
          <div className="w-1/3 aspect-video">
            <Image src="featured2.jpeg" className="rounded-3xl object-cover" w="298"/>
          </div>
          <div className="w-2/3 text-white">
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-2">
              <h1 className="font-semibold text-blue-400">02.</h1>
              <Link
                to="/posts?cat=accessibility"
                className="text-blue-500 hover:underline"
              >
                Web Design
              </Link>
              <span>2 days ago</span>
            </div>
            <Link
              to="/test"
              className="text-lg font-medium hover:text-blue-400 transition-colors"
            >
              Making the Web Inclusive: A Guide to Accessibility Best Practices
            </Link>
          </div>
        </div>

        {/* THIRD */}
        <div className="flex justify-between gap-4 p-4 rounded-3xl border border-blue-900/20 bg-[#1B1E2A]/50 backdrop-blur-md hover:border-blue-500/40 hover:shadow-blue-800/20 transition-all">
          <div className="w-1/3 aspect-video">
            <Image src="featured3.jpeg" className="rounded-3xl object-cover " w="298"/>
          </div>
          <div className="w-2/3 text-white">
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-2">
              <h1 className="font-semibold text-blue-400">03.</h1>
              <Link
                to="/posts?cat=javascript"
                className="text-blue-500 hover:underline"
              >
                Web Design
              </Link>
              <span>3 days ago</span>
            </div>
            <Link
              to="/test"
              className="text-lg font-medium hover:text-blue-400 transition-colors"
            >
              Mastering Async/Await: Writing Cleaner, More Readable Code
            </Link>
          </div>
        </div>

        {/* FOURTH */}
        <div className="flex justify-between gap-4 p-4 rounded-3xl border border-blue-900/20 bg-[#1B1E2A]/50 backdrop-blur-md hover:border-blue-500/40 hover:shadow-blue-800/20 transition-all">
          <div className="w-1/3 aspect-video">
            <Image src="featured4.jpeg" className="rounded-3xl object-cover" w="298"/>
          </div>
          <div className="w-2/3 text-white">
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-2">
              <h1 className="font-semibold text-blue-400">04.</h1>
              <Link
                to="/posts?cat=performance"
                className="text-blue-500 hover:underline"
              >
                Web Design
              </Link>
              <span>5 days ago</span>
            </div>
            <Link
              to="/test"
              className="text-lg font-medium hover:text-blue-400 transition-colors"
            >
              Web Performance 101: How to Optimize Your Site for Speed
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;

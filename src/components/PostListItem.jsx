import { Link } from "react-router-dom";
import Image from "./image";

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8 p-6 rounded-3xl border border-blue-900/30 bg-[#1B1E2A]/60 backdrop-blur-md shadow-lg">
      {/* IMAGE */}
      <div className="md:hidden xl:block">
        <Image
          src="postImg.jpeg"
          className="rounded-2xl object-cover w-full h-full max-h-64"
          w="735"
        />
      </div>

      {/* DETAILS */}
      <div className="flex flex-col gap-4">
        <Link
          to="/test"
          className="text-2xl md:text-3xl xl:text-4xl font-semibold text-white hover:text-blue-400 transition-colors"
        >
          Building Responsive Layouts with Flexbox and Grid: A Practical Guide
        </Link>

        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
          <span>Written by</span>
          <Link
            to="/author/oluwadare-daniel"
            className="text-blue-500 hover:underline"
          >
            Oluwadare Daniel
          </Link>
          <span>on</span>
          <Link
            to="/posts?cat=web-design"
            className="text-blue-500 hover:underline"
          >
            Web Design
          </Link>
          <span>2 days ago</span>
        </div>
        <p className="text-gray-300 text-base leading-relaxed max-w-3xl">
          Master the art of responsive design using Flexbox and CSS Grid. This
          guide walks you through real-world layouts, tips for mobile-first
          design, and best practices to make your websites look great on any
          screen.
        </p>
        <Link
          to="/test"
          className="underline text-blue-800 text-sm hover:text-blue-500 transition-colors duration-200"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;

import Image from "../components/image";
import { Link } from "react-router-dom";
import PostMenuActions from "../components/PostMenuActions";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* detail */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-snug">
            Building Responsive Layouts with Flexbox and Grid: A Practical Guide
          </h1>

          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>Written by</span>
            <Link
              to="/author/oluwadare-daniel"
              className="text-blue-500 hover:underline transition-colors duration-200"
            >
              Oluwadare Daniel
            </Link>
            <span>on</span>
            <Link
              to="/posts?cat=web-design"
              className="text-blue-500 hover:underline transition-colors duration-200"
            >
              Web Design
            </Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-300 text-sm md:text-base max-w-3xl mt-2">
            Learn how to effectively combine Flexbox and CSS Grid to build
            modern, responsive layouts that adapt smoothly across all devices.
            This guide walks you through practical use-cases with clean examples
            for real-world projects.
          </p>
        </div>
        <div className="hidden lg:block w-2/5 ">
          <Image src="postImg.jpeg" w="600" className="rounded-2xl" />
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p className="text-gray-300 text-base leading-relaxed">
            In an era where users access the web on devices of all shapes and
            sizes, creating responsive layouts is no longer optional — it's
            essential. Responsive design ensures your website looks and
            functions beautifully across smartphones, tablets, laptops, and
            desktops. With CSS Flexbox and Grid, developers now have powerful
            layout tools that adapt seamlessly to varying screen sizes without
            compromising the user experience. This guide walks you through the
            core principles of Flexbox and Grid — and how to leverage them to
            build modern, responsive interfaces.
          </p>

          <p className="text-gray-300 text-base leading-relaxed">
            Flexbox, short for "Flexible Box Layout," is ideal for crafting
            one-dimensional layouts, whether horizontal or vertical. It
            simplifies spacing and alignment across elements, making it perfect
            for navbars, card components, and footers. CSS Grid, on the other
            hand, is a two-dimensional layout system offering precise control
            over both rows and columns — making it the go-to for full-page
            structures and complex content areas. A best-practice approach
            involves using Grid to define the main layout — like headers,
            sidebars, and content sections — and Flexbox within each section for
            refined alignment. Combining both creates a scalable, maintainable
            layout architecture. Using relative units (like %, vw/vh, and em)
            along with media queries helps you fine-tune the design for any
            screen.
          </p>

          <p className="text-gray-300 text-base leading-relaxed">
            Flexbox and Grid aren't just tools — they're fundamental to modern
            front-end development. Together, they empower you to build
            responsive, clean, and elegant designs without the overhead of heavy
            frameworks. Mastering these systems gives you the confidence to
            create smooth, engaging experiences across devices. Whether you're
            designing a landing page, an admin dashboard, or a content-rich
            blog, Flexbox and Grid provide the power and precision you need to
            bring your vision to life — responsively and beautifully.
          </p>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1>Author</h1>
          <div className="">
            <Image
              src="userImg.jpeg"
              className="w-12 h-12 rounded-full object-cover"
              w="48"
              h="48"
            />
            <Link>Oluwadare Daniel</Link>
            <p>user description</p>
            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg" />
              </Link>
              <Link>
              <Image src="instagram.svg"/>
              </Link>
            </div>
          </div>
          <PostMenuActions/>
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;

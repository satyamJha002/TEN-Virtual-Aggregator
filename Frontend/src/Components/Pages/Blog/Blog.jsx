import { FaArrowRight, FaRegClock, FaUser } from "react-icons/fa";

function Card({ heading, content, content2, content3 }) {
  return (
    <div className="bg-white border min-h-44  p-4  mb-4">
      <h2 className="text-2xl font-semibold mb-2 relative">
        {heading}
        <span className="block h-1 w-10  bg-red-800 absolute bottom-[-4px] left-0"></span>
      </h2>
      <hr />
      <a
        href="#"
        className="text-red-800 hover:text-red-900 block font-medium text-lg leading-relaxed"
      >
        {content}
      </a>
      <a
        href="#"
        className="text-red-800 hover:text-red-900 block font-medium text-lg leading-relaxed"
      >
        {content2}
      </a>
      <a
        href="#"
        className="text-red-800 hover:text-red-900 block font-medium text-lg leading-relaxed"
      >
        {content3}
      </a>
    </div>
  );
}

function Blog() {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-8 my-8 px-4">
      {/* Main Blog Content */}
      <div className="bg-stone-100 p-8 ">
        <a href="#">
          {" "}
          <img src="./blog.jpg" alt="banner" className="w-full  mb-4" />
        </a>
        <h1 className="text-2xl font-bold mb-2 text-black-800 hover:text-red-800">
          <a href="#">
            A Comprehensive Guide To The Upcoming Conferences In 2025
          </a>
        </h1>
        <div className="flex items-center text-gray-600 mb-4 text-sm">
          <p className="mr-4 flex items-center">
            <FaRegClock className="mr-1" />
            December 9, 2024
          </p>
          <p className="flex items-center">
            <FaUser className="mr-1" size={12} />
            admin
          </p>
        </div>
        <div className="text-gray-700 leading-relaxed mb-4">
          The academic world is a very dynamic and constantly changing and
          upgrading landscape. The academic world becomes the hub for ideas and
          innovation. International and national conferences are a major part of
          this academic world. Conferences play a crucial role in paving a
          pathway for innovation, sharing knowledge, and networking among
          researchers, educators, and policymakers […]
        </div>
        <button className="bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded flex items-center">
          Continue Reading <FaArrowRight className="ml-2" />
        </button>
        <div className="text-gray-600 mt-6 text-sm">
          <p>
            Posted In:{" "}
            <a href="#" className="text-red-800 hover:text-red-900">
              Academic Conference, Conference, Education Conferences
            </a>
          </p>
          <p>
            Filed Under:{" "}
            <a href="#" className="text-red-800 hover:text-red-900">
              Upcoming Education Conferences 2025
            </a>
          </p>
        </div>
      </div>

      {/* Sidebar */}
      <div className=" bg-stone-100 p-4  ">
        <Card
          heading="Recent Posts"
          content="A Comprehensive Guide To The Upcoming Conferences In 2025"
        />
        <Card heading="Archives" content="December 2024" />
        <Card
          heading="Categories"
          content="Academic Conference"
          content2="Conference"
          content3="Education conferences"
        />
      </div>
    </div>
  );
}

export default Blog;

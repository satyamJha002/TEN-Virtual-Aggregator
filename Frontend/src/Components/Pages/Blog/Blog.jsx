import { FaArrowRight, FaRegClock, FaUser } from "react-icons/fa";
import BlogCard from "./BlogCard";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const blogs = [
  {
    id: 1,
    title: "A Comprehensive Guide To The Upcoming Conferences In 2025",
    date: "December 9, 2024",
    author: "admin",
    image: "./blog.jpg",
    description:
      "The academic world is a very dynamic and constantly changing and upgrading landscape. The academic world becomes the hub for ideas and innovation...",
    category: "Academic Conference, Conference, Education Conferences",
    filedUnder: "Upcoming Education Conferences 2025",
    route: "/blog/a-comprehensive-guide-to-the-upcoming-conferences",
  },
  {
    id: 2,
    title: "Guide To The Top Medical Conferences In 2025",
    date: "December 10, 2024",
    author: "admin",
    image:
      "https://academicworldresearch.org/blog/wp-content/uploads/2024/12/banner-1600-Medical-16-12-24-01-1-768x432.webp",
    description:
      "Medical conferences play a crucial role in sharing knowledge and networking among professionals, policymakers, and researchers...",
    category: "Medical Conference, Healthcare",
    filedUnder: "Top Medical Conferences 2025",
    route: "/blog/guide-to-the-top-medical-conferences",
  },
];

function Blog() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1;

  const totalPage = Math.ceil(blogs.length / itemsPerPage);

  const currentBlogs = blogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-8 my-8 px-4">
      <div className="flex flex-col">
        {/* Main Blog Content 1 */}
        {currentBlogs.map((blog) => (
          <div
            key={blog.id}
            className="border p-8 mt-4"
            style={{ borderRadius: "4px" }}
          >
            <a href="#">
              {" "}
              <img src={blog.image} alt="banner" className="w-full  mb-4" />
            </a>
            <h1 className="text-2xl font-bold mb-2 text-black-800 hover:text-red-800">
              <a href="#">{blog.title}</a>
            </h1>
            <div className="flex items-center text-gray-600 mb-4 text-sm">
              <p className="mr-4 flex items-center">
                <FaRegClock className="mr-1" />
                {blog.date}
              </p>
              <p className="flex items-center">
                <FaUser className="mr-1" size={12} />
                {blog.author}
              </p>
            </div>
            <div className="text-gray-700 leading-relaxed mb-4">
              {blog.description}
            </div>
            <button
              onClick={() => navigate(blog.route)}
              className="bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded flex items-center"
            >
              Continue Reading <FaArrowRight className="ml-2" />
            </button>
            <div className="text-gray-600 mt-6 text-sm">
              <p>
                Posted In:{" "}
                <a href="#" className="text-red-800 hover:text-red-900">
                  {blog.category}
                </a>
              </p>
              <p>
                Filed Under:{" "}
                <a href="#" className="text-red-800 hover:text-red-900">
                  {blog.filedUnder}
                </a>
              </p>
            </div>
          </div>
        ))}
        <div className="flex justify-center mt-4 space-x-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 text-white bg-[#80011f] hover:bg-red-900 rounded"
          >
            Previous
          </button>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPage))
            }
            disabled={currentPage === totalPage}
            className="px-4 py-2 text-white bg-[#80011f] hover:bg-red-900 rounded"
          >
            Next
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div className="p-4">
        <BlogCard
          heading="Recent Posts"
          content1="A Comprehensive Guide To The Upcoming Conferences In 2025"
          content2="Guide To The Top Medical Conferences In 2025"
        />
        <BlogCard heading="Archives" content="December 2024" />
        <BlogCard
          heading="Categories"
          content="Academic Conference"
          content3="Conference"
          content4="Education conferences"
          content5="All Conference Alert"
        />
      </div>
    </div>
  );
}

export default Blog;

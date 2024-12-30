import React from "react";
import { FaRegClock, FaUser } from "react-icons/fa";
import BlogCard from "../BlogCard";
import { listsOne, listsTwo } from "./blogsContent";

const FirstBlogPost = () => {
  return (
    <>
      <div className="bg-[#646464]">
        <h2 className="px-40 py-[3%] text-4xl max-sm:text-center max-sm:px-4 text-white mb-0 font-light mx-auto">
          Posts
        </h2>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-8 my-8 px-4">
        <div className="border p-8 mt-4" style={{ borderRadius: "4px" }}>
          <h1 className="text-2xl font-bold mb-2 text-black-800 sm:text-4xl hover:text-red-800">
            A Comprehensive Guide To The Upcoming Conferences In 2025
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
          <a href="#">
            {" "}
            <img
              src="https://academicworldresearch.org/blog/wp-content/uploads/2024/12/banner-1600-1-1024x576.jpg"
              alt="banner"
              className="w-full  mb-4"
            />
          </a>

          <div className="font-serif space-y-4 text-base text-[#252525] leading-8 mb-6">
            <p>
              {" "}
              The academic world is a very dynamic and constantly changing and
              upgrading landscape. The academic world becomes the hub for ideas
              and innovation. International and national conferences are a major
              part of this academic world. Conferences play a crucial role in
              paving a pathway for innovation, sharing knowledge, and networking
              among researchers, educators, and policymakers from different
              parts of the world. As we move towards 2025, a series of education
              conferences are coming on the way, offering opportunities to
              explore the academic world.
            </p>

            <p>
              International conferences are very essential to shaping the future
              of research and academia. They provide the foundation for
              innovative ideas from different parts of the world to meet at a
              commonplace. They offer a unique platform for researchers to
              present their work, receive valuable feedback, and engage with
              like-minded individuals to progress in their careers.
            </p>
            <p>
              By attending these events, participants can gain exposure to the
              latest trends, technologies, and methodologies in their respective
              fields. Also, conferences often have keynote speakers who are
              leaders in their domains and who share their inspirational stories
              of hard work and perseverance. This can provide the much-needed
              motivation for the participants to step out of their comfort zone
              and take the next step in their careers.
            </p>
          </div>

          <div>
            <h2 className="text-[20pt] font-bold font-serif text-black tracking-[0.1px]">
              Purpose of Attending Education Conferences
            </h2>
            <div className="font-serif space-y-4 text-base text-[#252525] leading-8 mb-6">
              <p>
                Conferences provide a stage for experts to present their
                research findings and share best practices so that others can
                benefit as well. It becomes a place for establishing
                collaborations and expanding your professional network from all
                over the world from various countries and cultures, broadening
                your perspectives. Also, you can stay updated on all the latest
                topics of discussion in your respective fields.
              </p>
              <p>
                Whether you’re a classroom teacher, a university administrator,
                or an educational policy expert, the workshops, seminars, and
                keynote speeches will provide practical, actionable strategies
                that you can implement in your institution or classroom.
              </p>
            </div>
          </div>

          <div className="px-2">
            <h2 className="text-[20pt] font-bold font-serif text-black tracking-[0.1px]">
              Upcoming Education Conferences 2025
            </h2>
            <ol type="1">
              {listsOne.map((list, index) => (
                <li
                  key={index}
                  className="py-2  list-decimal marker:text-[15pt] marker:font-bold font-serif text-black tracking-[0.1px]"
                >
                  <h1 className="text-[15pt] py-2 font-bold font-serif text-black tracking-[0.1px]">
                    {list.listTitle}
                  </h1>
                  <p className="py-2 leading-8">{list.listContent}</p>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="text-[20pt] font-bold font-serif text-black tracking-[0.1px]">
              How to Prepare for Education Conferences in 2025
            </h2>
            <p className="font-serif text-black tracking-[0.1px] leading-8 py-3">
              Attending education conferences in 2025 will require careful
              planning and preparation. Here are some tips to help you make the
              most of these events:
            </p>
            <ol type="1">
              {listsTwo.map((list, index) => (
                <li
                  key={index}
                  className="py-2  list-decimal marker:text-[15pt] marker:font-bold font-serif text-black tracking-[0.1px]"
                >
                  <h1 className="text-[15pt] py-2 font-bold font-serif text-black tracking-[0.1px]">
                    {list.listTitle}
                  </h1>
                  <div>
                    {list.listContent.length > 1 ? (
                      list.listContent.map((item, index) => (
                        <p key={index} className="py-2 leading-8">
                          {item}
                        </p>
                      ))
                    ) : (
                      <p className="py-2 leading-8">{list.listContent}</p>
                    )}{" "}
                  </div>
                </li>
              ))}
            </ol>
          </div>

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
          />
        </div>
      </div>
    </>
  );
};

export default FirstBlogPost;

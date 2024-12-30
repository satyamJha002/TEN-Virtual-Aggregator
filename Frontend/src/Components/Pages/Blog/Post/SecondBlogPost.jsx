import React from "react";
import { FaRegClock, FaUser } from "react-icons/fa";
import BlogCard from "../BlogCard";
import { listThree, listFour } from "./blogsContent";

const SecondBlogPost = () => {
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
            Guide To The Top Medical Conferences In 2025
          </h1>
          <div className="flex items-center text-gray-600 mb-4 text-sm">
            <p className="mr-4 flex items-center">
              <FaRegClock className="mr-1" />
              December 26, 2024
            </p>
            <p className="flex items-center">
              <FaUser className="mr-1" size={12} />
              admin
            </p>
          </div>
          <a href="#">
            {" "}
            <img
              src="https://academicworldresearch.org/blog/wp-content/uploads/2024/12/banner-1600-Medical-16-12-24-01-1-768x432.webp"
              alt="banner"
              className="w-full  mb-4"
            />
          </a>

          <div className="font-serif space-y-4 text-base text-[#252525] leading-8 mb-6">
            <p>
              {" "}
              The field of medicine is very important for several reasons
              because it is all about saving lives. The medical field is also a
              major economic factor, creating jobs for millions of people
              worldwide. It constantly aims for research and innovation leading
              to new treatments, diagnostic tools, and medicines. So the medical
              world is a very dynamic and constantly changing and upgrading
              landscape. International and National conferences are a major part
              of this medical world. Conferences play a crucial role in paving a
              pathway for innovation, sharing knowledge, and networking among
              researchers, educators, and policymakers from different parts of
              the world. As we move towards 2025, a series of medicine
              conferences are coming on the way, offering opportunities to
              explore the academic world.
            </p>

            <p>
              By attending these events, participants can gain exposure to the
              latest trends, technologies, and methodologies in the field of
              medicine. Also, conferences offer a rich experience with many
              keynote speeches and inspirational stories of hard work and
              perseverance. This can provide the much-needed motivation for the
              participants to step out of their comfort zone and take the next
              step in their careers.
            </p>
          </div>

          <div>
            <h2 className="text-[20pt] font-bold font-serif text-black tracking-[0.1px]">
              Purpose of Attending Medical Conferences
            </h2>
            <div className="font-serif space-y-4 text-base text-[#252525] leading-8 mb-6">
              <p>
                Conferences provide a stage for medical experts to present their
                recent research findings and share best practices so that other
                doctors can incorporate them into their daily practice. It
                becomes a place for establishing collaborations with reputed and
                experienced medical professionals from all over the world from
                various countries and cultures, broadening your perspectives.
                Also, you can participate in all the latest topics of discussion
                in your respective fields.
              </p>
              <p>
                Whether you’re a medical student, a house surgeon, a senior
                doctor, or any medical professional, the workshops, seminars,
                and keynote speeches will provide practical, actionable
                strategies that will widen your knowledge base.
              </p>
            </div>
          </div>

          <div className="px-2">
            <h2 className="text-[20pt] font-bold font-serif text-black tracking-[0.1px]">
              Upcoming Medical Conferences 2025
            </h2>
            <ol type="1">
              {listThree.map((list, index) => (
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

          <div>
            <h2 className="text-[20pt] font-bold font-serif text-black tracking-[0.1px]">
              How to Prepare for Education Conferences in 2025
            </h2>
            <p className="font-serif text-black tracking-[0.1px] leading-8 py-3">
              Attending medical conferences in 2025 will require careful
              planning and preparation. Here are some tips to help you make the
              most of these events:
            </p>
            <ol type="1">
              {listFour.map((list, index) => (
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
                Medical Conferences 2025, medicine conferences 2025
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

export default SecondBlogPost;

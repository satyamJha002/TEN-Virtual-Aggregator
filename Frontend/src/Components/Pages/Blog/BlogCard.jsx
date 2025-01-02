import { Link } from "react-router-dom";

const BlogCard = ({
  heading,
  content,
  content1,
  content2,
  content3,
  content4,
  content5,
}) => {
  return (
    <div
      className="bg-white border min-h-44  p-4  mb-6"
      style={{ borderRadius: "4px" }}
    >
      <h2 className="feature-title border-red border-gray mb-2">
        <span className="text-2xl">{heading}</span>
      </h2>
      <Link
        to="/blog/a-comprehensive-guide-to-the-upcoming-conferences"
        className="text-red-800 hover:text-red-900 block font-medium text-lg leading-relaxed mb-4"
      >
        {content1}
      </Link>
      <Link
        to="/blog/guide-to-the-top-medical-conferences"
        className="text-red-800 hover:text-red-900 block font-medium text-lg leading-relaxed"
      >
        {content2}
      </Link>
      <Link
        to="/blog/categories/academic-confrence"
        className="text-red-800 hover:text-red-900 block font-medium text-lg leading-relaxed"
      >
        {content}
      </Link>
      <Link
        to="/blog/categories/conference"
        className="text-red-800 hover:text-red-900 block font-medium text-lg leading-relaxed"
      >
        {content3}
      </Link>
      <Link
        to="/blog/categories/education-conferences"
        className="text-red-800 hover:text-red-900 block font-medium text-lg leading-relaxed"
      >
        {content4}

      </Link>
      <Link
        to="/blog/categories/AllConferenceAlert"
        className="text-red-800 hover:text-red-900 block font-medium text-lg leading-relaxed"
      >
        {content5}
        
      </Link>
    </div>
  );
};

export default BlogCard;

import { useState } from "react";
import BrowseByCity from "../AddEvent/BrowseByCities";
import BrowseByCountry from "../AddEvent/BrowseByCountry";
import BrowseByTopics from "../AddEvent/BrowseByTopic";

const faqs = [
  {
    question: "How I can add an event to academicworldresearch.org?",
    answer:
      "To add an event to the academicworldresearch.org listing, please visit the home page and press on Add Event. Ordinary listing of any event is completely free.",
  },
  {
    question: "What I need to provide during the Add Event?",
    answer:
      "You need to provide your Event details like Date, Place, Deadline for paper submission, Type of event, event online URL, Contact person, etc.",
  },
  {
    question:
      "Is there any charge for listing the conference in academicworldresearch.org website?",
    answer: "No!!! There is absolutely no charge for listing the events.",
  },
  {
    question:
      "How much time will it take to list the event after successfully event addition process?",
    answer:
      "Maximum it will take 12hrs for listing the events in academicworldresearch.org website.",
  },
  {
    question:
      "Can I modify the information related to an event at any time of listing?",
    answer:
      "Yes, you can modify the Information by logging into the event panel in the related event at any time of listing.",
  },
  {
    question: "Can I promote my Events in academicworldresearch.org?",
    answer:
      "Yes, you can promote your event. Please mail to info@academicworldresearch.org to know about the different advertisement plans.",
  },
  {
    question: "How many events can be listed from my organizer account?",
    answer:
      "Maximum 50 events can be listed on academicworldresearch.org during one year for one Organizer Account.",
  },
  {
    question: "How I can subscribe to academicworldresearch.org?",
    answer:
      "Click Subscribe on academicworldresearch.org home page and follow the simple process to subscribe.",
  },
  {
    question:
      "How academicworldresearch.org will help me to find a conference?",
    answer:
      "It will help you to find the most appropriate International/National conference and workshops by knowing your requirements like place, date, topic, last date of registration, etc.",
  },
];

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row lg:flex-row px-4 md:px-8 py-6 space-y-6 md:space-y-0 md:space-x-6">
      {/* FAQ Section */}
      <div className="flex-1 w-full">
        <h3 className="text-2xl font-semibold mb-2 block">FAQ</h3>
        <span className="block h-1 w-20 bg-red-800 mb-4"></span>

        <div className="p-4 bg-white border border-gray-300 ">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 py-3">
              <p
                className="cursor-pointer text-xl font-semibold flex justify-between items-center"
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
                <span>{activeIndex === index ? "-" : "+"}</span>
              </p>
              {activeIndex === index && <hr />}
              {activeIndex === index && (
                <p className="mt-2 text-gray-700 text-xl">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Browse Section */}
      <div className="w-full overflow-hidden md:w-96">
        <div className="space-y-4">
          {/* Display headings only on mobile */}
          <h3 className="text-2xl font-semibold mb-2 block ">Browse By City</h3>
          <BrowseByCity />

          <hr className="border-t-0 border-b-2 border-gray-300" />
          <h3 className="text-2xl font-semibold mb-2 block md:hidden">
            Browse By Country
          </h3>
          <BrowseByCountry />

          <hr className="border-t-0 border-b-2 border-gray-300" />
          <h3 className="text-2xl font-semibold mb-2 block md:hidden">
            Browse By Topics
          </h3>
          <BrowseByTopics />
        </div>
      </div>
    </div>
  );
}

export default Faq;

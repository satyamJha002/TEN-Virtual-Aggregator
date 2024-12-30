import { useState } from "react";
import BrowseByCity from "../AddEvent/BrowseByCities";
import BrowseByCountry from "../AddEvent/BrowseByCountry";
import BrowseByTopics from "../AddEvent/BrowseByTopic";

const faqs = [
  {
    question: "How can I add an event to TEN Virtual Aggregator?",
    answer:
      "Simply visit our homepage and click the 'Add Event' button. Basic event listing is completely free of charge.",
  },
  {
    question: "What information do I need to provide when adding an event?",
    answer:
      "You'll need to provide essential event details including the date, venue, paper submission deadline, event type, website URL, and contact information.",
  },
  {
    question: "Is there a fee for listing conferences on TEN Virtual Aggregator?",
    answer: "Not at all! We offer free basic listings for all events.",
  },
  {
    question: "How long does it take for my event to appear after submission?",
    answer:
      "We aim to review and list all events within 12 hours of submission.",
  },
  {
    question: "Can I edit my event information after it's listed?",
    answer:
      "Yes, you can update your event information at any time by logging into your event panel.",
  },
  {
    question: "Are there promotional opportunities for my events?",
    answer:
      "Yes, we offer various promotional packages. Contact us at info@tenvirtualaggregator.com to learn about our advertising options.",
  },
  {
    question: "Is there a limit to how many events I can list?",
    answer:
      "Each organizer account can list up to 50 events per year on our platform.",
  },
  {
    question: "How do I subscribe to TEN Virtual Aggregator?",
    answer:
      "Click the 'Subscribe' button on our homepage and follow the simple registration process.",
  },
  {
    question: "How does TEN Virtual Aggregator help me find relevant conferences?",
    answer:
      "Our smart search system helps you find the perfect conferences by filtering through location, dates, topics, and registration deadlines to match your specific needs.",
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
        <h3 className="text-2xl border-red pt-4 mb-8 border-gray">FAQ</h3>

        <div className="p-4 bg-white border border-gray-300 " style={{borderRadius: "4px"}}>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 py-3">
              <p
                className="cursor-pointer mb-2 text-xl font-semibold flex justify-between items-center"
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
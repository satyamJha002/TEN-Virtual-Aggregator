import React from 'react';
import { Link } from 'react-router-dom';
import './featureEvents.css';

const FeatureCard = ({ title, link }) => (
  <div className='mt-12 text-center'>
  <div className='flex gap-4' style={{flexWrap: "wrap", justifyContent: "space-evenly"}}>
  <div className="feature-card flex flex-col flex-wrap items-center justify-around">
  <a href="https://example.com/high-impact-journals" target="_blank">
    <h3>Publish Your Research Paper In High Impact Factor Journals</h3>
</a>

    <Link to={link} className="view-more mx-auto">
      View more →
    </Link>
  </div>
  <div className="feature-card flex flex-col flex-wrap items-center justify-evenly">
  <a href="https://example.com/ugc-care-list-journals" target="_blank">
    <h3>UGC CARE List Journals</h3>
</a>

    <Link to={link} className="view-more mx-auto">
      View more →
    </Link>
  </div>
  <div className="feature-card flex flex-col flex-wrap items-center justify-evenly">
  <a href="https://example.com/research-article-thesis-writing" target="_blank">
    <h3>Research Article / Thesis Writing</h3>
</a>

    <Link to={link} className="view-more mx-auto">
      View more →
    </Link>
  </div>
  <div className="feature-card flex flex-col flex-wrap items-center justify-evenly">
  <a href="https://example.com/upcoming-conference-india" target="_blank">
    <h3>Upcoming Conference India</h3>
</a>

    <Link to={link} className="view-more mx-auto">
      View more →
    </Link>
  </div>
  <div className="feature-card flex flex-col flex-wrap items-center justify-evenly">
  <a href="https://example.com/upcoming-education-conference" target="_blank">
    <h3>Upcoming Education Conference</h3>
</a>

    <Link to={link} className="view-more mx-auto">
      View more →
    </Link>
  </div>
  <div className="feature-card flex flex-col flex-wrap items-center justify-evenly">
  <a href="https://example.com/upcoming-conferences" target="_blank">
    <h3>Upcoming Conferences</h3>
</a>
    <Link to={link} className="view-more mx-auto">
      View more →
    </Link>
    </div>
    </div>
  </div>
);

const FeatureEvents = () => {
  return (
    <div className="welcome-section">
      <div className="featured-section">
        <h2 className='featured-title border-red border-gray'>Featured Events</h2>
        <div className='mx-auto maxw-2xl'>
            <FeatureCard/>
        </div>
      </div>
    </div>
  );
};

export default FeatureEvents;
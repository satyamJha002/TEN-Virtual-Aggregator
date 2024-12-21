import React from 'react';
import { Link } from 'react-router-dom';
import './featureEvents.css';

const FeatureCard = ({ title, link }) => (
  <div className="feature-card">
    <h3>{title}</h3>
    <Link to={link} className="view-more">
      View more →
    </Link>
  </div>
);

const FeatureEvents = () => {
  const featuredCards = [
    {
      title: "Publish Your Research Paper In High Impact Factor Journals",
      link: "/"
    },
    {
      title: "UGC CARE List Journals",
      link: "/"
    },
    {
      title: "Research Article / Thesis Writing",
      link: "/"
    },
    {
      title: "Upcoming Conference India",
      link: "/"
    },
    {
      title: "Upcoming Education Conference",
      link: "/"
    },
    {
      title: "Upcoming Conferences",
      link: "/"
    }
  ];

  return (
    <div className="feature-events-container">
      <section className="featured-section">
        <h2>Featured Events</h2>
        <div className="cards-grid">
          {featuredCards.map((card, index) => (
            <FeatureCard key={index} {...card} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default FeatureEvents;
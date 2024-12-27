import React from 'react';
import './featuredOrganizer.css';
import p1 from '../../../assets/p1.png'
import p2 from '../../../assets/p2.png'
import p3 from '../../../assets/p3.png'
import p4 from '../../../assets/p4.png'
import p5 from '../../../assets/p5.png'
import p6 from '../../../assets/p6.png'

const FeaturedOrganizer = () => {
  const organizers = [
    {
      id: 1,
      name: 'ARDO',
      logo: p1,
      alt: 'ARDO Organization Logo'
    },
    {
      id: 2,
      name: 'IIRST',
      logo: p2,
      alt: 'IIRST Organization Logo'
    },
    {
      id: 3,
      name: 'ASAR',
      logo: p3,
      alt: 'ASAR Organization Logo'
    },
    {
      id: 4,
      name: 'Research Foundation',
      logo: p4,
      alt: 'Research Foundation Logo'
    },
    {
      id: 5,
      name: 'IIERD',
      logo: p5,
      alt: 'IIERD Organization Logo'
    },
    {
      id: 6,
      name: 'ITAR',
      logo: p6,
      alt: 'ITAR Organization Logo'
    }
  ];

  return (
    <div className="featured-organizer-container">
      <h2 className="featured-title border-red border-gray">Featured Organizer</h2>
      <div className="flex flex-wrap justify-evenly items-center" style={{marginTop: "3rem"}}>
        {organizers.map((organizer) => (
          <div key={organizer.id} >
            <img
              src={organizer.logo}
              alt={organizer.alt}
              className="border m-6"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedOrganizer;
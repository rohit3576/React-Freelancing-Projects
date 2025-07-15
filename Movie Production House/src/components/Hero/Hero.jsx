import React from 'react';
import './Hero.css';
import { Link } from 'react-scroll'; // ✅ Import Link from react-scroll

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Yuvas Film Production</h1>
        <p>
          At Yuvas Film Production, we believe in nurturing the next
          generation of storytellers. Our cutting-edge curriculum
          is designed to empower aspiring filmmakers with the 
          knowledge, skills, and real-world experience needed to
          thrive in today’s dynamic film industry.
        </p>

        {/* ✅ Use only Link from react-scroll */}
        <Link
          to="works"
          smooth={true}
          offset={0}
          duration={500}
          className="btn scroll-down"
        >
          Explore More
        </Link>
      </div>
    </div>
  );
};

export default Hero;

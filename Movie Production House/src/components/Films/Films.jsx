import React, { useState } from 'react';
import './Films.css';
import { motion } from 'framer-motion';

import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import film1 from '../../assets/user-1.png';
import film2 from '../../assets/user-2.png';
import film3 from '../../assets/user-3.png';
import film4 from '../../assets/user-4.png';
import film5 from '../../assets/user-5.png';
import film6 from '../../assets/user-6.png';
import film7 from '../../assets/user-7.png';
import film8 from '../../assets/user-8.png';

const Films = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const filmsData = [
    {
      image: film8,
      title: "Haunted Villa Lonavala (2017)",
      director: "Main Director: Vinod V. Menon",
      description: "Based on a true story, this chilling horror follows friends on a vacation gone wrong after a mysterious death at a haunted villa."
    },
    {
      image: film1,
      title: "Sirf 5 Din (2018)",
      director: "Assistant Director: Vinod V. Menon",
      description: "A supernatural horror film in which a woman attempts to help a man named Shanti, an abuse victim, who she found chained up in a Lonavala bungalow."
    },
    {
      image: film2,
      title: "Ishq Qayamat (2004)",
      director: "Assistant Director: Vinod V. Menon",
      description: "A young woman must choose between her husband and her lover when a college reunion turns into a tense thriller."
    },
    {
      image: film3,
      title: "Badmash no. 1 (2002)",
      director: "Assistant Director: Vinod V. Menon",
      description: "Ranjeet Singh is a cunning opportunist, known for manipulating situations to his advantage, earning him the title Badmash no. 1."
    },
    {
      image: film4,
      title: "Rock Dancer (1995)",
      director: "Assistant Director: Vinod V. Menon",
      description: "After a dancer is injured, her sister rises to the occasion to carry on the legacy amid drama and danger."
    },
    {
      image: film5,
      title: "Dilwale Kabhi Na Hare (1992)",
      director: "Assistant Director: Vinod V. Menon",
      description: "A love triangle unfolds as two best friends fall for the same woman, but she insists on following her heart."
    },
    {
      image: film6,
      title: "Naagmani (1991)",
      director: "Assistant Director: Vinod V. Menon",
      description: "A young man must battle a dark sorcerer to rescue his parents and protect a magical stone with immense powers."
    },
    {
      image: film7,
      title: "Jungle Love (1990)",
      director: "Assistant Director: Vinod V. Menon",
      description: "Raised by a chimpanzee in the Amazon jungle, a boy grows up to become a fearless protector of the wild."
    }
  ];

  const slideWidth = 25; // Show 2 slides at a time

  const slideForward = () => {
    if (currentSlide < filmsData.length - 2) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const slideBackward = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className='films'>
      <img src={back_icon} alt="Back" className='back-btn' onClick={slideBackward} />
      <img src={next_icon} alt="Next" className='next-btn' onClick={slideForward} />

      <div className="slider">
        <motion.ul
          className="slider-track"
          animate={{ x: `-${currentSlide * slideWidth}%` }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {filmsData.map((film, index) => (
            <li key={index}>
              <div className="slide">
                <div className="films-info">
                  <img src={film.image} alt={film.title} />
                  <div>
                    <h3>{film.title}</h3>
                    <span>{film.director}</span>
                  </div>
                </div>
                <p>{film.description}</p>
              </div>
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default Films;

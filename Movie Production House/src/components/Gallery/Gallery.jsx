import React, { useState } from 'react';
import './Gallery.css';
import { motion, AnimatePresence } from 'framer-motion';

import photo_1 from '../../assets/gallery-1.webp';
import photo_2 from '../../assets/gallery-2.png';
import photo_3 from '../../assets/gallery-3.png';
import photo_4 from '../../assets/gallery-4.png';
import photo_5 from '../../assets/gallery-5.png';
import photo_6 from '../../assets/gallery-6.png';
import photo_7 from '../../assets/gallery-7.png';
import photo_8 from '../../assets/gallery-8.png';
import photo_9 from '../../assets/gallery-9.png';
import photo_10 from '../../assets/gallery-10.png';
import photo_11 from '../../assets/gallery-11.png';
import photo_12 from '../../assets/gallery-12.png';
import photo_13 from '../../assets/gallery-13.png';
import photo_14 from '../../assets/gallery-14.png';


const Gallery = () => {
  const allPhotos = [
    photo_1, photo_2, photo_3, photo_4,
    photo_5, photo_6, photo_7, photo_8,
    photo_9, photo_10, photo_11, photo_12, photo_13, photo_14
  ];

  const [showMore, setShowMore] = useState(false);

  const togglePhotos = () => setShowMore(prev => !prev);

  return (
    <div className="gallery">
      <h2>Our Gallery</h2>

      <div className="photos">
        <AnimatePresence>
          {(showMore ? allPhotos : allPhotos.slice(0, 4)).map((photo, index) => (
            <motion.img
              key={photo}
              src={photo}
              alt={`Gallery Image ${index + 1}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              layout
            />
          ))}
        </AnimatePresence>
      </div>

      <button className="btn dark-btn" onClick={togglePhotos}>
        {showMore ? 'See Less' : 'See More here'}
      </button>
    </div>
  );
};

export default Gallery;

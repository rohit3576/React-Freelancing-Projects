import React from 'react';
import './Works.css';
import work1 from '../../assets/program-1.jpg';
import work2 from '../../assets/program-2.jpg';
import work3 from '../../assets/program-3.jpg';

import work_icon1 from '../../assets/program-icon-1.png';
import work_icon2 from '../../assets/program-icon-2.png';
import work_icon3 from '../../assets/program-icon-3.png';

const Works = () => {
  return (
    <div className="works-section">
      <div className="works">
        <div className="work">
          <img src={work1} alt="Shooting" />
          <div className="caption">
            <img src={work_icon1} alt="Shooting Icon" />
            <p>Pre-Production</p>
          </div>
        </div>
        <div className="work">
          <img src={work2} alt="Screenplay" />
          <div className="caption">
            <img src={work_icon2} alt="Screenplay Icon" />
            <p>Production</p>
          </div>
        </div>
        <div className="work">
          <img src={work3} alt="Music" />
          <div className="caption">
            <img src={work_icon3} alt="Music Icon" />
            <p>Post-Production</p>
          </div>
        </div>
      </div>

      <div className="work-text">
        <div className="work-block">
          <h3>🎬 Pre-Production</h3>
          <p>
            Every great film begins with a strong foundation. In this stage, we shape the vision—developing scripts, storyboards, casting, planning locations, and setting timelines. From writing compelling screenplays to assembling the right crew, our pre-production process ensures every detail is aligned for a seamless shoot.

            
            
          </p>
        </div>
        <div className="work-block">
          <h3>🎥 Production</h3>
          <p>
            This is where imagination meets action. With expert direction, high-end equipment, and a passionate team, we bring stories to life on set. Whether it’s managing complex scenes, capturing cinematic visuals, or guiding performances, our production process is driven by precision, creativity, and purpose.


            
          </p>
        </div>
        <div className="work-block">
          <h3>🛠️ Post-Production</h3>
          <p>
            The story takes its final form here. Our post-production team handles editing, color grading, VFX, music, sound design, and everything in between. With advanced tools and artistic finesse, we polish every frame—ensuring the final product is immersive, impactful, and ready for the screen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Works;

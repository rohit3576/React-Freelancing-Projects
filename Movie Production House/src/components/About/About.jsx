import React from 'react';
import './About.css';
import about_img from '../../assets/about.png';
import news from '../../assets/news.png';

const About = () => {
  return (
    <section id="about" className="about container">
      <h3 className="section-title">About Us</h3>

      <p className="about-intro">
        Yuvas Film Production stands as a dynamic force in the Indian film and entertainment industry, built on a foundation of creativity, originality, and purpose-driven storytelling. In an era where trends often overshadow talent, Yuvas emerges with a mission to break conventional molds and offer something truly meaningful.
        <br /><br />
        We are not just a production house—we are a multiversal creative ecosystem that blends filmmaking, music, education, and innovation under one roof. Whether it's feature films, web series, documentaries, or music videos, we focus on content quality, emotional depth, and social relevance.
        <br /><br />
        Unlike traditional productions centered around celebrity culture, Yuvas nurtures raw, young talent and offers them the platform they deserve. We also run an educational program to train aspiring artists, writers, and filmmakers—bridging the gap between learning and doing.
      </p>

      <h3 className="section-title founder-title">Founder</h3>

      <article className="about-owner">
        <div className="owner-info">
          <img src={about_img} alt="Vinod V Menon" className="about-img" />
          <div className="intro">
            <h2>Vinod V Menon</h2>
            <h4>
              Mr. Vinod V. Menon is a visionary filmmaker whose journey through the world of cinema is defined by passion, persistence, and purpose. With years of experience as an assistant director across various acclaimed films, he has cultivated a deep, hands-on understanding of every aspect of filmmaking—from story development to the final cut. Today, he stands as the driving force behind Yuvas Film Production, a company rooted in originality, talent discovery, and cinematic excellence.
              As a writer, Mr. Menon personally pens the scripts, dialogues, and screenplays for his projects, ensuring that every word on the page carries weight and intention. As a director and producer, he combines artistic vision with practical execution, leading his team with clarity, creativity, and care. His ability to merge technical excellence with emotional storytelling allows him to craft films that not only entertain but also leave a lasting impression.
              Beyond production, Mr. Menon is committed to building a platform that uplifts and educates aspiring filmmakers, writers, and artists across India. Under his leadership, Yuvas Film Production doubles as a creative academy—offering real-world training, mentorship, and opportunities to those who are often overlooked by the mainstream industry. He believes that the future of Indian cinema lies not in formulas but in fearless storytelling driven by fresh perspectives.
            </h4>
          </div>
        </div>

        <p className="owner-bio">
          Mr. Vinod V. Menon, founder and creative visionary of Yuvas Film Production, is a filmmaker who walks a rarely chosen path. With years of experience as an assistant director across Indian films, he knows cinema from the inside out—from the heart of a story to the lens that frames it.
          <br /><br />
          Inspired by legends like Mr. Mahesh Bhatt and the late Mr. Gulshan Kumar, he carries forward their spirit of risk-taking, originality, and social impact. He does not follow the star-kid trend—instead, he uplifts unheard voices and unseen talent.
          <br /><br />
          From writing and directing to editing, he is involved in every step of the creative process. For him, a film's success lies not just in box office numbers but in emotional connection and authenticity. Through Yuvas, he is building a cinematic future where every voice has a stage.
        </p>

        <div className="news-block">
          <img src={news} alt="Yuvas Film Production in News" className="news-full-img" />
          <p className="news-caption">
            Recognized in major publications, Yuvas Film Production and Mr. Vinod V. Menon have been featured for their bold direction, innovative content, and contributions to socially impactful cinema.
          </p>
        </div>
      </article>
    </section>
  );
};

export default About;

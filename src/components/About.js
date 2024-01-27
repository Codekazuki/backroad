import React from "react";
import aboutImg from "../images/about.jpeg";
import Title from "./Title";

const About = () => {
  return (
    <section className='section' id='about'>
      <Title title='about' subTitle=' us' />

      <div className='section-center about-center'>
        <div className='about-img'>
          <img src={aboutImg} className='about-photo' alt='awesome beach' />
        </div>
        <article className='about-info'>
          <h3>explore the difference</h3>
          <p>
            For some time now,the youth department of the church haven't been
            active ,but then thigs have changed
          </p>
          <p>We are starting with this adventure .....this trip to Baraccuda</p>
          <a href='#about' className='btn'>
            read more
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;

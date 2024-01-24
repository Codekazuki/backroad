import React from "react";

import Title from "./Title";
import { tourData } from "../data";
const Tours = () => {
  return (
    <section className='section' id='tours'>
      <Title title='featured ' subTitle='tours' />

      <div className='section-center featured-center'>
        {tourData.map((tour) => {
          return (
            <article className='tour-card'>
              <div className='tour-img-container'>
                <img src={tour.imag} className='tour-img' alt='' />
                <p className='tour-date'>{tour.date}</p>
              </div>
              <div className='tour-info'>
                <div className='tour-title'>
                  <h4>{tour.title}</h4>
                </div>
                <p>{tour.message}</p>
                <div className='tour-footer'>
                  <p>
                    <span>
                      <i className={tour.icon}></i>
                    </span>{" "}
                    {tour.country}
                  </p>
                  <p>{tour.text1}</p>
                  <p>{tour.text2}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;

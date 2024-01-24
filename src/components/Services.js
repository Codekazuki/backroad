import React from "react";
import Title from "./Title";
import { servicesData } from "../data";

const Services = () => {
  return (
    <section className='section services' id='services'>
      <Title title='our' subTitle=' services' />
      <div className='section-center services-center'>
        {servicesData.map((service) => {
          return (
            <article className='service'>
              <span className='service-icon'>
                <i className={service.icon}></i>
              </span>
              <div className='service-info'>
                <h4 className='service-title'>{service.text}</h4>
                <p className='service-text'>{service.message}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;

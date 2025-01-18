import React from "react";
import Heading from "../../common/heading";
import {location} from '../../data/data';
import './locaation.css';
const locations = () => {
  return (
    <>
      <section className="location padding">
        <div className="container">
          <Heading
            title="Explore By Location"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          />
          <div className="content grid3 mtop">

            {
                location.map((item, index)=>{
                    return(
                        <div className="box" key={index}>
                            <img src={item.cover} alt="" />
                           <div className="overlay">
                            <h5>{item.name}</h5>
                            <p>
                                <label>{item.villas}</label>
                                <label>{item.offices}</label>
                                <label>{item.apartments}</label>
                            </p>
                           </div>
                        
                        </div>
                    )
                })
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default locations;

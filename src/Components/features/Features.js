import React from "react";
import './features.css';
import FeaturesCard from "../../Items/FeaturesCard/FeaturesCard";

function Features () {
  return(
      <div className='features-main'>
          <p className='features-p-small'>Features</p>
          <p className='features-p-big'>Food with a New Passion</p>
          <div className='features-card'>
              <FeaturesCard/>
          </div>
      </div>
  )
}

export default Features;

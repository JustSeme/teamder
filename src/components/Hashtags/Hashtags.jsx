import React from 'react';
import './Hashtags.css';

function Hashtags() {

  return (
    <div className="hashtags">
      <div className="hashtags__container">
        <p className="hashtags__search">Search Teamder</p>
        <div className="hashtags__wrap">
          <p className="hashtags__text">Hashtags for you</p>
          <div className="hashtags__wrapper">
            <p className="hashtags__title">#frontend</p>
            <p className="hashtags__subtitle">1,222 Teams</p>
          </div>
          <div className="hashtags__wrapper">
            <p className="hashtags__title">#backend</p>
            <p className="hashtags__subtitle">976 Teams</p>
          </div>
          <div className="hashtags__wrapper">
            <p className="hashtags__title">#counter-strike</p>
            <p className="hashtags__subtitle">2,892 Teams</p>
          </div>
          <div className="hashtags__wrapper">
            <p className="hashtags__title">#development</p>
            <p className="hashtags__subtitle">2,329 Teams</p>
          </div>
          <p className="hashtags__show">Show more</p>
        </div>
      </div>
    </div>
  );
}

export default Hashtags;

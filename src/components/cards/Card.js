// Card.js
import React from 'react';
import './card.css';

function Card({ member }) {
  const { first_name, last_name, email, img } = member;

  return (
    <div className="card">
      <div className="left">
        <div className="profile-pic">
          <img src={img} alt={first_name} />
        </div>
      </div>
      <div className="right">
        <div className="card-details">
          <h5 className='heading'>{first_name} {last_name}</h5>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;

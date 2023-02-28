import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <div className="">
        <h5 className="card-title">{props.product.name}</h5>
      </div>
    </div>
  );
};

export default Card;

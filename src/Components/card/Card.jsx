import React from "react";

const Card = ({monster}) => {

    const {name, id, email} = monster

  return (

    <div>
      <div className="card-container" key={id}>
        <img
          alt={`monster = ${name}`}
          src={`https://robohash.org/${id}?set=set2&size=150x150`}
        />
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;

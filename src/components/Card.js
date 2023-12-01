import React from "react";
const Card = (props) => {

    const {card, buttonClickHandler} = props;
    return (
        <div class="card mb-4 col-md-4">
            <img class="card-img-top" src={card.image} alt={card.image} />
            <div class="card-body">
              <h5 class="card-title">{card.title}</h5>
              <p class="card-text">{card.description}</p>
              <p class="card-text">Contact: {card.contact}</p>
            </div>
            <div class="card-footer text-center">
              <button class="btn btn-info btn-block" onClick={()=> buttonClickHandler(card.contact)}>Details</button>
            </div>
          </div>
    );
};

export default Card;
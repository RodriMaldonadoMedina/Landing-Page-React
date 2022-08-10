import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div className="card text-center d-inline-block">
        <img src={props.urlImage} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
        </div>
        <div class="card-footer border-top-1 bg-white">
            <a href="#" class="btn btn-primary">{props.textButton}</a>
        </div>
    </div>
  );
};

Card.propTypes = {
    urlImage: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    textButton: PropTypes.string
}

export default Card;

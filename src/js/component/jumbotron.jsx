import React from "react";
import PropTypes from "prop-types";

const Jumbotron = (props) => {
  return (
    <div className="card bg-light">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
          {props.text}
        </p>
        <a href="#" className="btn btn-primary">
          {props.buttonText}
        </a>
      </div>
    </div>
  );
};

Jumbotron.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  buttonText: PropTypes.string
}

export default Jumbotron;
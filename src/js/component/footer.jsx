import React from "react";
import PropTypes from "prop-types";

const Footer = (props) => {
  return (
    <div className="container-fluid text-center text-white bg-dark miFooter">
        <p className="p-5">{props.text}</p>
    </div>
  );
};

Footer.propTypes = {
  text: PropTypes.string,
};

export default Footer;

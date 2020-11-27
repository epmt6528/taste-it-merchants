import React from "react";
import MenuIcons from "./menuIcons.svg"
import PropTypes from 'prop-types';

const Icon = ({ name }) => (
  <svg className={`toolbar__icon-${name}`}>
    <use xlinkHref={`${MenuIcons}#icon-${name}`} />
  </svg>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number
};

export default Icon;
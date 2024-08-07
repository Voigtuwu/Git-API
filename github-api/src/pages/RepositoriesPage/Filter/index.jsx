import React from "react";
import PropTypes from "prop-types";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { Container, Selector, Cleaner } from "./styles";

function Filter({ languages, currentLang, onClick }) {
  const selectors = languages.map(({ name, count, color }) => (
    <Selector 
    key={name.toLowerCase()} 
    color={color}
    className={currentLang === name ? 'selected' : ''}
    onClick={() => onClick && onClick(name)}
    >
      <span>{name}</span>
      <span>{count}</span>
    </Selector>
  ));

  return (
    <Container>
      {selectors}
      <Cleaner onClick={() => onClick && onClick(undefined)}>
        <RiDeleteBin2Fill size={20} />
      </Cleaner>
    </Container>
  );
}

Filter.defaultProps = {
  currentLang: null,
  onClick: null,
};

Filter.propTypes = {
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      color: PropTypes.string,
    }).isRequired
  ).isRequired,
  currentLang: PropTypes.string,
  onClick: PropTypes.func,
};

export default Filter;

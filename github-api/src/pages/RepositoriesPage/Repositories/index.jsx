import React from "react";
import PropTypes from "prop-types";
import Repository from "./Repository";
import { Container } from "./styles";

function Repositories({ repositories, currentLang }) {
  const repo = repositories
    .filter(
      (repository) =>
        currentLang === undefined || repository.language === currentLang
    )
    .map((repository) => (
      <Repository key={repository.id.toString()} repository={{ ...repository, id: repository.id.toString() }} />

    ));
  return <Container>{repo}</Container>;
}

Repositories.defaultProps = {
  currentLang: undefined,
};

Repositories.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
      language: PropTypes.string,
    }).isRequired
  ).isRequired,
  currentLang: PropTypes.string,
};

export default Repositories;

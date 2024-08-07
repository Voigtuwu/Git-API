import React from "react";
import PropTypes from 'prop-types';
import { Container, Name, Desc, Footer, Lang, Link } from "./styles";
import { langColors } from "../../../../services/config";

function Repository({repository}) {
  const color = langColors[repository.language && repository.language.toLowerCase()]

  return (
    <Container color={color}>
      <Name>{repository.name}</Name>
      <Desc>{repository.description}</Desc>
      <Footer color={color}>
        <Lang>{repository.language}</Lang>
        <Link href={repository.html_url} target="_blank">
          Visualizar
        </Link>
      </Footer>
    </Container>
  );
}

Repository.propTypes = {
  repository: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    language: PropTypes.string,
  }).isRequired
}

export default Repository;

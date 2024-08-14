import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlinePersonSearch } from "react-icons/md";
import { Container, Logo, Title, Form, Input, Button } from "./styles";
import logo from "../../assets/images/github-logo.svg";

function HomePage() {
  const [login, setLogin] = useState('');
  const navigate = useNavigate();

  const handleSearchClick = () => {
    if (login.trim()) {
      navigate(`/${login}/repositories`);
    }
  };

  return (
    <Container>
      <Logo src={logo} alt="Logo Github" />
      <Title>API - GitHub</Title>
      <Form>
        <Input
          placeholder="Digite o nome de usuário"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              handleSearchClick();
            }
          }}
        />
        <Button onClick={handleSearchClick}>
          <MdOutlinePersonSearch size={40} color="white" />
        </Button>
      </Form>
    </Container>
  );
}

export default HomePage;

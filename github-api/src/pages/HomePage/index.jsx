import React, { useState } from "react";
import { MdOutlinePersonSearch } from "react-icons/md";
import { Container, Logo, Title, Form, Input, Button } from "./styles";
import logo from "../../assets/images/github-logo.svg";

function HomePage()  {
  const [login, setLogin] = useState('');
  return (
    <Container>
      <Logo src={logo} alt="Logo Github" />
      <Title>API - GitHub</Title>
      <Form>
        <Input
          placeholder="Digite o nome de usuário"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />
        <Button to={`${login}/repositories`}>
          <MdOutlinePersonSearch size={40} color="white" />
        </Button>
      </Form>
    </Container>
  );
};

export default HomePage;

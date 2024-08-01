import React from "react";
import { FaUserGroup, FaCity, FaLink } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { Container, Header, Image, Login, Name, Inner, Data } from "./styles";

function Profile() {
  return (
    <Container>
      <Header>
        <Image src="https://avatars.githubusercontent.com/u/87502643?v=4" />
        <Login>Login</Login>
        <Name>Name</Name>
      </Header>
      <Inner>
        <Data>
          <FaUserGroup size={20} />
          10&nbsp;<i>seguidores</i>&nbsp;&middot;&nbsp;20&nbsp;<i>seguindo</i>
        </Data>
        <Data>
          <MdWork size={20} />
          Empresa
        </Data>
        <Data>
          <FaCity size={20} />
          Cidade
        </Data>
        <Data>
          <FaLink size={20} />
          <a href="http://github.com">github.com</a>
        </Data>
      </Inner>
    </Container>
  );
}

export default Profile;

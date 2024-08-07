import React from "react";
import PropTypes from 'prop-types';
import { FaUserGroup, FaCity, FaLink } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { Container, Header, Image, Login, Name, Inner, Data } from "./styles";

function Profile({ user }) {
  return (
    <Container>
      <Header>
        <Image src={user.avatar_url} />
        <Login>{user.login}</Login>
        <Name>{user.name}</Name>
      </Header>
      <Inner>
        <Data>
          <FaUserGroup size={20} />
          {user.followers}&nbsp;<i>seguidores</i>&nbsp;&middot;&nbsp;{user.following}&nbsp;<i>seguindo</i>
        </Data>
        {user.company && (
        <Data>
          <MdWork size={20} />
          {user.company}
        </Data>
        )}
        {user.location && (
        <Data>
          <FaCity size={20} />
          {user.location}
        </Data>
      )}
      {user.blog && (
        <Data>
          <FaLink size={20} />
          <a href={user.blog}>{user.blog}</a>
        </Data>
      )}
      </Inner>
    </Container>
  );
}

Profile.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    company: PropTypes.string,
    blog: PropTypes.string,
    location: PropTypes.string,
  }).isRequired,
};

export default Profile;

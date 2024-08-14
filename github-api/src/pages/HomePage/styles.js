import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  padding: 0 2rem;
`;

export const Logo = styled.img`
  width: 130px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.text};
`;

export const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
`;

export const Input = styled.input`
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 65px;
  line-height: 65px;
  border: none;
  font-size: 24px;
  margin-right: 24px;
  padding: 0 24px;
  color: white;

  &::placeholder{
    color: ${(props) => props.theme.colors.metal}
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  width: 80px;
  height: 65px;
  border: 3px solid ${(props) => props.theme.colors.white};
  tansition: background 0.3s;
  cursor: pointer;

  &:hover{
    background: ${(props) => props.theme.colors.container}
  }
`;
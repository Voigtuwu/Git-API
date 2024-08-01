import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    min-height: 100vh;

    @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
        flex-direction: column;
    }
`;

export const Sidebar = styled.aside`
    background: ${(props) => props.theme.colors.background};
`;

export const Main = styled.section`
    background: ${(props) => props.theme.colors.container};  
`;
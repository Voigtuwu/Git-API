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
    min-width: 20rem;
    min-height: 100vh;
    overflow-y: hidden;
    color: ${(props) => props.theme.colors.white};
`;

export const Main = styled.section`
    background: ${(props) => props.theme.colors.container};  
    width: 100%;
    height: 100vh;
    padding: 40px;
    overflow-y: hidden;
    color: ${(props) => props.theme.colors.white};

        @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
        height: 100%;
    }

        @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
        padding: 40px 20px;
    }
`;

export const Load = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`;
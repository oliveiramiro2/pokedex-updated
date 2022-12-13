import styled from "styled-components";

export const SHeaderContain = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    height: 10vh;
    width: 100vw;
    background: ${props => props.theme.colorSecondary};
`;

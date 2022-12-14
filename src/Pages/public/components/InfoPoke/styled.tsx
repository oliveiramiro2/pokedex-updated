import styled from "styled-components";

export const SContainModal = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: ${props => props.theme.colorPrimary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid ${props => props.theme.red};
    border-radius: 20px;
    opacity: .8;

    & svg {
        cursor: pointer;
        position: absolute;
        right: 10px;
        top: 10px;
    }
`;

export const SPokeName = styled.p`
    font-family: "Great Vibes";
    font-size: 40px;
    color: ${props => props.theme.colorSecondary};
`;

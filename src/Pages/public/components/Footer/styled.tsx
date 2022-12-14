import styled from 'styled-components'

export const SContainFooter = styled.footer`
    width: 100%;
    height: 10vh;
    background: ${props => props.theme.colorSecondary};
    display: flex;
    justify-content: center;
    align-items: center;

    & p {
        color: ${props => props.theme.colorPrimary};
        font-family: Pacifico;
        font-size: 20px;
    }
`

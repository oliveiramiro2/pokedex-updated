import styled from 'styled-components'

export const SContainHome = styled.div`
    padding: 10.1vh 20px 0 20px;
    min-height: 100vh;
    width: 96.1vw;
    overflow-x: hidden;
    background: ${props => props.theme.colorPrimary};
`

export const SContainAllCards = styled.div`
    display: flex;
    justify-content: space-between;
    align-self: center;
    flex-flow: wrap row;
    width: 96vw;
    overflow-x: hidden;
    margin-bottom: 50px;
`

export const SContainCard = styled.div`
    height: 500px;
    min-width: 27vw;
    margin-top: 50px;
    border-radius: 20px;
    border: 3px solid ${props => props.theme.red};
    background: ${props => props.theme.colorSecondary};
`

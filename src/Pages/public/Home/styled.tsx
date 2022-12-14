import styled from "styled-components";

const selectBackground: Function = (type: string) => {
    switch (type) {
        case "grass":
            return "green";
        case "fire":
            return "red";
        case "water":
            return "blue";
        case "electric":
            return "yellow";
        case "fighting":
            return "gold";
        case "ice":
            return "aquamarine";
        case "psychic":
            return "darkgreen";
        case "poison":
            return "violet";
        case "normal":
            return "brown";
        case "dark":
            return "black";
        case "ground":
            return "orange";
        case "steel":
            return "silver";
        case "rock":
            return "darkgray";
        case "bug":
            return "lime";
        case "flying":
            return "cyan";
        case "ghost":
            return "purple";
        case "dragon":
            return "aquamarine";
        case "fairy":
            return "pink";
        default:
            return "#000000";
    }
};

export const SContainHome = styled.div`
    padding: 10.1vh 0 0 0;
    min-height: 100vh;
    width: 98.75vw;
    overflow-x: hidden;
    background: ${props => props.theme.colorPrimary};
    display: flex;
    flex-direction: column;
    align-self: center;
`;

export const SContainTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const STitle = styled.h2`
    font-size: 50px;
    font-family: "Great Vibes";
    color: ${props => props.theme.colorSecondary};
`;

export const SContainAllCards = styled.div`
    display: flex;
    justify-content: space-between;
    align-self: center;
    flex-flow: wrap row;
    width: 97vw;
    overflow-x: hidden;
    margin-bottom: 50px;
    padding: 0 50px;

    @media (max-width: 1300px) {
        justify-content: space-around;
    }

    @media (max-width: 840px) {
        justify-content: center;
    }
`;

export const SContainCard = styled.div`
    height: 500px;
    width: 27vw;
    min-width: 400px;
    margin-top: 50px;
    border-radius: 20px;
    border: 3px solid ${props => props.theme.red};
    background: ${props => selectBackground(props.color)};
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;

    & p {
        color: ${props => props.theme.colorPrimary};
        font-family: "Rubik Vinyl";
        font-size: 30px;
        font-weight: bold;
        text-shadow: 2px 2px  ${props => props.theme.colorSecondary};
    }
`;

export const SContainPagination = styled.div`
    width: 97vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
`

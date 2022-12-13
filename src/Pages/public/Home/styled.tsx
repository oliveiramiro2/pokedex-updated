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
            return "golden";
        case "ice":
            return "aquamarine";
        case "psychic":
            return "darkgreen";
        case "poison":
            return "purple";
        case "normal":
            return "brown";
        case "dark":
            return "#332c2c";
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
            return "#530e53";
        case "dragon":
            return "aquamarine";
        case "fairy":
            return "pink";
        default:
            return "hotpink";
    }
};

export const SContainHome = styled.div`
    padding: 10.1vh 20px 0 20px;
    min-height: 100vh;
    width: 96.1vw;
    overflow-x: hidden;
    background: ${props => props.theme.colorPrimary};
`;

export const SContainAllCards = styled.div`
    display: flex;
    justify-content: space-between;
    align-self: center;
    flex-flow: wrap row;
    width: 96vw;
    overflow-x: hidden;
    margin-bottom: 50px;
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

export const SContainCard = styled.div`
    height: 500px;
    min-width: 27vw;
    margin-top: 50px;
    border-radius: 20px;
    border: 3px solid ${props => props.theme.red};
    background: ${props => selectBackground(props.color)};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    & p {
        color: ${props => props.theme.colorPrimary};
        font-family: "Rubik Vinyl";
        font-size: 30px;
    }
`;

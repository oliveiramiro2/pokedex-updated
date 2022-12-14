import React from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { CircularProgress } from "@mui/material";

import { SContainModal, SPokeName } from "./styled";

interface ITypes {
    type: {
        name: string;
    };
}

interface IProps {
    info: {
        name: string;
        id: number;
        sprites: {
            front_default: string;
            back_default: string;
            front_shiny: string;
            back_shiny: string;
        };
        types: ITypes[];
    };
    setModal: Function;
}

const InfoPoke: React.FC<IProps> = ({ info, setModal }) => (
    <SContainModal>
        {info.sprites === undefined ? (
            <CircularProgress aria-label="Aguarde" color="error" size={60} />
        ) : (
            <>
                <IoMdCloseCircle
                    onClick={() => setModal(false)}
                    size={40}
                    color="#f00"
                />
                <SPokeName>{info.name}</SPokeName>
                <article>
                    <img alt="sprite" src={info.sprites.front_default} />
                    <img alt="sprite" src={info.sprites.back_default} />
                    <img alt="sprite" src={info.sprites.front_shiny} />
                    <img alt="sprite" src={info.sprites.back_shiny} />
                </article>
                <article>
                    <img
                        alt="sprite"
                        width={100}
                        src={require(`../../../../Assets/images/${info.types[0].type.name}.png`)}
                    />
                    {info.types[1] !== undefined && (
                        <img
                            alt="sprite"
                            width={100}
                            src={require(`../../../../Assets/images/${info.types[1].type.name}.png`)}
                        />
                    )}
                    {info.types[2] !== undefined && (
                        <img
                            alt="sprite"
                            width={100}
                            src={require(`../../../../Assets/images/${info.types[2].type.name}.png`)}
                        />
                    )}
                </article>
            </>
        )}
    </SContainModal>
);

export default InfoPoke;

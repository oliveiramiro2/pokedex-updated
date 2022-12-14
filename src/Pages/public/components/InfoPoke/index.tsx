import React from "react";

import { SContainModal } from "./styled";

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
        Info {info.name} <button onClick={() => setModal(false)} type="button">close</button>
    </SContainModal>
);

export default InfoPoke;

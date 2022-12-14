import React from "react";
import { MdCatchingPokemon } from "react-icons/md";

import { SContainFooter } from "./styled";

const Footer: React.FC = () => (
    <SContainFooter>
        <MdCatchingPokemon size={30} color="#f00" />
        <p>Pokédex desenvolvida com React e Typescript ☺</p>
    </SContainFooter>
);

export default Footer;

import React from "react";

import Header from "../components/Header";
import { SContainAllCards, SContainCard, SContainHome } from "./styled";

const HomePublic: React.FC = () => (
    <SContainHome>
        <Header />
        <SContainAllCards>
            <SContainCard>1</SContainCard>
            <SContainCard>2</SContainCard>
            <SContainCard>3</SContainCard>
            <SContainCard>4</SContainCard>
            <SContainCard>5</SContainCard>
            <SContainCard>6</SContainCard>
        </SContainAllCards>
    </SContainHome>
);

export default HomePublic;

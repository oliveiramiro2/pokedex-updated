import React, { useState, useEffect } from "react";
import API from "../../../Services/api";

import Header from "../components/Header";
import { SContainAllCards, SContainCard, SContainHome } from "./styled";

const numberCards: number[] = [1, 2, 3, 4, 5, 6];

interface IPokeData {
    name: string;
    id: number;
}

let makeRequest = true;
const aux: IPokeData[] = [];

const HomePublic: React.FC = () => {
    const [pokeData, setPokeData] = useState<IPokeData[]>([] as IPokeData[]);
    const [, setForceRenderer] = useState<IPokeData[]>([] as IPokeData[]);
    const [page] = useState<number>(1);

    useEffect(() => {
        if (makeRequest) {
            makeRequest = false;
            aux.length = 0;
            numberCards.forEach(async value => {
                const { data } = await API.get(`${page * value}`);
                aux.push(await data);
                if (aux.length === 6) {
                    aux.sort((a, b) => {
                        if (a.id > b.id) return 1;
                        return -1;
                    });
                    setPokeData([...aux]);
                    setForceRenderer(pokeData);
                    setForceRenderer([]);
                }
            });
        }
    }, [page]);

    return (
        <SContainHome>
            <Header />
            <SContainAllCards>
                {pokeData.length === 6 ? (
                    pokeData.map(value => (
                        <SContainCard key={value.id}>
                            <p>{value?.name}</p>
                        </SContainCard>
                    ))
                ) : (
                    <div>wait</div>
                )}
            </SContainAllCards>
        </SContainHome>
    );
};

export default HomePublic;

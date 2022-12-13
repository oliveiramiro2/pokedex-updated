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
    // const [makeRequest, setMakeRequest] = useState<boolean>(false);
    const [page] = useState<number>(1);

    useEffect(() => {
        /* try {
            if (page * 6 !== pokeData[6].id) {
                console.log("passou");
                setPokeData([]);
                numberCards.map(value =>
                    API.get(`${page * value}`).then(({ data }: any) => {
                        setPokeData(prev => {
                            prev.push(data);
                            return prev;
                        });
                        setForceRenderer(pokeData);
                        setForceRenderer([]);
                    })
                );
            }
        } catch {
            if (makeRequest && pokeData.length === 0) {
                makeRequest = false;

            }
        } */
        if (makeRequest){
        makeRequest = false;
        numberCards.forEach(async value => {
            const { data } = await API.get(`${page * value}`);
            aux.push(await data);

            console.log(aux.length, aux);
            if (aux.length === 6) {
                setPokeData([...aux]);
                setForceRenderer(pokeData);
                setForceRenderer([]);
                console.log(pokeData);
            }
        });
}
    }, [page]);

    return (
        <SContainHome>
            <Header />
            <SContainAllCards>
                {/* <SContainCard>{pokeData?.name}</SContainCard>
                <SContainCard>{pokeData?.name}</SContainCard>
                <SContainCard>{pokeData?.name}</SContainCard>
                <SContainCard>{pokeData?.name}</SContainCard>
                <SContainCard>{pokeData?.name}</SContainCard>
                <SContainCard>{pokeData?.name}</SContainCard> */}
                {pokeData.length > 1 ? (
                    pokeData.map(value => (
                        <SContainCard key={value.id}>
                            <p>{value?.name}</p>
                        </SContainCard>
                    ))
                ) : (
                    <div>aaaaaaaa</div>
                )}
            </SContainAllCards>
        </SContainHome>
    );
};

export default HomePublic;

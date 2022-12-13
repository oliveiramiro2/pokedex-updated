import React, { useState, useEffect } from "react";
import { Skeleton } from "@mui/material";
import { FaArrowAltCircleRight } from "react-icons/fa";

import Header from "../components/Header";
import API from "../../../Services/api";
import {
    SContainAllCards,
    SContainCard,
    SContainHome,
    SContainTitle,
    STitle,
} from "./styled";

const numberCards: number[] = [1, 2, 3, 4, 5, 6];

interface ITypes {
    type: {
        name: string;
    };
}

interface IPokeData {
    name: string;
    id: number;
    sprites: {
        front_default: string;
        back_default: string;
        front_shiny: string;
        back_shiny: string;
    };
    types: ITypes[];
}

let makeRequest = true;
const aux: IPokeData[] = [];

const HomePublic: React.FC = () => {
    const [pokeData, setPokeData] = useState<IPokeData[]>([] as IPokeData[]);
    const [, setForceRenderer] = useState<IPokeData[]>([] as IPokeData[]);
    const [page, setPage] = useState<number>(7);

    useEffect(() => {
        if (makeRequest) {
            makeRequest = false;
            numberCards.forEach(async value => {
                const { data } = await API.get(`${page * 6 + value}`);
                aux.push(await data);
                if (aux.length === 6) {
                    aux.sort((a, b) => {
                        if (a.id > b.id) return 1;
                        return -1;
                    });
                    console.log(aux);
                    setPokeData([...aux]);
                    setForceRenderer(pokeData);
                    setForceRenderer([]);
                }
            });
        }
    }, [page]);

    const nextPage = () => {
        aux.length = 0;
        makeRequest = true;
        window.scrollTo({ top: 0 });
        setPokeData([]);
        setPage(prev => prev + 1);
    };

    return (
        <SContainHome>
            <Header />
            <SContainTitle>
                <STitle>Pokémons</STitle>
            </SContainTitle>
            <SContainAllCards>
                {pokeData.length === 6
                    ? pokeData.map(value => (
                          <SContainCard
                              color={value.types[0].type.name}
                              key={value.id}
                          >
                              <p>{value?.name}</p>
                              <article>
                                  <img
                                      alt="sprite"
                                      src={value.sprites.front_default}
                                  />
                                  <img
                                      alt="sprite"
                                      src={value.sprites.back_default}
                                  />
                              </article>
                              <article>
                                  <img
                                      alt="sprite"
                                      src={value.sprites.front_shiny}
                                  />
                                  <img
                                      alt="sprite"
                                      src={value.sprites.back_shiny}
                                  />
                              </article>
                          </SContainCard>
                      ))
                    : numberCards.map(value => (
                          <Skeleton
                              key={value}
                              variant="rectangular"
                              width="25vw"
                              height={500}
                              style={{ margin: "50px" }}
                          />
                      ))}
            </SContainAllCards>
            <FaArrowAltCircleRight
                onClick={() => nextPage()}
                size={40}
                color="#f00"
            />
        </SContainHome>
    );
};

export default HomePublic;

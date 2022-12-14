import React, { useState, useEffect } from "react";
import { Skeleton, ButtonGroup, Button, Modal } from "@mui/material";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

import Header from "../components/Header";
import API from "../../../Services/api";
import {
    SContainAllCards,
    SContainCard,
    SContainHome,
    SContainTitle,
    STitle,
    SContainPagination,
} from "./styled";
import Footer from "../components/Footer";
import InfoPoke from "../components/InfoPoke";

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

interface IPokeAllData {
    name: string;
    url: string;
}

let makeRequest = true;
const aux: IPokeData[] = [];

const HomePublic: React.FC = () => {
    const [pokeData, setPokeData] = useState<IPokeData[]>([] as IPokeData[]);
    const [pokeAllData, setPokeAllData] = useState<IPokeAllData[]>(
        [] as IPokeAllData[]
    );
    const [infoData, setInfoData] = useState<IPokeData>({} as IPokeData);
    const [, setForceRenderer] = useState<IPokeData[]>([] as IPokeData[]);
    const [, setForceRendererAll] = useState<IPokeAllData[]>(
        [] as IPokeAllData[]
    );
    const [page, setPage] = useState<number>(0);
    const [search, setSearch] = useState<string>("");
    const [modal, setModal] = useState<boolean>(false);

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
                    setPokeData([...aux]);
                    setForceRenderer(pokeData);
                    setForceRenderer([]);
                }
            });
        }
    }, [page]);

    useEffect(() => {
        if (search.length > 0 && pokeAllData.length === 0) {
            API.get("?limit=1118").then(({ data }) => {
                setPokeAllData(data.results);
                setForceRendererAll(pokeAllData);
                setForceRendererAll([]);
            });
        }
    }, [search]);

    const setingPage: Function = (value: number) => {
        if (page + value >= 0) {
            aux.length = 0;
            makeRequest = true;
            window.scrollTo({ top: 0 });
            setPokeData([]);
            setPage(prev => prev + value);
        }
    };

    const openModal: Function = (value: IPokeData) => {
        setInfoData(value);
        setModal(true);
    }

    return (
        <SContainHome>
            <Header setSearch={setSearch} />
            <SContainTitle>
                <STitle>Pokémons</STitle>
            </SContainTitle>
            <SContainAllCards>
                {search.length === 0 ? (
                    pokeData.length === 6 ? (
                        pokeData.map(value => (
                            <SContainCard
                                color={value.types[0].type.name}
                                key={value.id}
                                onClick={() => openModal(value)}
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
                    ) : (
                        numberCards.map(value => (
                            <Skeleton
                                key={value}
                                variant="rectangular"
                                width={350}
                                height={500}
                                style={{ margin: "50px" }}
                            />
                        ))
                    )
                ) : (
                    <SContainAllCards>
                        {pokeAllData.length > 0
                            ? pokeAllData.map(
                                  value =>
                                      value.name.includes(search) && (
                                          <SContainCard
                                              key={value.url.slice(34, -1)}
                                              onClick={() => openModal(value)}
                                          >
                                              <p>{value?.name}</p>
                                              <article>
                                                  <img
                                                      alt="sprite"
                                                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${value.url.slice(
                                                          34,
                                                          -1
                                                      )}.png`}
                                                  />
                                              </article>
                                          </SContainCard>
                                      )
                              )
                            : numberCards.map(value => (
                                  <Skeleton
                                      key={value}
                                      variant="rectangular"
                                      width={350}
                                      height={500}
                                      style={{ margin: "50px" }}
                                  />
                              ))}
                    </SContainAllCards>
                )}
            </SContainAllCards>
            {pokeData.length === 6 && search.length === 0 && (
                <SContainPagination>
                    <FaArrowAltCircleLeft
                        onClick={() => setingPage(-1)}
                        size={40}
                        color="#f00"
                        style={{ cursor: "pointer" }}
                    />
                    <ButtonGroup variant="contained" aria-label="button group">
                        {page - 3 >= 0 && (
                            <Button
                                color="error"
                                onClick={() => setingPage(-3)}
                            >
                                {page - 2}
                            </Button>
                        )}
                        {page - 2 >= 0 && (
                            <Button
                                color="error"
                                onClick={() => setingPage(-2)}
                            >
                                {page - 1}
                            </Button>
                        )}
                        {page - 1 >= 0 && (
                            <Button
                                color="error"
                                onClick={() => setingPage(-1)}
                            >
                                {page}
                            </Button>
                        )}
                        <Button color="error" disabled>
                            {page + 1}
                        </Button>
                        <Button color="error" onClick={() => setingPage(1)}>
                            {page + 2}
                        </Button>
                        <Button color="error" onClick={() => setingPage(2)}>
                            {page + 3}
                        </Button>
                        <Button color="error" onClick={() => setingPage(3)}>
                            {page + 4}
                        </Button>
                    </ButtonGroup>
                    <FaArrowAltCircleRight
                        onClick={() => setingPage(1)}
                        size={40}
                        color="#f00"
                        style={{ cursor: "pointer" }}
                    />
                </SContainPagination>
            )}
            <Footer />
            <Modal open={modal} onClose={() => setModal(false)}>
                <InfoPoke info={{...infoData}} setModal={setModal} />
            </Modal>
        </SContainHome>
    );
};

export default HomePublic;

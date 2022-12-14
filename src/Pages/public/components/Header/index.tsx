import React, { useState, useEffect, useContext } from "react";
import { FormGroup, FormControlLabel, Box, TextField } from "@mui/material";
import { RxMagnifyingGlass } from "react-icons/rx";

import {
    SHeaderContain,
    SContainSwitch,
    MaterialUISwitch,
    SContainSearch,
} from "./styled";
import { ThemeContext } from "../../../../Services/context";

interface IProps {
    setSearch: Function;
}

const Header: React.FC<IProps> = ({ setSearch }) => {
    const [theme, setTheme] = useState<boolean>(false);
    const { setThemeSelect } = useContext(ThemeContext);

    useEffect(() => {
        setThemeSelect(theme);
    }, [theme]);

    return (
        <SHeaderContain>
            <SContainSearch>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                    <RxMagnifyingGlass size={30} />
                    <TextField
                        id="input-with-sx"
                        label="Pesquise o pokémon"
                        variant="standard"
                        color="error"
                        autoComplete="off"
                        onChange={e => setSearch(e.target.value)}
                    />
                </Box>
            </SContainSearch>
            <SContainSwitch>
                <FormGroup>
                    <FormControlLabel
                        control={<MaterialUISwitch checked={theme} />}
                        onChange={() => setTheme(!theme)}
                        label={`Tema ${theme ? "dark" : "light"}`}
                    />
                </FormGroup>
            </SContainSwitch>
        </SHeaderContain>
    );
};

export default Header;

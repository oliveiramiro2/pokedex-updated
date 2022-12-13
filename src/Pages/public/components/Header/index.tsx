import React, { useState, useEffect, useContext } from "react";
import { FormGroup, FormControlLabel } from "@mui/material";
import { RxMagnifyingGlass } from "react-icons/rx";

import { SHeaderContain, SContainSwitch, MaterialUISwitch } from "./styled";
import { ThemeContext } from "../../../../Services/context";

const Header: React.FC = () => {
    const [theme, setTheme] = useState<boolean>(false);
    const { setThemeSelect } = useContext(ThemeContext);

    useEffect(() => {
        setThemeSelect(theme)
    }, [theme]);

    return (
        <SHeaderContain>
            <RxMagnifyingGlass size={30} />
            <SContainSwitch>
                <FormGroup>
                    <FormControlLabel
                        control={<MaterialUISwitch checked={theme} />}
                        onChange={() => setTheme(!theme)}
                        label={`Tema ${theme ? 'dark' : 'light'}`}
                    />
                </FormGroup>
            </SContainSwitch>
        </SHeaderContain>
    );
};

export default Header;

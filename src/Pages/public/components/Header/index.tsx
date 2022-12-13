import React, { useState } from "react";
import { FormGroup, FormControlLabel } from "@mui/material";
import { RxMagnifyingGlass } from "react-icons/rx";

import { SHeaderContain, SContainSwitch, MaterialUISwitch } from "./styled";

const Header: React.FC = () => {
    const [theme, setTheme] = useState<boolean>(false);

    return (
        <SHeaderContain>
            <RxMagnifyingGlass />
            <SContainSwitch>
                <FormGroup>
                    <FormControlLabel
                        control={<MaterialUISwitch checked={theme} />}
                        onChange={() => setTheme(!theme)}
                        label="Tema"
                    />
                </FormGroup>
            </SContainSwitch>
        </SHeaderContain>
    );
};

export default Header;

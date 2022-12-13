import React, { useContext, useMemo } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "../context";

interface ITheme {
    colorPrimary: "#eee" | "#1b1b1b";
    colorSecondary: "#eee" | "#1b1b1b";
    red: "#df0000";
}

const themeLight: ITheme = {
    colorPrimary: "#eee",
    colorSecondary: "#1b1b1b",
    red: "#df0000",
};

const themeDark: ITheme = {
    colorPrimary: "#1b1b1b",
    colorSecondary: "#eee",
    red: "#df0000",
};

const ThemePokedex: React.FC<any> = ({ children }) => {
    const { themeSelect } = useContext(ThemeContext);

    const themeSeleted = useMemo(
        () => (themeSelect ? themeDark : themeLight),
        [themeSelect]
    );

    return <ThemeProvider theme={themeSeleted}>{children}</ThemeProvider>;
};

export default ThemePokedex;

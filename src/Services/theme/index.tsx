import React, { useMemo } from "react";
import { ThemeProvider } from "styled-components";

interface ITheme {
    colorPrimary: "#eee" | "#1b1b1b";
    colorSecondary: "#eee" | "#1b1b1b";
}

const themeLight: ITheme = {
    colorPrimary: "#eee",
    colorSecondary: "#1b1b1b",
};

const themeDark: ITheme = {
    colorPrimary: "#1b1b1b",
    colorSecondary: "#eee",
};

let changeTheme: boolean = false;

export const themeChange: Function = (value: boolean) => {
    changeTheme = value;
};

const ThemePokedex: React.FC<any> = ({ children }) => {
    const theme = useMemo(() => (
        changeTheme ? themeDark : themeLight
    ), [changeTheme])

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
};

export default ThemePokedex;

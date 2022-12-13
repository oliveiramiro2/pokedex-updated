import React from "react";
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

const ThemePokedex: React.FC<any> = ({ children }) => (
    <ThemeProvider theme={themeLight}>{children}</ThemeProvider>
);

export default ThemePokedex;

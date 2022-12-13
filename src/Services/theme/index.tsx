import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    light: {
        colorPrimary: "#eee",
        colorSecondary: "#1b1b1b",
    },
    dark: {
        colorPrimary: "#1b1b1b",
        colorSecondary: "#eee",
    },
};

const ThemePokedex: React.FC<any> = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default ThemePokedex;

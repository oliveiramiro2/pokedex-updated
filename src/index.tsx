import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import reportWebVitals from "./reportWebVitals";
import PokedexRoutes from "./Routes";
import ThemeChangeProvider from "./Services/context";
import ThemePokedex from "./Services/theme";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <BrowserRouter>
        <ThemeChangeProvider>
            <ThemePokedex>
                <React.StrictMode>
                    <PokedexRoutes />
                </React.StrictMode>
            </ThemePokedex>
        </ThemeChangeProvider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

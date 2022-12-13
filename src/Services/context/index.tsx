import React, { createContext, useState, useMemo } from "react";

interface IThemeContext {
    themeSelect: boolean;
    setThemeSelect: Function;
}

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeChangeProvider: React.FC<any> = ({ children }) => {
    const [themeSelect, setThemeSelect] = useState<boolean>(false);

    const valueContext = useMemo(
        () => ({ themeSelect, setThemeSelect }),
        [themeSelect]
    );

    return (
        <ThemeContext.Provider value={valueContext}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeChangeProvider;

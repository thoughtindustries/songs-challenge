import { createContext, useState } from "react";

export const NavStateContext = createContext();
const NavStateProvider = NavStateContext.Provider

function NavState (props) {
    const [activeGenre, setActiveGenre] = useState()

    return (
        <NavStateProvider value={{ activeGenre, setActiveGenre }}>
            {props.children}
        </NavStateProvider>
    )
}

export default NavState;
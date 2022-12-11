import { createContext, useState } from "react";

import App from "../App";


const ClickContext = createContext({
    title: 'For you!',
    changeTitle: () => () => { }
});
export function ClickContextProvider(props) {
    const [title, setTitle] = useState('For you!');


    const context = {
        title: title,
        changeTitle: setTitle
    }

    return (
        <ClickContext.Provider value={context}>
            <App />
        </ClickContext.Provider>
    )
}

export default ClickContext;
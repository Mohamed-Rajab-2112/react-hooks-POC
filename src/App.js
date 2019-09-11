import React, {useState} from 'react';
import './App.css';
import UseEffect from "./components/UseEffect";
import UseContext from "./components/UseContext";

export const UserContextProvider = React.createContext();

function App() {

    const [display, setDisplay] = useState(true);
    return (
        <div className="App">
            <button onClick={() => setDisplay(!display)}>Toggle Display</button>
            {display && <UseEffect/>}

                <UserContextProvider.Provider value={'Mohamed'}>
                    <UseContext/>
                </UserContextProvider.Provider>
        </div>
);
}

export default App;

import React, {useState} from 'react';
import './App.css';
import HookCounterTwo from "./components/HookCounterTwo";
import UseEffect from "./components/UseEffect";

function App() {

  const [display, setDisplay] = useState(true);

    return (
        <div className="App">
          <button onClick={() => setDisplay(!display)}>Toggle Display</button>
            {display && <UseEffect/>}
        </div>
    );
}

export default App;

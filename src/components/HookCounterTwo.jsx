import React, {useState} from 'react';

const HookCounterTwo = () => {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);



    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(prevState => prevState + 5)}>Increment 5</button>
        </div>
    );
};

export default HookCounterTwo;

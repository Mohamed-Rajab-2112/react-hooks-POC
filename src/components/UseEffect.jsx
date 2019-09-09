import React, {useState, useEffect} from 'react';

const UseEffect = () => {

    const [counter, setCounter] = useState(0);
    const [name, setName] = useState('');

    // component did update hook
    useEffect(() => {
        console.log('did update');
    });

    // component did update in specific property change
    useEffect(() => {
        console.log('should update in specific case');
    }, [counter]);

    // component did mount
    useEffect(() => {
        console.log('did mount');
        return () => {
            console.log('will unmount')
        }
    }, []);

    return (
        <div>
            <input onChange={event => setName(event.target.value)}/>
            <button onClick={() => setCounter(counter + 1)}>Count {counter}</button>
        </div>
    );
};

export default UseEffect;

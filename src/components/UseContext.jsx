import React, {useContext} from 'react';
import {UserContextProvider} from "../App";

const UseContext = () => {
    const user = useContext(UserContextProvider);
    return (
        <div>
            {user}
        </div>
    );
};

export default UseContext;

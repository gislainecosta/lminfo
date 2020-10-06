import React from 'react';
import { useHistory } from 'react-router-dom';

import {
    
} from './styles';

const Home = () => {
    let history = useHistory();

    return(
        <div>
            <button onClick={() => { history.push('lista-de-funcionarios')}}>Login</button>
        </div>
    )
};

export default Home;
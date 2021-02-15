import React from 'react';
import ReactDOM from 'react-dom';
import {ClientsRoutes} from './routes/clients-routes';
import './index.css';
import {AuthContainer} from './elements/auth/container/auth-container';

const App = () => {
    return (
        <AuthContainer>
            <ClientsRoutes />
        </AuthContainer>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
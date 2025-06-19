import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import { GlobalProvider } from './context/globalState';

const App = () => {
    return (
        <GlobalProvider>
            <Router>
                <AppRoutes />
            </Router>
        </GlobalProvider>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
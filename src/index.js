import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import './index.css';

import App from "./App";
import { ResultsContextProvider } from './context/ResultsContextProvider';

ReactDOM.render(
    <ResultsContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ResultsContextProvider>
    ,document.getElementById("root")
);
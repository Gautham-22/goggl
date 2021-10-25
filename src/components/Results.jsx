import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useResultsContext } from '../context/ResultsContextProvider';

import Loading from './Loading';

const Results = () => {
    const [ isLoading, results, getResults, searchItem, setSearchItem ] = useResultsContext();
    const location = useLocation();

    useEffect(() => {
        getResults("/search/q=elon+musk&num=100");
    }, []);

    if(isLoading) {
        return <Loading />;
    }

    switch(location.pathname) {
        case "/search":
            return <h1>Search result</h1>;
        default:
            return <h1>Sample result</h1>;
    }
};

export default Results;

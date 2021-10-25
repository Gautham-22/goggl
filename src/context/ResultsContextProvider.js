import React, { useState } from 'react';
import { createContext, useContext } from 'react';

const ResultsContext = createContext();    
const baseurl = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultsContextProvider = ({children}) => {
    const [ isLoading,setIsLoading ] = useState(false);
    const [ results,setResults ] = useState([]);
    const [ searchItem,setSearchItem ] = useState('');

    const getResults = async (type) => {
        setIsLoading(true);
        
        try {
            const response = await fetch(`${baseurl}${type}`, {
                method: "GET",
                headers: {
                    "x-user-agent": "desktop",
                    "x-rapidapi-host": "google-search3.p.rapidapi.com",
                    "x-rapidapi-key": process.env.REACT_APP_API_KEY
                }
            });
            const data = await response.json();
    
            console.log(data);
    
            setResults(data);
        } catch(err) {
            console.log(err);
        }

        setIsLoading(false);
    };

    return (
        <ResultsContext.Provider value={{isLoading, results, getResults, searchItem, setSearchItem}}>
            {children}
        </ResultsContext.Provider>
    );
};

export const useResultsContext = () => useContext(ResultsContext);
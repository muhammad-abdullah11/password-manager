import {useState, createContext, useEffect } from "react";

const CreditContext = createContext();

export default CreditContext;

import React from 'react'

const CreditProvider = ({ children }) => {

    const [credits, setCredits] = useState([]);

    const fetchAllCredits = () => {
        localStorage.getItem("credits") && setCredits(JSON.parse(localStorage.getItem("credits")));
        setCredits(JSON.parse(localStorage.getItem("credits")) || []);
    }

    useEffect(() => {
        fetchAllCredits();
    }, [credits]);    

    return (
        <CreditContext.Provider value={{ credits, setCredits }}>
            {children}
        </CreditContext.Provider>
    )
}
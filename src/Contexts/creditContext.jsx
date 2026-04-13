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

    const addCredit = (credit) => {
        const updatedCredits = [...credits, credit];
        setCredits(updatedCredits);
        localStorage.setItem("credits", JSON.stringify(updatedCredits));
    }

    const deleteCredit = (id) => {
        const updatedCredits = credits.filter((cred) => cred.id !== id);
        setCredits(updatedCredits);
        localStorage.setItem("credits", JSON.stringify(updatedCredits));
    }

    const updateCredit = (id, updatedData) => {
        const updatedCredits = credits.map((cred) =>
          cred.id === id ? { ...cred, ...updatedData } : cred
        );
        setCredits(updatedCredits);
        localStorage.setItem("credits", JSON.stringify(updatedCredits));
    };


    return (
        <CreditContext.Provider value={{ credits, setCredits, addCredit, deleteCredit, updateCredit }}>
            {children}
        </CreditContext.Provider>
    )
}
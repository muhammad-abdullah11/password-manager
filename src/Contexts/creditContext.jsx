import { createContext } from "react";

const CreditContext = createContext();

export default CreditContext;

import React from 'react'

const CreditProvider = ({ children }) => {
    return (
        <CreditContext.Provider value={{}}>
            {children}
        </CreditContext.Provider>
    )
}
import { createContext ,useEffect,useState} from "react";

const CredentialsContext = createContext();

export default CredentialsContext;

import React from 'react'

const CredentialsProvider = ({ children }) => {
    const [credentials, setCredentials] = useState([]);
    const fetchAllCredentials = () => {
        const stored = localStorage.getItem("credentials");
        if (stored) {
            setCredentials(JSON.parse(stored));
        }
    };

    useEffect(() => {
        fetchAllCredentials();
    }, []);

  
    const addCredential = (credential) => {
        const updatedCredentials = [...credentials, credential];
        setCredentials(updatedCredentials);
        localStorage.setItem("credentials", JSON.stringify(updatedCredentials));
    };

    const deleteCredential = (id) => {
        const updatedCredentials = credentials.filter((cred) => cred.id !== id);
        setCredentials(updatedCredentials);
        localStorage.setItem("credentials", JSON.stringify(updatedCredentials));
    }
    
    const updateCredential = (id, updatedData) => {
        const updatedCredentials = credentials.map((cred) =>
          cred.id === id ? { ...cred, ...updatedData } : cred
        );
        setCredentials(updatedCredentials);
        localStorage.setItem("credentials", JSON.stringify(updatedCredentials));
    };

    return (  
        <CredentialsContext.Provider value={{ credentials, setCredentials, addCredential, deleteCredential, updateCredential }}>
            {children}
        </CredentialsContext.Provider>
    )
}

export { CredentialsProvider }
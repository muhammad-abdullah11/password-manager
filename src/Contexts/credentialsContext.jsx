import { createContext ,useEffect,useState} from "react";

const CredentialsContext = createContext();

export default CredentialsContext;

import React from 'react'

const credentialsProvider = ({ children }) => {
    const [credentials, setCredentials] = useState([]);
    const fetchAllCredentials = () => {
        localStorage.getItem("credentials") && setCredentials(JSON.parse(localStorage.getItem("credentials")));
        setCredentials(JSON.parse(localStorage.getItem("credentials")) || []);
    };

    useEffect(() => {
        fetchAllCredentials();
    }, [credentials]);

  
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
        <main value={{ credentials, setCredentials, addCredential, deleteCredential, updateCredential }}>
            {children}
        </main>
    )
}

export { credentialsProvider }
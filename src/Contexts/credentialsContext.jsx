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
    
  return (
    <main value={{ credentials, setCredentials }}>
        {children}
    </main>
  )
}

export { credentialsProvider }
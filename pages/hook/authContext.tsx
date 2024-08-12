import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
    rut: string;
    setRut: React.Dispatch<React.SetStateAction<string>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuthContext must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [rut, setRut] = useState('');

    return (
        <AuthContext.Provider value={{ rut, setRut }}>
            {children}
        </AuthContext.Provider>
    );
};

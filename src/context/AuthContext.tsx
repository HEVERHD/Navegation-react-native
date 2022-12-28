import React,{ createContext, useReducer } from 'react';
import { authReducer } from './AuthReducer';

//Definir como luce, que informacion tendre aqui
export interface AuthState {
    isLoggeIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

// Estado inicial

export const AuthInitialState: AuthState = {
    isLoggeIn: false,
};

// Lo usaremos para decirle a react como Luce el context

export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
}

// crear el Contexto
export const AuthContext = createContext({} as AuthContextProps);

const [authState, dispatch] = useReducer(authReducer, AuthInitialState)

// Componente proveedor del estado

export const AuthProvider = ({children}: any) => {

 
    const signIn = () => {
        dispatch({type:"sigIn"})
    }

    return(
        <AuthContext.Provider value={{
            authState,
            signIn
        }}>
            {children}
        </AuthContext.Provider>
    )
}
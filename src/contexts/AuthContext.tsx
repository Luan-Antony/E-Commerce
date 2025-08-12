import React, { createContext, useState, useEffect } from 'react';
import { setCookie, parseCookies, destroyCookie } from 'nookies';

interface UserLogin {
    email: string,
    passwordHash: string
}

interface AuthContextProps {
    user: User | null,
    signIn: (user: UserLogin) => void
}

export const AuthContext = createContext({} as AuthContextProps)

interface AuthProviderProps {
    children: React.ReactNode;
}

interface User {
    email: string;
    firstName: string;
    lastName: string;
    passwordHash: string;
}

export const AuthProvider = ({ children } : AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null);

    console.log(user)

    useEffect(() => {
        const url = 'https://localhost:3333/users/profile'
        const { 'devemdobro.token': token} = parseCookies()
        
        async function getUserProfile() {
            if (token) {
                const response = await fetch(url, {
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                })

                const user = await response.json()

                setUser(user)
            }
        }

        getUserProfile();
    }, []);

    async function signIn({ email, passwordHash }: UserLogin) {
        console.log(email, passwordHash)

        const url = 'https://localhost:3333/users/login'

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, passwordHash }),
        });

        console.log(response)

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error)
        }

        const data = await response.json()

        setCookie(data, 'devemdobro.token', data.token, {
            maxAge: 60 * 60 * 1
        })

        setUser(data.user)
    }

    return (
        <AuthContext.Provider value={{ signIn, user }}>
            {children}
        </AuthContext.Provider>
    )
}
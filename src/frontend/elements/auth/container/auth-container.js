import React, {useState,useEffect,} from 'react';
import { AuthContext } from './../contexts/auth-context';
import {
    onAuthChanged,
    selectUser,
} from './../../../../api/data/users.data';

export const AuthContainer = (props) => {
    const [user, setUser] = useState(null);
    const {children} = props;

    useEffect(() => {
        onAuthChanged(async (user) => {
            if(user) {
                console.log('User auth: ', user);
                setUser({
                    user: {
                        account: user,
                    },
                });
            }
            else {
                setUser(null);
            }
        });
    }, []);

    return (
        <AuthContext.Provider value={[user, setUser]}>
            {children}
        </AuthContext.Provider>
    );
};
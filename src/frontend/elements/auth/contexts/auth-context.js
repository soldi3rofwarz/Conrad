import React from 'react';
import { currentUser } from '../../../../api/data/users.data';

const user = currentUser();

export const AuthContext = React.createContext({
    user: user,
});
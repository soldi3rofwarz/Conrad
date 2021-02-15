import React, {useState,useEffect,} from 'react';
import {Signup} from './../components/signup';
import {Add} from './../../../../api/data/users.data';
import { AuthContext } from './../contexts/auth-context';
import {
    Redirect,
} from 'react-router-dom';

export const SignupContainer = () => {
    const [name, setName] = useState('');
    const handleChangeName = (e) => setName(e.target.value);

    const [email, setEmail] = useState('');
    const handleChangeEmail = e => setEmail(e.target.value);

    const [password, setPassword] = useState('');
    const handleChangePassword = e => setPassword(e.target.value);

    const [gender, setGender] = useState('');
    const handleChangeGender = e => setGender(e.target.value);

    const [state, setState] = useState('');
    const [error, setError] = useState('error');

    const handleClickRegister = () => {
        setState('loading');
        Add({
            name,
            gender,
            email,
            password,
        }).then(() => {
            setState('success');
            setName('');
            setGender('');
            setEmail('');
            setPassword('');
            
            console.log('guardado!!!!!!');
        }).catch(error => {
            setError(error);
            setState('error');
            console.log(error);
        });
    };

    if(state === 'success') return (
        <Redirect to='/' />
    );

    return (
        <AuthContext.Consumer>
            {([user]) => user === null ?
                <Signup
                    name={name}
                    onChangeName={handleChangeName}
                    email={email}
                    onChangeEmail={handleChangeEmail}
                    password={password}
                    onChangePassword={handleChangePassword}
                    gender={gender}
                    onChangeGender={handleChangeGender}
                    
                    onClickRegister={handleClickRegister}
                />
                :
                <Redirect
                    to='/'
                />
            }
        </AuthContext.Consumer>
    );
};
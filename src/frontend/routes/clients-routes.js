import React from 'react';
import {
    BrowserRouter,
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import {Home} from './../pages/home';

import {Profile} from '../pages/users/profile.js';
import {LogIn} from '../pages/login/login.js';
import {SignupPage} from './../pages/signUp'
import {AboutPage} from './../pages/about'
import {PayPage} from './../pages/payment'


export const ClientsRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Route path='/' exact component={Home} />
                <Route path='/profile' exact component={Profile}/>
                <Route path='/login' exact component={LogIn}/>
                <Route path='/signup' exact component={SignupPage}/>
                <Route path='/about' exact component={AboutPage}/>
                <Route path='/Pay' exact component={PayPage}/>
            </BrowserRouter>
        </>
    );
};
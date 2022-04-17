import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { MAIN_PATH, SIGN_UP_PATH, SIGN_IN_PATH, PROJECT_PATH } from '../constants/routes';

import MainPage from '../../pages/MainPage/MainPage';
import ProjectPage from '../../pages/ProjectPage/ProjectPage';
import SignInPage from '../../pages/SignInPage/SignInPage';
import SignUpPage from '../../pages/SignUpPage/SignUpPage';

export default function Router() {
    return (
        <Routes>
            <Route path={MAIN_PATH} element={<MainPage />} />
            <Route path={SIGN_IN_PATH} element={<SignInPage />} />
            <Route path={SIGN_UP_PATH} element={<SignUpPage />} />
            <Route path={PROJECT_PATH} element={<ProjectPage />} />
        </Routes>
    )
}
import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const defaultLayout = () => {
    return (
        <>
            <Header></Header>
            <main className='Container'>
                <Outlet />
            </main>
        </>
    )
}

export default defaultLayout
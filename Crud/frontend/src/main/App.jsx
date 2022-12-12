import React from 'react'
import './App.css'

import Logo from '../components/tamplate/Logo'
import Footer from '../components/tamplate/Footer'
import Nav from '../components/tamplate/Nav'
import Main from '../components/tamplate/Main'

export default props =>
    <div className="app">
        <Logo />
        <Nav />
        <Main />
        <Footer />
    </div>


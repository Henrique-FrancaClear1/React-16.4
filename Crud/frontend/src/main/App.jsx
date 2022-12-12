import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import Logo from '../components/tamplate/Logo'
import Footer from '../components/tamplate/Footer'
import Nav from '../components/tamplate/Nav'
import Main from '../components/tamplate/Main'

export default props =>
    <div className="app">
        <Logo />
        <Nav />
        <Main icon="home" title="Início"
            subtitle="Segundo projeto do captulo de React." />
        <Footer />
    </div>


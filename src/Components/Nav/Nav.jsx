import React from 'react'
import './Nav.scss'

const Nav = () => {
    return (
        <nav>
            <div className="container">
                <h1>Vahabzadeh</h1>
                <ul>
                    <li>Coffee</li>
                    <li>Location</li>
                    <li>Contact</li>
                </ul>
                <div className="btn-c">
                    <button id='btn-login'>Login</button>
                    <button id='btn-signUp'>Sign Up</button>
                    <img src="" alt="" />
                </div>

            </div>
        </nav>
    )
}

export default Nav

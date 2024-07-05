import React from 'react'
import Logo from "./logo.jpg";

export default function loading() {
    return (
        <div className='Loading'>
            <img
                src={Logo}
                alt="My logo site"
                className="Loading_Middle"
            />
            <h1 className="Loading_Text">
                <span className="dot">.</span>
                <span className="dot">.</span>
                <span className="dot">.</span>
                
            </h1>

        </div>
    )
}
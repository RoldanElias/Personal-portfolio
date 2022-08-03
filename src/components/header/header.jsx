import React from 'react'
import './header.css'
import CTA from './cta.jsx'
import ME from '../../assets/me.png'
import HeaderSocials from './headerSocials'

const header = () => {
    return (
        <header>
            <div className="container header_container">
                <h5>Hello I'm</h5>
                <h1>Elías F. Roldán</h1>
                <h5 className="text-light">FullStack Web Developer</h5>
                <CTA />
                <HeaderSocials />

                <div className="me">
                    <img src={ME} alt='me' />
                </div>

                <a href='contact' className='scroll_down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default header
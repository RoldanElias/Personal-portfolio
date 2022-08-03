import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const services = () => {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className='container services_container'>
                <article className='service'>
                    <div className='service_head'>
                        <h3>FrontEnd Development</h3>
                    </div>

                    <ul className='service_list'>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Optimization of user experience.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Using HTML, JavaScript and CSS to bring graphic designers' concepts to life.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>User interface development and maintenance.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Create tools that enhance browser-independent site interaction.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Bug fixes and usability testing.</p>
                        </li>
                    </ul>
                </article>
                <article className='service'>
                    <div className='service_head'>
                        <h3>BackEnd Development</h3>
                    </div>

                    <ul className='service_list'>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>To investigate customer needs and offer the best solutions in the form of feasible projects.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Identify problems in the production chain.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Propose solutions in early stages to avoid problems.</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Apply interactions with different databases.</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default services
import React from 'react';
import './experience.css';
import { BsFillCheckCircleFill } from 'react-icons/bs'

const experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>
            <div className='container experience_container'>
                <div className="experience_frontend">
                    <h3>FrontEnd Development</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <BsFillCheckCircleFill className='experience_details-icon' />
                            <h4>HTML</h4>
                        </article>
                        <article className='experience_details'>
                            <BsFillCheckCircleFill className='experience_details-icon' />
                            <h4>CSS</h4>
                        </article>
                        <article className='experience_details'>
                            <BsFillCheckCircleFill className='experience_details-icon' />
                            <h4>JavaScript</h4>
                        </article>
                        <article className='experience_details'>
                            <BsFillCheckCircleFill className='experience_details-icon' />
                            <h4>React</h4>
                        </article>
                        <article className='experience_details'>
                            <BsFillCheckCircleFill className='experience_details-icon' />
                            <h4>Redux</h4>
                        </article>
                    </div>
                </div>
                <div className="experience_backend">
                    <h3>BackEnd Development</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <BsFillCheckCircleFill className='experience_details-icon' />
                            <h4>Node JS</h4>
                        </article>
                        <article className='experience_details'>
                            <BsFillCheckCircleFill className='experience_details-icon' />
                            <h4>Express</h4>
                        </article>
                        <article className='experience_details'>
                            <BsFillCheckCircleFill className='experience_details-icon' />
                            <h4>MySQL</h4>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default experience
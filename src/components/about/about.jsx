import React from 'react';
import './about.css';
import ME from '../../assets/About.jpeg'
import { FaAward } from 'react-icons/fa'
import { MdOutlineComputer } from 'react-icons/md'
import { VscFolderLibrary } from 'react-icons/vsc'

const about = () => {
    return (
        <section id='about'>
            <h5 className='about_test'>Get To Know</h5>
            <h2>About Me</h2>

            <div className='container about_container'>
                <div className="about_me">
                    <div className="about_me-image">
                        <img src={ME} alt='About Image' />
                    </div>
                </div>
                <div className="about_content">
                    <div className="about_cards">
                        <article className='about_card'>
                            <FaAward className='about_icon' />
                            <h5>Experience</h5>
                            <small>I'm looking for my first work experience as a Developer.</small>
                        </article>
                        <article className='about_card'>
                            <MdOutlineComputer className='about_icon' />
                            <h5>Studies</h5>
                            <small>FullStack Web Developer in Henry.</small>
                        </article>
                        <article className='about_card'>
                            <VscFolderLibrary className='about_icon' />
                            <h5>Projects</h5>
                            <small>4 Personal Projects.</small>
                        </article>
                    </div>

                    <p>
                        I am an enthusiastic person, proactive, dedicated and committed who is constantly looking to grow from a professional and personal point of view. I have a strong profile of continuous improvement and great interpersonal skills.
                    </p>

                    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default about
import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/WeatherApp.jpg'
import IMG2 from '../../assets/TestimonialsApp.jpg'
import IMG3 from '../../assets/FrontEndStoreApp.jpg'
import IMG4 from '../../assets/NotesApp.jpg'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Wheather App',
        github: 'https://github.com/RoldanElias/WeatherApp',
        demo: 'https://weather-app-by-elias-roldan.netlify.app/'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Testimonials App',
        github: 'https://github.com/RoldanElias/proyecto-testimonios',
        demo: 'https://testimonios-by-elias-roldan.netlify.app/'
    },
    {
        id: 3,
        image: IMG3,
        title: 'FrontEnd Store App',
        demo: 'https://proyectotiendaeliasroldan.netlify.app/'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Notes App',
        github: 'https://github.com/RoldanElias/ensolvers-frontend-challenge',
        demo: 'https://ensolvers-frontend-challenge-roldanelias.netlify.app/'
    },
]

const portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio_container'>
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className='portfolio_item'>
                                <div className='portfolio_item-image'>
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className='portfolio_item-cta'>
                                    <a href={github} className='btn' target='_blank'>Github</a>
                                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default portfolio
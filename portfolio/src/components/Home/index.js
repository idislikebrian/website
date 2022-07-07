import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const bio = `Felix (b. 1989, New York) is a contemporary American artist, programmer, and creative producer, working in the areas of Media Synthesis, Video Art, and Generative Art. As a video artist Felix creates compositions and sculptures that have the ability to question the medium.
He received a technical degree in Automotive Engineering from Universal Technical Institute in 2009, and dropped out of college in 2015. Felix has published and magazines, built web apps, told stories with photographs and directed music videos.
Felix works commercially under Cobalt, a small studio of one, specializing in producing multimedia web experiences for small, independent companies.`

const Home = () => {
    const [typedBio, setTypedBio] = useState('')
    
    useEffect(() => {
        const timeout = setTimeout(() => {
            setTypedBio(bio.slice(0, typedBio.length + 1))
        }, 100)
        return () => clearTimeout(timeout)
    }, [typedBio])
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <div className="blinking-cursor text-animate-hover">{typedBio}
                </div></h1>
                <h2>
                Brian Felix is an <Link to="/work" className='links'>Artist</Link>, Developer at Cent, and Creative Producer at Cobalt. Say hello. ©2022
                </h2>
                <Link to="/contact" className='flat-button'> C o n t a c t M e </Link>
            </div>
        </div>
    );
}

export default Home
import './index.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Cube from './Cube';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['M', 'a', 'k', 's', 'y', 'm', 'i', 'l', 'i', 'a', 'n'];

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);

        return () => clearTimeout(timeout);
    }, []);


    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br /> 
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m&nbsp;</span>
                <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={nameArray}
                    idx={15}/>
                </h1>
                <h2>
                    AGH University Of Cracow Student / Backend Developer <br />
                    Node.js / Express / Flask / Spring Boot / MongoDB 
                </h2>
                <p>
                    Currently looking for an internship or junior backend developer position where I can deepen my knowledge of backend architecture, databases, and API design.
                </p>
                <Link to="/contact" className="flat-button">
                    CONTACT ME
                </Link>
            </div>
            <Cube />
        </div>
    );
}

export default Home;
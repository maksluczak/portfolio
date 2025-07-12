import './index.scss';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi,<br /> I'm Maksymilian
                </h1>
                <h2>
                    AGH University Of Cracow Student / Backend Developer <br />
                    Node.js / Express / Flask / Spring Boot / MongoDB 
                </h2>
                <p>
                    Currently looking for an internship or junior backend developer position where I can deepen my knowledge of backend architecture, databases, and API design.
                </p>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home;
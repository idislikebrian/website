import { Link, NavLink } from 'react-router-dom'
import './index.scss'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            BRIAN FELIX
        </Link>
        <div className='now'>
            <p>
                59°F -- Cloudy -- 04:00 -- Battery at 100%
            </p>   
            <p>
                It is 4:01am in my current timezone, NZST.
                Right now I am in Auckland where it is 59°F.
                My phone's battery level is 100% and it is full.
            </p>
        </div>
        <nav>
            <NavLink 
                exact="true" 
                activeclassname="active" 
                className="bio-link" 
                to="/bio"
            >
                Biography
            </NavLink> 
            <NavLink 
                exact="true" 
                activeclassname="active" 
                className="works-link" 
                to="/works"
            >
                Works
            </NavLink>
            <NavLink 
                exact="true" 
                activeclassname="active" 
                className="journal-link" 
                to="/journal"
            >
                News
            </NavLink>
            <NavLink 
                exact="true" 
                activeclassname="active" 
                className="wip-link" 
                to="/+"
            >
                🧪
            </NavLink> 
            <NavLink 
                exact="true" 
                activeclassname="active" 
                className="more-link" 
                to="/more"
            >
                More
            </NavLink>             

        </nav>
        <ul>
            <li>
                <a 
                    target="_blank" 
                    rel="noreferrer" 
                    href="https://thescarletcarson.shop"
                >
                    The Scarlet Carson 
                </a>
            </li>
            <li>
                <a 
                    target="_blank" 
                    rel="noreferrer" 
                    href="https://twitter.com/__chamaquito"
                >
                    Twitter 
                </a>
            </li>
            <li>
                <a 
                    target="_blank" 
                    rel="noreferrer" 
                    href="https://twitter.com/__chamaquito"
                >
                    YouTube 
                </a>
            </li>
            <li>
                <a 
                    target="_blank" 
                    rel="noreferrer" 
                    href="https://vimeo.com/chamaquito"
                >
                    Vimeo 
                </a>
            </li>
            <li>
                <a 
                    target="_blank" 
                    rel="noreferrer" 
                    href="https://github.com/idislikebrian/"
                >
                    Github 
                </a>
            </li>
            <li>
                <a 
                    target="_blank" 
                    rel="noreferrer" 
                    href="mailto:hello@brian-felix.com"
                >
                    Email 
                </a>
            </li>
            <li>
                <a 
                    target="_blank" 
                    rel="noreferrer" 
                    href="https://twitter.com/__chamaquito"
                >
                    Instagram 
                </a>
            </li>
            <li>
                <a 
                    target="_blank" 
                    rel="noreferrer" 
                    href="https://snapchat.com/add/chamaquito"
                >
                    Snapchat 
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar
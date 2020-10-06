import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter, faInstagram, faGithub, faLinkedin, faMedium} from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <section className="footer">
            <h1 style={{textAlign:"center"}}><b>Let's Connect</b></h1><br></br>
            <a className="iconBox" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/akanksha-raghav-386938188/"><FontAwesomeIcon icon={faLinkedin} color="#0e76a8" size="lg" /></a>
            <a className="iconBox" target="_blank" rel="noopener noreferrer" href="https://github.com/akanksha-raghav"><FontAwesomeIcon icon={faGithub} size="lg" /></a>
            <a className="iconBox" target="_blank" rel="noopener noreferrer" href="https://medium.com/@akanksharaghav"><FontAwesomeIcon icon={faMedium} color="#66cdaa" size="lg" /></a>
            <a className="iconBox" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/akanksha.15"><FontAwesomeIcon icon={faInstagram} color="#D44638" size="lg" /></a>
            <a className="iconBox" target="_blank" rel="noopener noreferrer" href="https://twitter.com/akanksharaghav9"><FontAwesomeIcon icon={faTwitter} color="#00acee" size="lg" /></a>
            <footer style={{ marginTop: "20px" }}>
            “I choose to make the rest of my life, the best of my life.” 
            </footer>
        </section>
    )
}

export default Footer

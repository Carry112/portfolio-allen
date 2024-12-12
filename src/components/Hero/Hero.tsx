import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import Illustration from "../../assets/illustration.svg";
import { NavHashLink } from "react-router-hash-link";
import { FaLinkedin, FaDiscord, FaInstagram, FaTwitter } from 'react-icons/fa'; // Importing icons from react-icons
import Hello from '../../assets/Hello.gif';

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hello <img src={Hello} alt="Hello" width="20px" />, I'm</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>John Allen</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Full Stack Developer</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">5+ Years of Experience</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/johnallen0099"
              target="_blank"
              rel="noreferrer"
              style={{ color: '#0077B5' }} // LinkedIn color
            >
              <FaLinkedin size={30} />
            </a>
            <div className="discord-tooltip">
              <FaDiscord size={30} style={{ color: '#7289DA' }} />
              <span className="discord-tooltip-text">@John_Allen</span>
            </div>
            <a
              href="https://x.com/devallen9009"
              target="_blank"
              rel="noreferrer"
              style={{ color: '#1DA1F2' }} // Twitter color
            >
              <FaTwitter size={30} />
            </a>
            <a
              href="https://www.instagram.com/dev.allen9/"
              target="_blank"
              rel="noreferrer"
              style={{ color: '#E1306C' }} // Instagram color
            >
              <FaInstagram size={30} />
            </a>
          </div>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={Illustration} alt="Ilustração" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
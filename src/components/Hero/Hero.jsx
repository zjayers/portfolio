import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import '../../mock/animate';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <div className="hero">
        <div className="overlay" />
        <div className="background">
          <canvas id="hero-canvas" width="1920" height="1080" />
        </div>
      </div>
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={500} delay={200} distance="30px">
          <h1 className="hero-title">
            {title || 'Hi, my name is'}{' '}
            <span className="text-color-main">{name || 'Zachariah Ayers'}</span>
            <br />
            {subtitle || "I'm a Full-Stack Software Engineer."}
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={500} delay={300} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={500}>
                {cta || 'About Me'}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;

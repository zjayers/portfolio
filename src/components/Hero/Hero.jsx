import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

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

    // pure javascrip random function ============
    function random(min, max) {
      return Math.random() * (max - min) + min;
    }

    window.requestAnimFrame = (function () {
      return (
        window.requestAnimationFrame ||
        function (callback) {
          window.setTimeout(callback, 1000 / 60);
        }
      );
    })();

    function draw() {
      // setup canvas enviroment
      const time = new Date().getTime() * 0.002;
      // console.log(time);
      const color1 = 'rgba(2,170,176, 0.4)';
      const color2 = 'rgba(0,205,172, 0.4)';
      const canvas = document.getElementById('hero-canvas');
      const ctx = document.getElementById('hero-canvas').getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();

      // random float to be used in the sin & cos
      const randomX = random(0.2, 0.9);
      const randomY = random(0.1, 0.2);

      // sin & cos for the movement of the triangles in the canvas
      const rectX = Math.cos(time * 1) * 1.5 + randomX;
      const rectY = Math.sin(time * 1) * 1.5 + randomY;
      const rectX2 = Math.cos(time * 0.7) * 3 + randomX;
      const rectY2 = Math.sin(time * 0.7) * 3 + randomY;
      const rectX3 = Math.cos(time * 1.4) * 4 + randomX;
      const rectY3 = Math.sin(time * 1.4) * 4 + randomY;

      // console.log(rectX + '-' + rectY + '-' + rectX2 + '-' + rectY2 + '-' + rectX3 + '-' + rectY3);

      // triangle gradiente ==========================================
      const triangleGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      triangleGradient.addColorStop(0, color1);
      triangleGradient.addColorStop(1, color2);

      // triangle group 1 ===========================================
      // triangle 1.1
      ctx.beginPath();
      ctx.moveTo(rectX2 + 120, rectY2 - 100);
      ctx.lineTo(rectX2 + 460, rectY2 + 80);
      ctx.lineTo(rectX2 + 26, rectY2 + 185);
      ctx.fillStyle = triangleGradient;
      ctx.fill();

      // triangle 1.2
      ctx.beginPath();
      ctx.moveTo(rectX - 50, rectY - 25);
      ctx.lineTo(rectX + 270, rectY + 25);
      ctx.lineTo(rectX - 50, rectY + 195);
      ctx.fillStyle = triangleGradient;
      ctx.fill();

      // triangle 1.3
      ctx.beginPath();
      ctx.moveTo(rectX3 - 140, rectY3 - 150);
      ctx.lineTo(rectX3 + 180, rectY3 + 210);
      ctx.lineTo(rectX3 - 225, rectY3 - 50);
      ctx.fillStyle = triangleGradient;
      ctx.fill();

      // triangle group 2 ===========================================
      // triangle 2.1
      ctx.beginPath();
      ctx.moveTo(rectX + (canvas.width - 40), rectY - 30);
      ctx.lineTo(rectX + (canvas.width + 40), rectY + 190);
      ctx.lineTo(rectX + (canvas.width - 450), rectY + 120);
      ctx.fillStyle = triangleGradient;
      ctx.fill();

      // triangle 2.2
      ctx.beginPath();
      ctx.moveTo(rectX3 + (canvas.width - 200), rectY3 - 240);
      ctx.lineTo(rectX3 + (canvas.width + 80), rectY3 - 240);
      ctx.lineTo(rectX3 + (canvas.width - 50), rectY3 + 460);
      ctx.fillStyle = triangleGradient;
      ctx.fill();

      // triangle 2.3
      ctx.beginPath();
      ctx.moveTo(rectX2 + (canvas.width - 400), rectY2 + 140);
      ctx.lineTo(rectX2 + (canvas.width + 20), rectY2 + 200);
      ctx.lineTo(rectX2 + (canvas.width - 350), rectY2 + 370);
      ctx.fillStyle = triangleGradient;
      ctx.fill();

      // triangle group 3 ===========================================
      // triangle 3.1
      ctx.beginPath();
      ctx.moveTo(rectX3 - 50, rectY3 + (canvas.height - 350));
      ctx.lineTo(rectX3 + 350, rectY3 + (canvas.height - 220));
      ctx.lineTo(rectX3 - 100, rectY3 + (canvas.height - 120));
      ctx.fillStyle = triangleGradient;
      ctx.fill();

      // triangle 3.2
      ctx.beginPath();
      ctx.moveTo(rectX + 100, rectY + (canvas.height - 380));
      ctx.lineTo(rectX + 320, rectY + (canvas.height - 180));
      ctx.lineTo(rectX - 275, rectY + (canvas.height + 150));
      ctx.fillStyle = triangleGradient;
      ctx.fill();

      // triangle 3.3
      ctx.beginPath();
      ctx.moveTo(rectX2 - 230, rectY2 + (canvas.height - 50));
      ctx.lineTo(rectX2 + 215, rectY2 + (canvas.height - 110));
      ctx.lineTo(rectX2 + 250, rectY2 + (canvas.height + 130));
      ctx.fillStyle = triangleGradient;
      ctx.fill();

      // triangle group 4 ===========================================
      // triangle 4.1
      ctx.beginPath();
      ctx.moveTo(rectX3 + (canvas.width - 80), rectY3 + (canvas.height - 320));
      ctx.lineTo(rectX3 + (canvas.width + 250), rectY3 + (canvas.height + 220));
      ctx.lineTo(rectX3 + (canvas.width - 200), rectY3 + (canvas.height + 140));
      ctx.fillStyle = triangleGradient;
      ctx.fill();

      // triangle 4.2
      ctx.beginPath();
      ctx.moveTo(rectX + (canvas.width - 100), rectY + (canvas.height - 160));
      ctx.lineTo(rectX + (canvas.width - 30), rectY + (canvas.height + 90));
      ctx.lineTo(rectX + (canvas.width - 420), rectY + (canvas.height + 60));
      ctx.fillStyle = triangleGradient;
      ctx.fill();

      // triangle 4.3
      ctx.beginPath();
      ctx.moveTo(rectX2 + (canvas.width - 320), rectY2 + (canvas.height - 200));
      ctx.lineTo(rectX2 + (canvas.width - 50), rectY2 + (canvas.height - 20));
      ctx.lineTo(rectX2 + (canvas.width - 420), rectY2 + (canvas.height + 120));
      ctx.fillStyle = triangleGradient;
      ctx.fill();

      ctx.restore();
    } // end function draw

    function init() {} // end init

    function animate() {
      window.requestAnimFrame(animate);
      draw();
    }

    init();
    animate();
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
        <Fade left={isDesktop} bottom={isMobile} duration={300} delay={0} distance="30px">
          <h1 className="hero-title">
            {title || 'Hi, my name is'}{' '}
            <span className="text-color-main">{name || 'Zachariah Ayers'}</span>
            <br />
            {subtitle || "I'm a Full-Stack Software Engineer."}
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={300} delay={0} distance="30px">
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

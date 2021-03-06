/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import ProjectImg from '../Image/ProjectImg';

const ProjectCard = ({ project, isMetrics }) => {
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

  const { title, info, info2, url, repo, img } = project;

  const renderLinks = () => {
    return isMetrics ? (
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="cta-btn cta-btn--hero"
        href={url || '#!'}
      >
        Run them yourself!
      </a>
    ) : (
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="cta-btn cta-btn--hero"
        href={url || '#!'}
      >
        See Live
      </a>
    );
  };

  return (
    <Row>
      <Col lg={4} sm={12}>
        <Fade left={isDesktop} bottom={isMobile} duration={300} delay={0} distance="30px">
          <div className="project-wrapper__text">
            <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
            <div>
              <p>
                <i>
                  {info ||
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                </i>
              </p>
              <ul style={{ margin: 0 }}>
                {info2.length &&
                  info2.split('|').map((i, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <li key={i + index}>
                      <p>{i}</p>
                    </li>
                  ))}
              </ul>
            </div>
            {renderLinks()}
            {repo && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn text-color-main"
                href={repo}
              >
                Source Code
              </a>
            )}
          </div>
        </Fade>
      </Col>
      <Col lg={8} sm={12}>
        <Fade right={isDesktop} bottom={isMobile} duration={300} delay={0} distance="30px">
          <div className="project-wrapper__image">
            <a
              href={url || '#!'}
              target="_blank"
              aria-label="Project Link"
              rel="noopener noreferrer"
            >
              <div className="rounded-giant" style={{ borderRadius: '10px' }}>
                <Tilt
                  options={{
                    reverse: false,
                    max: 8,
                    perspective: 1000,
                    scale: 1,
                    speed: 300,
                    transition: true,
                    axis: null,
                    reset: true,
                    easing: 'cubic-bezier(.03,.98,.52,.99)',
                  }}
                >
                  <div data-tilt className="thumbnail" style={{ borderRadius: '10px' }}>
                    <ProjectImg className="rounded-lg" alt={title} filename={img} />
                  </div>
                </Tilt>
              </div>
            </a>
          </div>
        </Fade>
      </Col>
    </Row>
  );
};

export default ProjectCard;

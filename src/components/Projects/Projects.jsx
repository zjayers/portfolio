import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectCard from './ProjectCard';
import { metricsData } from '../../mock/data';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Applications" />
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          <hr className="row" />
          <ProjectCard project={metricsData} isMetrics />
        </div>
      </Container>
    </section>
  );
};

export default Projects;

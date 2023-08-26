import React from 'react';
import './MyProjects.scss';
import ProjectCard from '../ProjectCard/ProjectCard';
import cardConfigs from '../ProjectCard/ProjectCardDescriptions';
import { motion } from 'framer-motion';

function MyProjects() {
  return <div id='projects' className='myprojects-container section'>
    <div className='content-container'>
      <div className='text-container'>
        <motion.h4 className='header'
          initial={{ opacity: 0, y: 150 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}>
            My Projects
        </motion.h4>
        <motion.div 
          initial={{ opacity: 0, y: 150 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}>
          <h2>A brief showcase of my projects.</h2>
        </motion.div>
      </div>

      <div className='projects-container'>
        {cardConfigs.map((config) => {
          return <ProjectCard key={config.id} data={config}/>
        })}
      </div>
    </div>
  </div>
}

export default MyProjects;

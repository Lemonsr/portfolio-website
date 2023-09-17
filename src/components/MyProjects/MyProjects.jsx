import React from 'react';
import './MyProjects.scss';
import BigProject from '../BigProject/BigProject';
import BigCardConfigs from '../BigProject/BigProjectDescriptions';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';

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
        <p className='mt-4 subheader'>Click on the images to view case studies!</p>
      </div>

      <div className='big-projects-container'>
        {BigCardConfigs.map((config) => {
          return <BigProject key={config.id} data={config}/>
        })}
      </div>

      <Tooltip id='tooltip' />
    </div>
  </div>
}

export default MyProjects;

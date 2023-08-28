import React from 'react';
import './BigProject.scss';
import { motion } from 'framer-motion';

function BigProject({ data }) {
  // Split content into multiple paragraphs if needed.
  const paragraphs = data.description.split('\n\n');

  return (
    <motion.div className='big-project-container'
      initial={{ opacity: 0, y: 150 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        bounce: 0.2,
        duration: 2}}
    >
      <div className='text-container'>
        <h6 className='mb-2'>{ data.title }</h6>
        <p className='role mb-4'>{ data.role }</p>
        {paragraphs.map((paragraph, index) => (
          <p className='mb-8' key={index}>{paragraph}</p>
        ))}
        <div className='icon-list'>
          {data.icons.map((image, index) => (
            <img className='icon'
              data-tooltip-id='tooltip'
              data-tooltip-content={ data.tooltip[index] } 
              data-tooltip-place='bottom' 
              key={index} 
              src={image} 
              alt={`Image ${index}`} 
            />
          ))}
        </div>
      </div>
      <img src={ data.img } alt={`Project ${ data.id }`}/>
    </motion.div>
  );
}

export default BigProject;

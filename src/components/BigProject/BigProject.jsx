import React, { useState } from 'react';
import './BigProject.scss';
import { motion } from 'framer-motion';

function BigProject({ data }) {
  // Split content into multiple paragraphs if needed.
  const title_company = data.title.split('\n\n');
  const paragraphs = data.description.split('\n\n');

  const [show, setShow] = useState(false);

  const showOverlay = () => {
      setShow(true);
  };

  const hideOverlay = () => {
      setShow(false);
  };

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
        <h6 className='title-container mb-2'>
          <a className='title mr-8' href={ data.casestudy } target='_blank' rel='noopener noreferrer'>
            { title_company[0] }
          </a> 
          { title_company[1] && // check if title_company[1] exists
          <a className='company' href={ data.company_link } target='_blank' rel='noopener noreferrer'>
            { title_company[1] }
          </a> }
        </h6>
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
              src={ window.location.origin + image } 
              alt={`Image ${index}`} 
            />
          ))}
        </div>
      </div>
      <div className='image-box'
        onMouseOver={showOverlay}
        onMouseLeave={hideOverlay}
      >
        <a className='image-with-text' href={ data.casestudy } target='_blank' rel='noopener noreferrer'>
          <img src={ window.location.origin + data.img } alt={`Project ${ data.id }`}/>
          {show && (
            <div className='image-text'>
              { data.casestudy ? 
                <p>Click to view the case study!</p> :
                <p>Case study coming soon.</p>
              }
            </div>
          )}
        </a>
      </div>
    </motion.div>
  );
}

export default BigProject;

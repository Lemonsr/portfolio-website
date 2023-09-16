import React from 'react';
import './Skills.scss';
import adobephotoshop from '../../assets/svgs/icons/adobephotoshop.svg';
import adobexd from '../../assets/svgs/icons/adobexd.svg';
import aseprite from '../../assets/svgs/icons/aseprite.svg';
import balsamiq from '../../assets/svgs/icons/balsamiq.svg';
import blender from '../../assets/svgs/icons/blender.svg';
import cinema4d from '../../assets/svgs/icons/cinema4d.svg';
import clipstudiopaint from '../../assets/svgs/icons/clipstudiopaint.svg';
import cplusplus from '../../assets/svgs/icons/cplusplus.svg';
import css3 from '../../assets/svgs/icons/css3.svg';
import figma from '../../assets/svgs/icons/figma.svg';
import framer from '../../assets/svgs/icons/framer.svg';
import html5 from '../../assets/svgs/icons/html5.svg';
import java from '../../assets/svgs/icons/java.svg';
import javascript from '../../assets/svgs/icons/javascript.svg';
import mariadb from '../../assets/svgs/icons/mariadb.svg';
import neo4j from '../../assets/svgs/icons/neo4j.svg';
import opengl from '../../assets/svgs/icons/opengl.svg';
import python from '../../assets/svgs/icons/python.svg';
import react from '../../assets/svgs/icons/react.svg';
import sass from '../../assets/svgs/icons/sass.svg';
import sketch from '../../assets/svgs/icons/sketch.svg';
import spacy from '../../assets/svgs/icons/spacy.svg';
import tailwindcss from '../../assets/svgs/icons/tailwindcss.svg';
import vuedotjs from '../../assets/svgs/icons/vuedotjs.svg';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';

function Skills() {
  const ux_tags = ['User Research', 'Contextual Inquiry', 'Affinity Diagramming', 'Storyboarding', 'Wireframing', 'Prototyping', 'Usability Testing', 'Statistical Analysis', 'Thematic Analysis'];
  const design_tags = ['Responsive Design', 'Web Design', 'Android/iOS Design', 'Graphic Design', 'Interaction Design', 'Branding', 'Game Design', 'Pixel Art', '2D Animation', 'Character Design', 'Digital Illustration', '3D Modelling'];
  // https://simpleicons.org/ for brand icons
  const design_stack = [adobephotoshop, adobexd, aseprite, blender, clipstudiopaint, figma, sketch, balsamiq, cinema4d];
  const design_stack_names = ["Adobe Photoshop", "Adobe XD", "Aseprite", "Blender", "Clip Studio Paint", "Figma", "Sketch", "Balsamiq", "Cinema 4D"];

  const dev_tags = ['Web Development', 'Game Development', 'Software Engineering', 'Algorithms and Data Structures', '3D Modelling', 'Graphics Rendering', 'Agile Methodology', 'Documentation', 'Graph Databases'];
  const dev_stack = [html5, css3, javascript, react, java, python, cplusplus, mariadb, neo4j, opengl, spacy, sass, vuedotjs, tailwindcss, framer];
  const dev_stack_names = ["Html5", "Css3", "JavaScript", "React", "Java", "Python", "C++", "MariaDB", "Neo4J", "OpenGL", "spaCy", "Sass/Scss", "Vue.js", "Tailwind", "Framer"];

  const skill_variants = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0,
      transition: {
        type: 'spring',
        bounce: 0.2,
        duration: 1.8,
        delay: 0.2
      }
    },
  }

  const item_variants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0,
      transition: {
        duration: 0.4,
        delay: 0.6
      }
    },
  }

  return (<div className='skills-container section'>
      <div className='grid-container'>

        <motion.div className='skill-description'
          variants={skill_variants}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
        >
          <h6 className='mb-7'>Design Skills</h6>
          <p className='mb-6'>
            As a designer, I value creating comfortable interfaces that target user needs. 
          </p>
          <p className='mb-6'>
            Being a user myself, I understand the frustration with using clunky or confusing interfaces. So, I want to bridge the gap between user expectations and design. 
          </p>
          <p className='mb-6'>
            Every project has its unique requirements and challenges. Thus, no design process is the same and I learn to adapt.
          </p>
          <p>
            You can find more of my design projects on my <a className='p-link' href='https://dribbble.com/lemonsu' target='_blank' rel='noopener noreferrer'>Dribbble</a>.
          </p>
        </motion.div>

        <div className='tags-container'>
          <motion.h6 className='mb-4'
            variants={item_variants}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
          >
            UX
          </motion.h6>
          <motion.div className='tag-list' 
            variants={item_variants}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
          >
            {ux_tags.map((tag, index) => (
              <div key={index} className="tag">
                {tag}
              </div>
            ))}
          </motion.div>
          <motion.h6 className='mt-7 mb-4'
            variants={item_variants}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
          >
            Design
          </motion.h6>
          <motion.div className='tag-list' 
            variants={item_variants}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
          >
            {design_tags.map((tag, index) => (
              <div key={index} className="tag">
                {tag}
              </div>
            ))}
          </motion.div>
          <motion.h6 className='mt-7 mb-4'
            variants={item_variants}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
          >
            Stack
          </motion.h6>
          <motion.div className='icon-list'
            variants={item_variants}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
          >
            {design_stack.map((image, index) => (
              <img className='icon'
                data-tooltip-id='tooltip'
                data-tooltip-content={design_stack_names[index]} 
                data-tooltip-place='bottom' 
                key={index} 
                src={image} 
                alt={`Image ${index}`} 
              />
            ))}
          </motion.div>
        </div>

        <motion.div className='skill-description'
          variants={skill_variants}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
        >
          <h6 className='mb-8'>Tech Skills</h6>
          <p className='mb-6'>
            As a programmer, I value clean, efficient and well-documented code as it contributes to the user experience.
          </p>
          <p className='mb-6'>
            Being able to implement my ideas and turn them into reality motivates me to refine my programming skills.
          </p>
          <p>
            You can find more of my technical projects on my <a className='p-link' href='https://github.com/Lemonsr' target='_blank' rel='noopener noreferrer'>Github</a>.
          </p>
        </motion.div>
        
        <div className='tags-container'>
          <motion.h6 className='mb-4'
            variants={item_variants}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
          >
            Development
          </motion.h6>
          <motion.div className='tag-list' 
            variants={item_variants}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
          >
            {dev_tags.map((tag, index) => (
              <div key={index} className="tag">
                {tag}
              </div>
            ))}
          </motion.div>
          <motion.h6 className='mt-7 mb-4'
            variants={item_variants}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
          >
            Stack
          </motion.h6>
          <motion.div className='icon-list'
            variants={item_variants}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
          >
            {dev_stack.map((image, index) => (
              <img className='icon'
                data-tooltip-id='tooltip'
                data-tooltip-content={dev_stack_names[index]} 
                data-tooltip-place='bottom' 
                key={index} 
                src={image} 
                alt={`Image ${index}`} 
              />
            ))}
          </motion.div>
        </div>
      </div>
      
      <Tooltip id='tooltip' />
    </div>
  );
}

export default Skills;

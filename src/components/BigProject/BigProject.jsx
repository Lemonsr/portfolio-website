import React from 'react';
import './BigProject.scss';

function BigProject({ data }) {
  return (
    <div className='big-project-container'>
      <div className='text-container'>
        <h6 className='mb-2'>{ data.title }</h6>
        <p className='role mb-4'>{ data.role }</p>
        <p className='mb-8'>{ data.description }</p>
      </div>
      <img src={ data.img } alt={`Project ${ data.id }`}/>
    </div>
  );
}

export default BigProject;

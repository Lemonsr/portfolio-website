import React, { Component } from 'react';
import './Carousels.scss';
import Carousel from 'react-spring-3d-carousel';
import { v4 as uuidv4 } from 'uuid';
import { config } from 'react-spring';

export default class Carousels extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: false,
    config: config.slow,
    offsetFn: (offsetFromCenter) => ({ opacity: 1 - Math.abs(offsetFromCenter) / 2 })
  };

  slides = [
    {
      key: uuidv4(),
      content: <img className='slide' src='src/assets/images/Art1.png' alt='1' />
    },
    {
      key: uuidv4(),
      content: <img className='slide' src='src/assets/images/Art2.png' alt='2' />
    },
    {
      key: uuidv4(),
      content: <img className='slide' src='src/assets/images/Art3.png' alt='3' />
    },
    {
      key: uuidv4(),
      content: <img className='slide' src='src/assets/images/Art4.png' alt='4' />
    },
    {
      key: uuidv4(),
      content: <img className='slide' src='src/assets/images/Art5.png' alt='5' />
    }
    ].map((slide, index) => {
      return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };
  
  render() {
    return (
      <div className='carousel'>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
          offsetFn={this.state.offsetFn}
        />
      </div>
    );
  }
}

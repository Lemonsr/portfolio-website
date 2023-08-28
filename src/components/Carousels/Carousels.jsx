import React, { Component } from 'react';
import './Carousels.scss';
import Carousel from 'react-spring-3d-carousel';
import { v4 as uuidv4 } from 'uuid';
import { config } from 'react-spring';
import ArrowLeft from '../../assets/svgs/Arrow-Left.svg';
import ArrowRight from '../../assets/svgs/Arrow-Right.svg';

export default class Carousels extends Component {
  state = {
    activeSlide: 0,
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: false,
    config: config.slow,
    offsetFn: (offsetFromCenter) => ({ opacity: 1 - Math.abs(offsetFromCenter) / 2 })
  };

  slides = [
    {
      key: uuidv4(),
      content: <img className='slide' src='assets/images/Art1.webp' alt='1' />
    },
    {
      key: uuidv4(),
      content: <img className='slide' src='assets/images/Art2.webp' alt='2' />
    },
    {
      key: uuidv4(),
      content: <img className='slide' src='assets/images/Art3.webp' alt='3' />
    },
    {
      key: uuidv4(),
      content: <img className='slide' src='assets/images/Art4.webp' alt='4' />
    },
    {
      key: uuidv4(),
      content: <img className='slide' src='assets/images/Art5.webp' alt='5' />
    }
    ].map((slide, index) => {
      return { ...slide, onClick: () => this.setState({ activeSlide: index, goToSlide: index }) };
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
        <div className='controls'>
          <button
            onClick={() => {
              const { goToSlide } = this.state;
              const nextSlide = goToSlide === 0 ? 4 : goToSlide - 1;
              this.setState({ activeSlide: nextSlide, goToSlide: nextSlide });
            }}
          >
            <img className='arrow-left' src={ArrowLeft} alt='ArrowLeft'/>
          </button>
          <div className='dot-navigation'>
            {this.slides.map((_, index) => (
              <div
                key={index}
                className={`dot ${this.state.activeSlide === index ? 'active' : ''}`}
                onClick={() => this.setState({ activeSlide: index, goToSlide: index })}
              />
            ))}
          </div>
          <button
            onClick={() => {
              const { goToSlide } = this.state;
              const nextSlide = goToSlide === 4 ? 0 : goToSlide + 1;
              this.setState({ activeSlide: nextSlide, goToSlide: nextSlide });
            }}
          >
            <img className='arrow-right' src={ArrowRight} alt='ArrowRight'/>
          </button>
        </div>
      </div>
    ); 
  }
}

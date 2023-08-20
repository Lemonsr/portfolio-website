import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import VisibilitySensor from 'react-visibility-sensor';

const AnimatedLine = () => {
  const pathControls = useAnimation();

  const startDrawing = async (isVisible) => {
    if (isVisible) {
      await pathControls.start({ pathLength: 1, transition: { duration: 3 } });
    }
  };

  return (
    <div>
      <VisibilitySensor onChange={startDrawing} partialVisibility>
        {({ isVisible }) => (
          <svg width="495" height="28" viewBox="0 0 495 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M1.88208 4.16603C2.86317 5.73577 7.06161 5.11284 8.3534 5.12082C17.7261 5.17867 27.095 5.07894 36.4665 5.33299C66.5169 6.14761 96.5241 8.48606 126.588 8.88691C162.474 9.3654 198.351 8.90235 234.213 8.03821C285.86 6.79371 337.4 4.78745 388.994 2.46864C419.161 1.11283 449.593 2.25646 479.805 2.25646C483.723 2.25646 489.077 1.27538 492.747 2.7869C494.495 3.50651 489.265 4.40241 487.39 4.64342C477.537 5.91022 467.554 6.47843 457.633 6.81821C411.337 8.40367 365.066 10.0226 318.764 11.5921C263.695 13.4589 208.736 10.4386 153.746 14.6687C126.094 16.7957 98.4983 19.2158 70.8387 21.14C57.3627 22.0774 16.8048 21.3521 30.3134 21.3521C61.1336 21.3521 91.8765 24.2165 122.715 24.2165C167.377 24.2165 211.985 22.7531 256.597 22.3069C271.122 22.1617 285.332 20.9554 299.828 19.92C322.875 18.2738 346.32 19.4426 369.421 19.4426C393.308 19.4426 417.196 19.4426 441.083 19.4426C477.241 19.4426 368.761 20.1355 332.609 19.4956C282.677 18.6119 232.915 21.684 183.079 22.3069C167.591 22.5005 152.144 23.2617 136.613 23.2617C132.652 23.2617 123.698 23.3398 133.218 23.2617C161.942 23.0263 190.619 22.1494 219.361 22.36C274.384 22.7631 329.293 26.1261 384.326 26.1261C391.994 26.1261 399.596 25.1713 407.241 25.1713C422.058 25.1713 377.605 25.219 362.791 24.9591C297.078 23.8063 231.196 21.2825 165.468 22.36C148.351 22.6406 131.306 23.2617 114.175 23.2617C111.983 23.2617 109.79 23.2617 107.598 23.2617C91.0276 23.2617 140.729 22.3371 157.3 22.3069C209.037 22.2127 260.685 23.2485 312.399 24.6409C333.013 25.1958 353.665 25.6867 374.248 24.2165"
              stroke="url(#paint0_linear_916_1474)"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }} // Initially hide the line
              animate={pathControls}
            />
            <defs>
              <linearGradient id="paint0_linear_916_1474" x1="247.491" y1="1.80566" x2="247.491" y2="26.1261" gradientUnits="userSpaceOnUse">
                <stop stopColor="#CDAEC6" />
                <stop offset="1" stopColor="#673EBF" />
              </linearGradient>
            </defs>
          </svg>
        )}
      </VisibilitySensor>
    </div>
  );
};

export default AnimatedLine;

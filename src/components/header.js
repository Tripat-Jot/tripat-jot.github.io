import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import './header.css';
import BasicSpeedDial from './speeddail';
import data from './data.json';
import { blue } from '@mui/material/colors';
import SoftwareEngineerCode from './SoftwareEngineerCode';


const Header = () => {
  return (
    <>
      <motion.header
        id="home"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="header-content"
      >
       <h1
          style={{
            color: "blue",
            fontFamily: "Arial, sans-serif", 
            textAlign: "center", 
            borderRadius: "10px",
            fontSize: "120px",
            textShadow: "0 0 20px blue"
          }}
        >
            Hi,
        </h1>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Typewriter
            words={[`This is ${data.name}`, 'Welcome to my World of Code ;']}
            loop={Infinity}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {data.jobTitle}
        </motion.p>
        <div className="header-buttons">
          {data.buttons.map((button, index) => (
            <motion.a
              key={index}
              href={button.link}
              className="button"
              target={button.target}
              rel={button.rel}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.3 + 1.5, duration: 1 }}
            >
              {button.text}
            </motion.a>
          ))}
        </div>
      </motion.header>
      <motion.pre
        className="background-text"
        initial={{ opacity: 0.4 }} // Adjust opacity as needed
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
      >
        <Typewriter
          words={[`${SoftwareEngineerCode}`]}
          loop={Infinity}
          cursor
          cursorStyle='|'
          typeSpeed={1} // Adjust speed for typing effect
          deleteSpeed={0}
          delaySpeed={0}
        />
      </motion.pre>
    </>
  );
};

export default Header;

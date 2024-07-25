// import React from 'react';
// import './navbar.css';
// import Avatar from '@mui/material/Avatar';

// const Navbar = () => {
//   return (
//     <nav>
//       <ul>
//         <li><Avatar alt="Tripatjot Singh" src="../assests/profile_photo.jpeg" /></li>
//         <li><a href="#home">Home</a></li>
//         <li><a href="#about">About</a></li>
//         <li><a href="#projects">Projects</a></li>
//         <li><a href="#contact">Contact</a></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;


import React from 'react';
import './navbar.css';
import Avatar from '@mui/material/Avatar';

const Navbar = () => {
  return (
    <>
      <div className="hover-area"></div>
      <nav>
        <ul>
          <li><Avatar alt="Tripatjot Singh" src="../assets/profile_photo.jpeg" className="avatar" /></li>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

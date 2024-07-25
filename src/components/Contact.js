// import React from 'react';
// import './Contact.css';

// const Contact = () => {
//   return (
//     <section id="contact">
//       <div className="contact-links">
//         <a
//           href="mailto:triptjot3@gmail.com"
//           // target="_blank"
//           rel="noopener noreferrer"
//           aria-label="Email"
//           className="contact-icon email"
//         >
//           <i className="fas fa-envelope"></i>
//         </a>
//         <a
//           href="https://github.com/Tripat-Jot"
//           target="_blank"
//           rel="noopener noreferrer"
//           aria-label="GitHub"
//           className="contact-icon github"
//         >
//           <i className="fab fa-github"></i>
//         </a>
//         <a
//           href="https://www.linkedin.com/in/tripatjot-singh-876652172/"
//           target="_blank"
//           rel="noopener noreferrer"
//           aria-label="LinkedIn"
//           className="contact-icon linkedin"
//         >
//           <i className="fab fa-linkedin"></i>
//         </a>
//         <a
//           href="https://x.com/TripatjotSingh3"
//           target="_blank"
//           rel="noopener noreferrer"
//           aria-label="Twitter"
//           className="contact-icon twitter"
//         >
//           <i className="fab fa-twitter"></i>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Contact;




import React from 'react';
import './Contact.css';

const Contact = () => {
  const copyEmailToClipboard = () => {
    const email = "triptjot3@gmail.com";
    navigator.clipboard.writeText(email).then(
      () => {
        // Optional: Add feedback to the user
        alert('Email address copied to clipboard!');
      },
      (err) => {
        console.error('Failed to copy email address: ', err);
      }
    );
  };

  return (
    <section id="contact">
      <div className="contact-links">
        <a
          href="#"
          onClick={copyEmailToClipboard}
          aria-label="Email"
          className="contact-icon email"
        >
          <i className="fas fa-envelope"></i>
        </a>
        <a
          href="https://github.com/Tripat-Jot"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="contact-icon github"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/tripatjot-singh-876652172/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="contact-icon linkedin"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://x.com/TripatjotSingh3"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="contact-icon twitter"
        >
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;

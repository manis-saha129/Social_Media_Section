import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js'; // npm install typed.js


const Socials = () => {

  const typedEl = useRef(null);

  useEffect(() => {
    const strings = ['#Instagram', '#LinkedIn', '#YouTube', '#Telegram', '#Twitter'];
    const colors = ['instagram', 'linkedin', 'youtube', 'telegram', 'twitter'];

    const typed = new Typed(typedEl.current, {
      strings: strings.map((string, index) => `<span class="${colors[index]}">${string}</span>`),
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
    <p className="topic">JOIN US ON</p>
    <p className="type"><span ref={typedEl}/></p>
    <ul>
      <li className="item">
        <a href="https://www.instagram.com/spectov_official?igsh=dzRhdmcyYXFsM2xo" target="_blank" >
          <i className="fa-brands fa-instagram icon"></i>
        </a>
        <p className='socials'>Instagram</p>
      </li>

      <li className="item">
        <a href="https://www.linkedin.com/company/specto-v/" target="_blank">
          <i className="fa-brands fa-linkedin icon"></i>
        </a>
        <p className='socials'>LinkedIn</p>
      </li>

      <li className="item">
        <a href="#" target="_blank">
          <i className="fa-brands fa-youtube icon"></i>
        </a>
        <p className='socials'>Youtube</p>
      </li>

      <li className="item">
        <a href="#" target="_blank">
          <i className="fa-brands fa-telegram icon"></i>
        </a>
        <p className='socials'>Telegram</p>
      </li>

      <li className="item">
        <a href="#" target="_blank">
          <i className="fa-brands fa-x-twitter icon"></i>
        </a>
        <p className='socials'>Twitter</p>
      </li>
    </ul>
    </>
  );
};

export default Socials;
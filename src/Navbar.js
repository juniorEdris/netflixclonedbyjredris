import React, { useEffect, useState } from 'react';
import './navbar.css';

function Navbar() {
  const avatar_img =
    'https://scontent.fcgp3-1.fna.fbcdn.net/v/t1.0-1/p160x160/118433876_754996365288031_4878520202629184744_n.jpg?_nc_cat=100&_nc_sid=dbb9e7&_nc_eui2=AeH9sSX_QaJE7SBHt06IsMJnuAqCZSOiOJi4CoJlI6I4mHyE5AfzBT_FNFfDCw9DQ5g9nzv_7vvmDKJdc2zBVEdt&_nc_ohc=gu0hPbkB_aIAX-YLAOg&_nc_ht=scontent.fcgp3-1.fna&tp=6&oh=2c553a45fa751b3359f5c9cf3f56a5dd&oe=5FA5454C';
  const netflix_logo = 'https://i.dlpng.com/static/png/6387972_preview.png';
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <div className={`navbar ${show && 'navbar__black'}`}>
      <img src={netflix_logo} alt="Netflix logo" className="navbar__logo" />
      <a href="https://www.facebook.com/eftekar.raghib.1" title='Click to contact the programmer'>
        <img src={avatar_img} alt="profilepicture" className="navbar__avatar" />
      </a>
    </div>
  );
}

export default Navbar;

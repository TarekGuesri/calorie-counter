import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Footer = () => {
  const [isHome, setIsHome] = useState(true);
  const history = useHistory();

  useEffect(() => {
    return history.listen((location) => {
      if (location.pathname === '/') {
        setIsHome(true);
      } else {
        setIsHome(false);
      }
    });
  }, [history]);

  return (
    <footer className={`footer${isHome ? ' home-footer' : ''}`}>
      <div className="container p-4">
        <div className="row">
          <div className="col text-center">
            <p className="copyrights">
              © 2021 TARIQ LAMIN GUESRI. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <a
              href="https://github.com/TarekGuesri/calorie-counter"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fab fa-github"></i> Github
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

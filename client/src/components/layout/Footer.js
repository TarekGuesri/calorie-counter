import React from 'react';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container p-3">
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

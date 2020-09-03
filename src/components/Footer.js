import React from 'react';
import ContactForm from './ContactForm';
import config from '../../config';
export default function Footer() {
  return (
    <div id="footer">
      <div className="container medium">
        <header className="major last">
          <h2>Contact</h2>
        </header>

        <p>Visit our social media to get in touch!</p>

        <ul className="icons">
          {config.socialLinks.map(social => {
            const { icon, name, url } = social;
            return (
              <li key={url}>
                <a href={url} className={`icon ${icon}`}>
                  <span className="label">{name}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="copyright">
          <li>&copy; Nathan Laha. All rights reserved.</li>
          <li>
            Design: <a href="http://html5up.net">HTML5 UP</a> and Nathan Laha
          </li>
        </ul>
      </div>
    </div>
  );
}

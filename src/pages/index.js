import React from 'react';

import Layout from '../components/Layout';

import { Link } from 'gatsby';
import Header from '../components/Header';
import Footer from '../components/Footer';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';

const IndexPage = () => (
  <Layout>
    <Header />

    <div id="main">
      <header className="major container medium">
        <h2>Game Development</h2>
        <h2>Programming</h2>
        <h2>Graphic Art</h2>
      </header>
      <ul className="actions special">
        <li>
          <a href="http://bit.ly/BHS_ComputingClub" className="button">
            Join us on Teams!
          </a>
        </li>
      </ul>

      <div className="box alt container">
        <section className="feature left">
          <a href="/#" className="image icon fa-code">
            <img src={pic1} alt="" />
          </a>
          <div className="content">
            <h3>A Place for All Computing</h3>
            <p>
              GCC Provides a place for people of all skill levels to meet and
              share ideas about programming, art and much more!
            </p>
          </div>
        </section>
        <section className="feature right">
          <a href="/#" className="image icon fa-desktop">
            <img src={pic2} alt="" />
          </a>
          <div className="content">
            <h3>Project Idea?</h3>
            <p>
              Do you have an idea for an app, game or programming project but
              don't know where to start? At GCC, we're always looking for
              interesting ideas and will do our best to help out.
            </p>
          </div>
        </section>
        <section className="feature left">
          <a href="/#" className="image icon fa-comments">
            <img src={pic3} alt="" />
          </a>
          <div className="content">
            <h3>Join GCC</h3>
            <p>
              The best way to get involved with GCC is to join our Microsoft
              Teams group. More information will be posted about that as the
              school year starts.
            </p>
          </div>
        </section>
      </div>

      <footer className="major container medium">
        <h3>Club Archive</h3>
        <p>
          Make something cool in GCC? We'll show it off on our club project
          page!
        </p>
        <ul className="actions special">
          <li>
            <Link to="/Elements" className="button">
              Projects
            </Link>
          </li>
        </ul>
      </footer>
    </div>
    <Footer />
  </Layout>
);

export default IndexPage;

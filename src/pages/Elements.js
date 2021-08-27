import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="box container">
        <header>
          <h2>Club Projects</h2>
        </header>
        <section>
          <header>
            <p>Check out our amazing work!</p>
          </header>
          <p>
            Talk to one of the club leaders if you would like your project to be
            listed on this page. It's ok if you worked on it before joining GCC,
            we want to showcase the best work from the BHS community.
          </p>
        </section>
        <section>
          <header>
            <h3>War Map</h3>
          </header>
          <blockquote>
            "Political data analysis for everyone."
            <br></br>
            Credit:
            <a href="https://nlaha.com">Nathan Laha</a> & Ransom Miller
            <br></br>
            <br></br>
              <a href="https://map.nlaha.com/">
                Check it out
              </a>
            <br></br>
          </blockquote>
        </section>
        <section>
          <header>
            <h3>House Match</h3>
          </header>
          <blockquote>
            "A twist on the match 3 genre with fast paced strategic gameplay. Released on App Store and Google Play!"
            <br></br>
            Credit:
            <a href="https://github.com/bcaffee">Ben Caffee</a>
            <br></br>
            <br></br>
              <a href="https://www.frogrockstudio.com/house-match/">
                Check it out
              </a>
            <br></br>
          </blockquote>
        </section>
      </div>
    </div>
  </Layout>
);

export default IndexPage;

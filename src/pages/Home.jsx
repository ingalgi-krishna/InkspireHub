import React from 'react';
import BlogList from '../components/BlogList';
import Banner from '../components/Banner';
import "../css/landing.css";
const Home = () => {
  return(
  <div className="landing-page">
    <Banner></Banner>
  <div className="page">
    <div className="content">
      <h1> Search the popular Blogs!</h1>
        <BlogList></BlogList>
        <h3>Why We Built This Blogging Website</h3>
      <div className="page1">
      <div className="image">
      
      </div>
        <p>
          Our mission is to provide a space for individuals to share their
          thoughts, experiences, and expertise with the world. We believe in
          the power of storytelling and community, and this platform is
          designed to empower writers and readers alike.
        </p>
        <p>
          Whether you're a seasoned blogger or just starting out, we're here
          to support you on your journey. Join us in creating a vibrant and
          inclusive community where ideas are shared, connections are made,
          and voices are heard.
        </p>
      </div>
    </div>
  </div>

  <div className="page2">
    <h3>Why We Started</h3>
    <p>
      We embarked on this journey because we saw a need for a platform that
      fosters meaningful connections and encourages authentic expression. In
      a world inundated with noise, we wanted to create a space where
      individuals can engage in thoughtful discussions, share their
      passions, and inspire others. Through this platform, we aim to empower
      voices from diverse backgrounds, amplify marginalized perspectives,
      and build a community grounded in empathy and understanding.
    </p>

    <button
      className="write-blog-button"
      onClick={() => loginWithRedirect()}
    >
      Get Started!
    </button>

  </div>
</div>
);
};

export default Home;

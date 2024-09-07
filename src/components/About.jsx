import React from 'react';
import ReviewCard from "../components/ReviewCard";
import logo from '../assets/logo.png';
import '../css/about.css'
const About = () => {
  return (
    <div>
   <div className="about-us">
            <div className="left-column">
                <img src={logo} alt="Inkspire Hub Logo" className="logo" />
                <h1>Welcome to Inkspire Hub</h1>
                <p>At Inkspire Hub, we believe in the transformative power of sharing ideas and experiences. We provide a vibrant space for writers to express their thoughts across a spectrum of topics, connecting readers and writers around the globe.</p>
                <h2>Our Journey</h2>
                <p>It all started with a simple idea: to create a space where anyone can publish their thoughts and feel heard. From our modest beginnings to becoming a go-to destination for passionate writers, our journey has been incredible. Each story shared here adds a unique thread to the diverse tapestry that is Inkspire Hub.</p>
                <h2>Meet Our Team</h2>
                <p>Our team is made up of enthusiastic storytellers, editors, designers, and developers, all united by a passion for change through storytelling. We're from all over the world, bringing diverse perspectives to our work every day.</p>
            </div>
            <div className="right-column">
                <h2>Our Mission and Vision</h2>
                <p>We aim to inspire creativity and foster dialogue. Our vision for the future is not only to expand our reach but also to deepen the impact of every story shared. We dream of a world more connected through words.</p>
                <h2>What We Offer</h2>
                <p>Inkspire Hub is more than just a blogging platform. It's a community that offers tools for engagement, feedback, and growth. Here, you can share your thoughts, polish your writing with editor feedback, and gain followers.</p>
                <h2>From Our Users</h2>
                <ReviewCard
                    user="Jamie L."
                    review="Inkspire Hub has become a part of my daily reading ritual. The wide range of topics and insightful writing keeps me coming back."
                    rating={5}
                />
                <ReviewCard
                    user="Alex P."
                    review="As a writer, finding an audience can be the hardest part. Inkspire Hub helped me find mine."
                    rating={4}
                />
                <h2>Looking Ahead</h2>
                <p>As we look to the future, we're excited to introduce more features that make writing and reading more enjoyable and interactive. Stay tuned for more ways to connect and inspire!</p>
            </div>
        </div>

    </div>
  );
};

export default About;

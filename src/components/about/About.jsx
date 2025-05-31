import React, { Component } from 'react';
import classes from './About.module.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

class About extends Component {
  render() {
    return (
      <div className={classes.box} id='about'>
        {/* <ScrollAnimation
          offset={0}
          animateIn='fadeInLeft'
          duration={2.4}
          animateOnce={true}
          initiallyVisible={true}
        > */}
        <span className={classes.head}>ABOUT ME</span>
        <h2 className={classes.heading}>Who Am I?</h2>
        <div className={classes.About}>
          <p>
          Hi! My name is <b>Kumudini Arun Gholap</b>. I am a passionate developer pursuing B.Tech in Computer Science and Engineering at <b>NIT Surat</b>. I enjoy building <b>full-stack web applications</b> and exploring the exciting world of <b>data science</b> and <b>machine learning.</b> 😊

 :)
          </p>
          <p className={classes.br}>
          
I love diving into new technologies and constantly challenge myself to build innovative and meaningful projects. With a strong foundation in frontend and backend development, I strive to write clean, efficient, and modular code. I'm a curious learner, a problem-solver at heart, and an active contributor on platforms like GitHub and LeetCode.

Whether it's crafting user-friendly interfaces, building secure backend systems, or working on real-world analytics, I'm always ready to explore, learn, and grow. Let’s build something amazing!
          </p>
        </div>
        {/* </ScrollAnimation> */}
      </div>
    );
  }
}

export default About;

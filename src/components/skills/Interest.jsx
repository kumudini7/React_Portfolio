import React, { Component } from 'react';
import classes from './Interest.module.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

export default function Interest() {
  return (
    <div className={classes.box} id='interest'>
      {/* <ScrollAnimation
        offset={0}
        animateIn='fadeInLeft'
        duration={2.4}
        animateOnce={true}
        initiallyVisible={true}
      > */}
      <span className={classes.head}>WHAT I DO?</span>
      <h2 className={classes.heading}>HERE ARE SOME OF MY EXPERTISE</h2>
      <div className={classes.Interest}>
        {/* <ScrollAnimation
            offset={0}
            animateIn='fadeInLeft'
            duration={2.4}
            animateOnce={true}
            initiallyVisible={true}
          > */}
        <div className={classes.web}>
          <h3>Data Science & AI</h3>
          <p>
            Python, Pandas, NumPy, Scikit-learn, Matplotlib, Statsmodels,Supervised & Unsupervised Learning, Regression, Classification, Clustering,Exploratory Data Analysis (EDA), Jupyter Notebook, Google Colab.
          
          </p>
        </div>
        {/* </ScrollAnimation>
          <ScrollAnimation
            offset={0}
            animateIn='fadeInLeft'
            duration={2.4}
            animateOnce={true}
            initiallyVisible={true}
          > */}
        <div className={classes.app}>
          <h3>Web Development</h3>
          <p>
            Javascript/ Typescript, HTML/ CSS, ReactJs, Next.js,  Tailwind
            CSS,Node.js, Express.js, Socket.io, REST APIs,React-Bootstrap,,VueJs


          </p>
        </div>
        {/* </ScrollAnimation>
          <ScrollAnimation
            offset={0}
            animateIn='fadeInLeft'
            duration={2.4}
            animateOnce={true}
            initiallyVisible={true}
          > */}
        <div className={classes.other}>
          <h3>Expanded Expertise</h3>
          <p>
            AWS, Docker, GitHub, Frontend System Design, Express.js, Node.js, MongoDB, MERN Stack,
            SQL, NOSQL, Socket.io, Open Source Contribution.
          </p>
        </div>
        {/* </ScrollAnimation> */}
      </div>
      {/* </ScrollAnimation> */}
    </div>
  );
}

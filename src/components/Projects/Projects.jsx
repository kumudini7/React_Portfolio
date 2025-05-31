import React from 'react';
import 'animate.css/animate.min.css';
import Tilt from 'react-parallax-tilt';
// import ScrollAnimation from 'react-animate-on-scroll';

import classes from './Projects.module.css';

import profilee from '../images/quizapp.jpg';

import docker from '../images/docker.jpg';
import github from '../images/github.png';
import musicapp from '../images/musicapp.jpg';
import GWOC from '../images/MUDBERRY.jpg';
// Web projects
const webItem = [
  {
    link: 'https://rhythmnest.onrender.com/',
    title: 'Rhythmnest - MUSIC APP',
    techStack: 'HTML, CSS, JS, jinja2, Python, flask,SQLite3',
    image: musicapp,
    color: '#E5E483',
    githubLink: 'https://github.com/kumudini7/music_app'
  },
  {
    link: 'https://mad1-quiz-master.onrender.com/',
    title: 'QUIZ APP',
    techStack: 'HTML, CSS, JS, jinja2, Python, flask,SQLite3',
    desc: 'Profilee is an open source profile link bio page builder',
    image: profilee,
    color: '#FF0099',
    githubLink: 'https://github.com/kumudini7/quiz_app'
  },
   {
    link: 'https://yashankizala.github.io/GWOC-2024/',
    title: 'MUDBERRY POTTERY STUDIO',
    techStack: 'HTML, CSS, JS',
    desc: 'Profilee is an open source profile link bio page builder',
    image: GWOC,
    color: '#FEA1A1',
    githubLink: 'https://github.com/kumudini7/GWOC24'
  },
     {
    link: 'https://github.com/kumudini7/docker_app',
    title: 'FILE STORAGE CLOUD',
    techStack: 'HTML, CSS, JS',
    desc: 'Profilee is an open source profile link bio page builder',
    image: docker,
    color: '#BE55C1',
    githubLink: 'https://github.com/kumudini7/docker_app'
  },



];



export default function Projects() {
  const getProjectCard = (cardItem) => {
    return (
      <Tilt perspective={900} glareEnable={true} glareMaxOpacity={0.45}>
        <li style={{ backgroundColor: cardItem.color, borderRadius: '21px' }}>
          <a href={cardItem.link} className={classes.card} target='_blank'>
            <img src={cardItem.image} className={classes.card__image} alt='' />
          </a>
          <div
            onClick={() => {
              if (cardItem?.githubLink) window.open(cardItem?.githubLink, '_blank');
            }}
            className={classes.card__title__container}
          >
            <h3 className={classes.card__title}>{cardItem.title}</h3>
            {cardItem?.githubLink && <img src={github} className={classes.card__title__img} />}
          </div>
        </li>
      </Tilt>
    );
  };

  return (
    <div className={classes.box} id='projects'>
      {/* <ScrollAnimation
        offset={0}
        animateIn='fadeInLeft'
        duration={2.4}
        animateOnce={true}
        initiallyVisible={true}
      > */}
      <span className={classes.head}>MY WORK</span>
      <h2 className={classes.heading}>WEB APP PROJECTS</h2>
      <ul className={classes.cards}>
        {webItem.map((item) => {
          return getProjectCard(item);
        })}
      </ul>

    </div>
  );
}

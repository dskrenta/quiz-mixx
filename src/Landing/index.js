import React from 'react';
import { Link } from 'react-router-dom';

import { GridList, GridTile } from 'material-ui/GridList';

import './index.css';

const quizzes = [
  {
    title: 'How Much Do You Know About Sharks?',
    image: 'https://proxy.topixcdn.com/ipicimg/30BQNB3UFM1J45DB-cp0x119x1920x1079-fill390x190x',
    id: 33434
  },
  {
    title: 'How Much Do You Know About Sharks?',
    image: 'https://proxy.topixcdn.com/ipicimg/30BQNB3UFM1J45DB-cp0x119x1920x1079-fill390x190x',
    id: 33434
  },
  {
    title: 'How Much Do You Know About Sharks?',
    image: 'https://proxy.topixcdn.com/ipicimg/30BQNB3UFM1J45DB-cp0x119x1920x1079-fill390x190x',
    id: 33434
  },
  {
    title: 'How Much Do You Know About Sharks?',
    image: 'https://proxy.topixcdn.com/ipicimg/30BQNB3UFM1J45DB-cp0x119x1920x1079-fill390x190x',
    id: 33434
  },
  {
    title: 'How Much Do You Know About Sharks?',
    image: 'https://proxy.topixcdn.com/ipicimg/30BQNB3UFM1J45DB-cp0x119x1920x1079-fill390x190x',
    id: 33434
  },
  {
    title: 'How Much Do You Know About Sharks?',
    image: 'https://proxy.topixcdn.com/ipicimg/30BQNB3UFM1J45DB-cp0x119x1920x1079-fill390x190x',
    id: 33434
  },
  {
    title: 'How Much Do You Know About Sharks?',
    image: 'https://proxy.topixcdn.com/ipicimg/30BQNB3UFM1J45DB-cp0x119x1920x1079-fill390x190x',
    id: 33434
  },
  {
    title: 'How Much Do You Know About Sharks?',
    image: 'https://proxy.topixcdn.com/ipicimg/30BQNB3UFM1J45DB-cp0x119x1920x1079-fill390x190x',
    id: 33434
  }
];

const Landing = ({ match }) => (
  <div className="landing">
    <GridList cols={4}>
      {quizzes.map((quiz, index) => (
        <Link to={`/quiz/${quiz.id}`} key={index}>
          <GridTile
            title={quiz.title}
          >
            <img src={quiz.image} alt={quiz.image}/>
          </GridTile>
        </Link>
      ))}
    </GridList>
  </div>
);

export default Landing;

import React from 'react';

import {StatusBar} from 'react-native';

import {Container, Poster, Gradient} from './styles';

import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Movies from '../../components/Movies';

import posterImg from '../../assets/images/poster.jpg';

const data = [
  {
    label: 'Baseados em fatos reais',
    key: 1,
    movies: [
      {key: 1, image: require('../../assets/images/movie1.jpg')},
      {key: 2, image: require('../../assets/images/movie2.jpg')},
      {key: 3, image: require('../../assets/images/movie3.jpg')},
      {key: 4, image: require('../../assets/images/movie4.jpg')},
    ],
  },
  {
    label: 'Lançamentos',
    key: 2,
    movies: [
      {key: 5, image: require('../../assets/images/movie5.jpg')},
      {key: 6, image: require('../../assets/images/movie6.jpg')},
      {key: 8, image: require('../../assets/images/movie8.jpg')},
      {key: 18, image: require('../../assets/images/movie18.jpg')},
    ],
  },
  {
    label: 'Herois',
    key: 3,
    movies: [
      {key: 17, image: require('../../assets/images/movie17.jpg')},
      {key: 14, image: require('../../assets/images/movie14.jpg')},
      {key: 11, image: require('../../assets/images/movie11.jpg')},
      {key: 9, image: require('../../assets/images/movie9.jpg')},
      {key: 10, image: require('../../assets/images/movie10.jpg')},
      {key: 12, image: require('../../assets/images/movie12.jpg')},
      {key: 7, image: require('../../assets/images/movie7.jpg')},
      {key: 15, image: require('../../assets/images/movie15.jpg')},
      {key: 16, image: require('../../assets/images/movie16.jpg')},
    ],
  },
];

const Home = () => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Container>
        <Poster resizeMode="cover" source={posterImg}>
          <Gradient
            locations={[0, 0.2, 0.6, 0.93]}
            colors={[
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0)',
              'rgba(0,0,0,0)',
              'rgba(0,0,0,1)',
            ]}>
            <Header />
            <Hero />
          </Gradient>
        </Poster>
        {data.map((item) => (
          <Movies key={item.key} label={item.label} movies={item.movies} />
        ))}
      </Container>
    </>
  );
};

export default Home;

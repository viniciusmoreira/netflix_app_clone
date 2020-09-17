import React from 'react';

import {Container, Label, MovieScroll, MovieCard, MoviePoster} from './styles';

const Movies = ({label, movies}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <MovieScroll horizontal>
        {movies.map((movie) => (
          <MovieCard key={movie.key}>
            <MoviePoster resizeMode="cover" source={movie.image} />
          </MovieCard>
        ))}
      </MovieScroll>
    </Container>
  );
};

export default Movies;

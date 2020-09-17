import React from 'react';

import {Container, Logo, Menu} from './styles';

import logoImg from '../../assets/images/logo.png';

const Header = () => {
  return (
    <Container>
      <Logo resizeMode="contain" source={logoImg} />
      <Menu>Séries</Menu>
      <Menu>Filmes</Menu>
      <Menu>Minha lista</Menu>
    </Container>
  );
};

export default Header;

import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  Container,
  Banner,
  Tags,
  MenuTag,
  Separator,
  MenuHero,
  Button,
  TextButton,
  Play,
  TextButtonPlay,
} from './styles';

import bannerImg from '../../assets/images/banner.png';

const Hero = () => {
  return (
    <Container>
      <Banner resizeMode="contain" source={bannerImg} />
      <Tags>
        <MenuTag>Empolgante</MenuTag>
        <Separator />
        <MenuTag>Mistério</MenuTag>
      </Tags>
      <MenuHero>
        <Button>
          <Feather name="plus" size={26} color="#FFF" />
          <TextButton>Minha lista</TextButton>
        </Button>
        <Play>
          <Ionicons name="ios-play" size={26} />
          <TextButtonPlay>Assistir</TextButtonPlay>
        </Play>
        <Button>
          <Feather name="info" size={26} color="#FFF" />
          <TextButton>Saiba mais</TextButton>
        </Button>
      </MenuHero>
    </Container>
  );
};

export default Hero;

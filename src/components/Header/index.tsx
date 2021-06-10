import React from 'react';
import { Image } from 'react-native';
import Container from './styles';
import Picture from '~/assets/picture_profile.png';
import Return from '~/assets/arrow_back.png';

const Header: React.FC = () => (
  <Container>
    <Image source={Return} />
    <Image source={Picture} />
  </Container>
);

export default Header;

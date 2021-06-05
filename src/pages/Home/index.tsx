import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Button from '~/components/Button';

import Container from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Button onPress={() => navigation.navigate('Splash')}>Splash</Button>
    </Container>
  );
};

export default Home;

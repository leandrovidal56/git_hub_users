import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Button from '~/components/Button';
import { Container } from './styles';

const Splash: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Button onPress={() => navigation.goBack()}>Home</Button>
    </Container>
  );
};

export default Splash;

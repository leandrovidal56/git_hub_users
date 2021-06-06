import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import GitHub from '~/assets/github.png';

import Button from '~/components/Button';

import {
  Container,
  TextHeader,
  TextDescription,
  InputName,
  TextFooter,
  Top,
  Center,
  Footer,
} from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Top>
        <Image source={GitHub} />
      </Top>
      <Center>
        <TextHeader>Buscar usuário</TextHeader>
        <TextDescription>
          Crie sua conta através do seu usuário do GitHub
        </TextDescription>
        <InputName>@username</InputName>
        <Button onPress={() => navigation.navigate('Splash')}>Cadastrar</Button>
      </Center>
      <Footer>
        <TextFooter>Termos de política e privacidade </TextFooter>
      </Footer>
    </Container>
  );
};

export default Home;

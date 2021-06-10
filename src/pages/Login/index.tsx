import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import GitHub from '~/assets/github.png';

import {
  Header,
  BoxInput,
  Button,
  TextHeader,
  TextDescription,
  TextFooter,
} from '~/components/index';
import { Container, Content, Top, Center, Footer } from './styles';

const Splash: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Header />
      <Content>
        <Top>
          <Image source={GitHub} />
        </Top>
        <Center>
          <TextHeader header="Buscar usuários" />
          <TextDescription description="Crie sua conta através do seu usuário do GitHub" />
          <BoxInput placeholder="@username" />
          <Button onPress={() => navigation.goBack()}>Cadastrar</Button>
        </Center>
        <Footer>
          <TextFooter footer="Termos de política e privacidade" />
        </Footer>
      </Content>
    </Container>
  );
};

export default Splash;

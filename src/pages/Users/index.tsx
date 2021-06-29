import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, ScrollView } from 'react-native';
import GitHubSmall from '~/assets/github_small.png';

import { Header, ButtonSmall, Return, CardUser } from '~/components/index';

import { Container, Content } from './styles';

const Users: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Header>
        <Return>
          <Image source={GitHubSmall} />
        </Return>
        <ButtonSmall onPress={() => navigation.navigate('Login')}>
          Adicionar novo
        </ButtonSmall>
      </Header>
      <ScrollView>
        <Content>
          <CardUser
            HeaderText="John Doe Santos"
            CompanyText="GO.K Digital"
            PlaceText="São Paulo, Brazil"
            StarText="2"
          />
          <CardUser
            HeaderText="John Doe Santos"
            CompanyText="GO.K digital"
            PlaceText="São Paulo"
            StarText="2"
          />
          <CardUser
            HeaderText="John Doe Santos"
            CompanyText="GO.K Digital"
            PlaceText="São Paulo, Brazil"
            StarText="2"
          />
          <CardUser
            HeaderText="John Doe Santos"
            CompanyText="GO.K Digital"
            PlaceText="São Paulo, Brazil"
            StarText="2"
          />
          <CardUser
            HeaderText="John Doe Santos"
            CompanyText="GO.K digital"
            PlaceText="São Paulo"
            StarText="2"
          />
        </Content>
      </ScrollView>
    </Container>
  );
};
export default Users;

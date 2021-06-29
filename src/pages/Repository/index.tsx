import React from 'react';
import { Image, ScrollView } from 'react-native';
import { ArrowBack, PictureProfile } from '~/assets/index';

import { Header, Return, CardRepo } from '~/components/index';

import { Container, Content } from './styles';

const Repository: React.FC = () => {
  return (
    <Container>
      <Header>
        <Return>
          <Image source={ArrowBack} />
        </Return>
        <Image source={PictureProfile} />
      </Header>
      <ScrollView>
        <Content>
          <CardRepo
            ProjectName="project-name-java"
            RepositoryDescription="Project application with component app with React Native"
            TagNameOne="#javaScript"
            TagNameTwo="#Front-End"
            LanguageText="React Native"
            StarText="2"
            PeopleText="5"
            Day="2 dias atrás"
          />
          <CardRepo
            ProjectName="project-name-java"
            RepositoryDescription="Project application with component app with React Native"
            TagNameOne="#javaScript"
            TagNameTwo="#Front-End"
            LanguageText="React Native"
            StarText="2"
            PeopleText="5"
            Day="2 dias atrás"
          />
          <CardRepo
            ProjectName="project-name-java"
            RepositoryDescription="Project application with component app with React Native"
            TagNameOne="#javaScript"
            TagNameTwo="#Front-End"
            LanguageText="React Native"
            StarText="2"
            PeopleText="5"
            Day="2 dias atrás"
          />
          <CardRepo
            ProjectName="project-name-java"
            RepositoryDescription="Project application with component app with React Native"
            TagNameOne="#javaScript"
            TagNameTwo="#Front-End"
            LanguageText="React Native"
            StarText="2"
            PeopleText="5"
            Day="2 dias atrás"
          />
        </Content>
      </ScrollView>
    </Container>
  );
};
export default Repository;
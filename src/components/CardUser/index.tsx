import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Profile,
  Arrowright,
  Delete,
  Company,
  Place,
  Star,
} from '~/assets/index';

import { TextDescription } from '~/components/index';

import {
  Card,
  Line,
  LineRight,
  LineCenter,
  TextHeader,
  ArrowStyle,
  LineDescription,
  Description,
} from './styles';

interface Text {
  HeaderText: string;
  CompanyText: string;
  PlaceText: string;
  StarText: string;
}

const CardUser: React.FC<Text> = ({
  HeaderText,
  CompanyText,
  PlaceText,
  StarText,
}) => {
  const navigation = useNavigation();
  return (
    <Card>
      <Line>
        <LineRight>
          <Image width={80} height={80} source={Profile} />
          <LineCenter>
            <TextHeader>
              {HeaderText}
              <ArrowStyle onPress={() => navigation.navigate('Repository')}>
                <Image source={Arrowright} />
              </ArrowStyle>
            </TextHeader>
            <TextDescription description="@johndoesantos" />
          </LineCenter>
        </LineRight>
        <Image width={100} height={50} source={Delete} />
      </Line>
      <LineDescription>
        <Image source={Company} />
        <Description>{CompanyText}</Description>
        <Image source={Place} />
        <Description>{PlaceText}</Description>
        <Image source={Star} />
        <Description>{StarText}</Description>
      </LineDescription>
    </Card>
  );
};

export default CardUser;
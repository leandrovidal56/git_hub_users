import styled from 'styled-components/native';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  background: #ffffff;
  flex: 1;
  padding: ${16 + getStatusBarHeight()}px 30px ${16 + getBottomSpace()}px;
  align-items: center;
  justify-content: space-between;
`;

export const Top = styled.View`
  padding-top: 72px;
  height: 80px;
`;
export const Center = styled.View`
  justify-content: center;
  width: 100%;
`;
export const Footer = styled.View`
  justify-content: flex-end;
`;

export const TextHeader = styled.Text`
  color: #000000;
  font-size: 22px;
  font-style: normal;
  line-height: 27.61px;
  font-weight: 700;
`;
export const TextDescription = styled.Text`
  margin-top: 10px;
  color: #7e7e7e;
  font-weight: 400;
  font-size: 16px;
  font-style: normal;
  line-height: 20.08px;
`;

export const InputName = styled.TextInput`
  width: 100%;
  margin-top: 32px;
  margin-bottom: 24px;
  height: 40px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
`;
export const TextFooter = styled.Text`
  justify-content: center;
  color: #7e7e7e;
  font-weight: 400;
  font-size: 16px;
  font-style: normal;
  line-height: 20px;
`;

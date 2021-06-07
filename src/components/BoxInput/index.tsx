import React from 'react';
import { TextInputProps, Image } from 'react-native';
import { Box, InputName } from './styles';
import UserLogo from '~/assets/account_circle.png';

interface Text extends TextInputProps {
  placeholder?: string;
  imageName?: string;
}

const BoxInput: React.FC<Text> = ({ ...rest }) => (
  <Box>
    <Image source={UserLogo} />
    <InputName {...rest} />
  </Box>
);

export default BoxInput;

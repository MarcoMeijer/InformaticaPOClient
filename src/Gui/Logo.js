import * as React from 'react';
import { Image } from 'react-native';
import logoPng from '../afbeeldingen/logo.png';

export default function Logo() {
  return (<Image
    style={{ width: 169, height: 74 }}
    source={logoPng}
  />);
}

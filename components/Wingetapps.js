import React from 'react';
import { ScrollView } from 'react-native';
import Appcard from './Appcard';
import appData from '../appData.json';

export default function Wingetapps() {
  return (
    <ScrollView>
      {appData.map((app, index) => (
        <Appcard key={index} {...app} />
      ))}
    </ScrollView>
  );
}

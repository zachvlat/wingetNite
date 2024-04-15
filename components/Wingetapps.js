import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Appcard from './Appcard';
import axios from 'axios';

export default function Wingetapps() {
  const [appData, setAppData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://raw.githubusercontent.com/zachvlat/wingetNite/master/appData.json');
      setAppData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      {appData.map((app, index) => (
        <Appcard
          key={index}
          {...app}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    paddingBottom: 80,
  },
});

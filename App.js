import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

import data from './attractions.json';

const cityIcon = require('./images/chicago.png');
/*
const row = (item) => (
  <View style={styles.row}>
    <View style={styles.iconContainer}>
      <Image source={cityIcon} style={styles.icon} />
    </View>
    <View>
      <Text style={styles.attraction}>{item.name}</Text>
    </View>
    <View style={styles.info}>
      <Text>{item.modifiedURL}</Text>
      <Text style={styles.modifiedURL}>{item.modifiedURL}</Text>
    </View>
  </View>
);
*/

const row = ({item}) => (
  <View style={styles.row}>
    <View style={styles.iconContainer}>
      <Image source={cityIcon} style={styles.icon} />
    </View>
    <View style={styles.info}>
      <Text style={styles.name}>{item.name}</Text>
      <Text>{item.address}</Text>
      <Text style={styles.modifiedURL}>{item.modifiedURL}</Text>
    </View>
  </View>
);

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>City Guide</Text>
      <FlatList data={data} renderItem={row} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ede2e0', 
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  row: {
    borderColor: '#7b7983',
    borderBottomWidth: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  title: {
    backgroundColor: '#1c7da5',
    color: '#ede2e0',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    paddingTop: 40,
    textAlign: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: '#1f3243',
    borderColor: '#1f3243',
    borderRadius: 35,
    borderWidth: 1,
    justifyContent: 'center',
    height: 70,
    width: 70,
    //paddingRight: 20,
  },
  icon: {
    height: 45,
    width: 45,
  },
  name: {
    color: '#122737',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  info: {
    flex: 1,
    color: '#3c4f62',
    fontSize: 16,
    paddingLeft: 20,
  },
  modifiedURL: {
    fontStyle: 'italic'
  },
});

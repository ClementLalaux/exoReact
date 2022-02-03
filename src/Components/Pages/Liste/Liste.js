import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const DATA = [
  {
    id: '1',
    nom: 'Louis',
  },
  {
    id: '2',
    nom: 'Jeanne',
  },
  {
    id: '3',
    nom: 'Clément',
  },
];

const Item = ({ nom }) => (
  <View style={styles.item}>
    <Text style={styles.nom}>{nom}</Text>
  </View>
);

const Liste = ({ navigation }) => {


  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  nom: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  }
});

export default Liste;
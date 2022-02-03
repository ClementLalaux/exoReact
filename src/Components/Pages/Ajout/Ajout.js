import {View, Text, TextInput, StyleSheet, Pressable} from 'react-native';
import React, {useState} from 'react';

const Ajout = ({ navigation }) => {
    const goTo = () => navigation.navigate("Liste", {name : name});

  const [name, setName] = useState('');
  const handlePress = input => {
    setName(input);
  };


  return (
    <View style={styles.body}>
      <TextInput
        placeholder="Saisir un nom a ajouter"
        style={styles.input}
        maxLength={300}
        keyboardType="default"
        multiline={true}
      />
      <Pressable onPress={handlePress}>
        <Text>Ajouter une personne</Text>
      </Pressable>
      <Pressable onPress={goTo}>
        <Text>Aller sur la page Liste</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    color: 'blue',
  },
  input: {
    width: 300,
  },
});

export default Ajout;
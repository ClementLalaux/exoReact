import {Button, TextInput, View} from 'react-native';
import React, {useState} from 'react';

export const AddUser = ({navigation}) => {
  const [nom, setNom] = useState('');
  const handleNom = value => {
    setNom(value);
  };

  const ajoutUser = () => {
    route.params.ajouterUser({
      nom: nom,
    });
    navigation.navigate("Liste");
  };

  return (
    <View>
      <TextInput
        onChangeText={handleNom}
        placeholder="Nom"
        keyboardType="default"
      />
      <Button title="Ajouter un utilisateur" onPress={ajoutUser} />
    </View>
  );
};
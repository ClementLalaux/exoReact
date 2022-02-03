import {Button, Text, View} from 'react-native';
import React, {useState} from 'react';

const Ajout = ({navigation}) => {
  const [user, setUser] = useState([]);

  const ajouterUser = (e) => {
    setUser([...user, e]);
  };

  const handleAjouterUser = () => {
    navigation.navigate('Ajout', {ajouterUser: ajouterUser});
  };

  return (
    <View>
      {user.map(e => (
        <View>
          <Text>
            {e.nom}
          </Text>
        </View>
      ))}
      <Button title="Ajouter" onPress={handleAjouterUser} />
    </View>
  );
};

export default Ajout;
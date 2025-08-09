import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

type Props = {
  name: string;
  image: string;
}

const ContactCard = ({ name, image }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5
  },
  name: {
    marginLeft: 10,
    fontSize: 18
  },
});

export default ContactCard;
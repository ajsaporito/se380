import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Search from './Search';
import ContactCard from './ContactCard';

export type Contact = {
  id: string;
  name: string;
  image: string;
};

type Props = {
  contacts: Contact[];
}

const ContactList = ({ contacts }: Props) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <FlatList
        data={filteredContacts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ContactCard name={item.name} image={item.image} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 48,
    backgroundColor: '#fff',
  },
});

export default ContactList;

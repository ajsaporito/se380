import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ContactList from './components/ContactList';

const CONTACTS = [
  {
    id: '1',
    name: 'Dennis',
    image: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    id: '2',
    name: 'Sweet Dee',
    image: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    id: '3',
    name: 'Frank',
    image: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    id: '4',
    name: 'Mac',
    image: 'https://reactnative.dev/img/tiny_logo.png',
  },
];

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ContactList contacts={CONTACTS} />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'stretch',
  },
});

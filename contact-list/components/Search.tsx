import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

const Search = ({ searchQuery, setSearchQuery }: Props) => {
  return (
    <View style={styles.searchContainer}>
      <Icon name="search" size={20} style={styles.searchIcon} />
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    margin: 10,
  },
  searchIcon: {
    marginRight: 10,
    color: '#888',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
});

export default Search;
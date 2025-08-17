import { View, Text, StyleSheet } from "react-native";

const WeatherScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather App coming soon...</Text>
    </View>
  );
};

export default WeatherScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
  },
});

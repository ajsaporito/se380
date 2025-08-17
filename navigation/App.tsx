import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './components/HomeScreen';
import { DetailsScreen } from './components/DetailsScreen';
import { ModalScreen } from './components/ModalScreen';
import { SettingsScreen } from './components/SettingsScreen';

export type StackParamList = {
  Home: undefined;
  Details: { itemId: number; otherParam?: string };
  Modal: undefined;
  Settings: undefined;
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Home"
          options={{ headerShown: true }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            headerShown: true,
            headerTitle: 'My Custom Title',
            headerTitleStyle: { color: 'red' },
            headerStyle: { backgroundColor: 'pink' },
            headerBackTitle: 'Custom Back',
          }}
        />
        <Stack.Screen
          name="Modal"
          component={ModalScreen}
          options={{ presentation: 'modal' }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            headerShown: true,
            headerTitle: 'Settings',
            headerStyle: { backgroundColor: 'gray' },
            headerTitleStyle: { color: 'white' },        
            headerTintColor: 'white',                    
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

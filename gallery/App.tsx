import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import PhotoDetailScreen from './screens/PhotoDetailScreen';
import FullScreenModal from './screens/FullScreenModal';

import { StackParamList } from './utils/stackParamList';

const Stack = createStackNavigator<StackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Photo Gallery' }}
        />
        <Stack.Screen
          name="PhotoDetail"
          component={PhotoDetailScreen}
        />
        <Stack.Screen
          name="FullScreenModal"
          component={FullScreenModal}
          options={{
            presentation: "modal",
            headerTitle: "",
            headerTintColor: "white",
            headerStyle: { backgroundColor: "black" },
            headerShown: false,
            headerShadowVisible: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './screens/HomeScreen';
import PhotoDetailScreen from './screens/PhotoDetailScreen';
import FullScreenModal from './screens/FullScreenModal';
import WeatherScreen from './screens/WeatherScreen';

import { StackParamList } from './utils/stackParamList';
import { DrawerParamList } from './utils/drawerParamList';

const Stack = createStackNavigator<StackParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();

const GalleryStack = () => {
  return (
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
  );
};

const App = () => {
  return (
    <NavigationContainer>
			<Drawer.Navigator screenOptions={{
        drawerPosition: "right",
        headerShown: false,
        swipeEdgeWidth: 100,
      }}>
				<Drawer.Screen name="Photo Gallery" component={GalleryStack} />
				<Drawer.Screen name="Weather App" component={WeatherScreen} />
			</Drawer.Navigator>
		</NavigationContainer>
  );
};

export default App;

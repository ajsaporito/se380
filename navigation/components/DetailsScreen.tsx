import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { Text, View, Button } from 'react-native';
import { StackParamList } from '../App';
import { StackNavigationProp } from '@react-navigation/stack';

type DetailsScreenNavigationProp = StackNavigationProp<
  StackParamList,
  'Details'
>;

type DetailsScreenRouteProp = RouteProp<StackParamList, 'Details'>;

export function DetailsScreen() {
  const { params } = useRoute<DetailsScreenRouteProp>();
  const navigation = useNavigation<DetailsScreenNavigationProp>();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {params.itemId} </Text>
      <Text>otherParam: {params.otherParam} </Text>
      <Button title="Go to Home" onPress={() => navigation.goBack()} />
    </View>
  );
}

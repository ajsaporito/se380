import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../App";
import { StackActions, useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

type ModalScreenNavigationProp = StackNavigationProp<StackParamList, 'Modal'>;

export function ModalScreen() {
  const navigation = useNavigation<ModalScreenNavigationProp>();

  const closeAndNavigate = () => {
    const unsubscribe = navigation.addListener('transitionEnd', () => {
      navigation.navigate('Details', { itemId: 123, otherParam: 'test' });
      unsubscribe();
    });

    navigation.dispatch(StackActions.pop(1));
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Modal</Text>
      <Button title="Go to details" onPress={closeAndNavigate} />
    </View>
  );
}

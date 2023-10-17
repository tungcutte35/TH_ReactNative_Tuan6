import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ListScreen1 from "./components/ListScreen1";
import ListScreen2 from "./components/ListScreen2";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="ListScreen1"
      >
        <Stack.Screen name="ListScreen1" component={ListScreen1}></Stack.Screen>
        <Stack.Screen name="ListScreen2" component={ListScreen2}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

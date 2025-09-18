import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AgeScreen from "./Screens/Agescreen";
import MovieScreen from "./Screens/Moviescreen";

export type RootStackParamList = {
  Age: undefined;
  Movie: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Age">
        <Stack.Screen name="Age" component={AgeScreen} />
        <Stack.Screen name="Movie" component={MovieScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import React from "react";
import Login from "./screens/Login";
import Hello from "./screens/Hello";
import Home from "./screens/Home";
import Maths from "./components/Maths";
import Science from "./components/Science";
import Music from "./components/Music";
import Painting from "./components/Painting";
import Languages from "./components/Languages";
import Stories from "./components/Stories";
import Counting from './components/Counting';
import Matching from "./components/Matching";
import SolvingEquations from "./components/SolvingEquations";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Hello"
          component={Hello}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Maths"
          component={Maths}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Science"
          component={Science}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Music"
          component={Music}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Painting"
          component={Painting}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Languages"
          component={Languages}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Stories"
          component={Stories}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Counting"
          component={Counting}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SolvingEquations"
          component={SolvingEquations}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Matching"
          component={Matching}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

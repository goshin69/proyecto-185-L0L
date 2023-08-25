import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack";

import Home from "./screens/Home";
import Main from "./screens/Main";
 const stack = createStackNavigator();
 export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <stack.Navigator initialRouteName="Home" screenOptions={{
          HeaderShown:false
        }}>
          <stack.screen name="Home" component={Home} />
          <stack.screen name="Main" component={Home} />

        </stack.Navigator>
      </NavigationContainer>
    );
  }
 }

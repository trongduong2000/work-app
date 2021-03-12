import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Login from '../screen/Login';
import Job from '../screen/Job'
import JobDetail from "../screen/JobDetail";

const Stack = createStackNavigator();

function RootNavigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Joblist" component={Job}/>
          <Stack.Screen name="JobDetail" component={JobDetail}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
export default RootNavigation;

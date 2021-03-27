import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Login from '../screen/Login';
import JobList from '../screen/Job';
import JobDetail from "../screen/JobDetail";
import AddJob from "../screen/AddJob";

const Stack = createStackNavigator();

function RootNavigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Joblist" component={JobList}/>
          <Stack.Screen name="JobDetail" component={JobDetail}/>
          <Stack.Screen name='AddJob' component={AddJob} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
export default RootNavigation;

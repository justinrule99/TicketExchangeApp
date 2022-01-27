import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";


import Home from "./src/components/Home";
import Profile from "./src/components/Profile";
import MyTickets from "./src/components/MyTickets";
import Icon from "./src/components/Icon";
import MyContext from "./src/components/MyContext";
import HomeContainer from "./src/components/HomeContainer";

// configures bottom tab navigator, each bottom tab goes to its own stack

const Tab = createBottomTabNavigator();


const App = () => {
    // global state object to be passed through the context
    let [appState, setAppState] = useState({
        signedIn: false,
        user: {
            email: '',
            id: -1
        },
        num: 4
    });

    const contextValue = {appState, setAppState};

    return (
      <MyContext.Provider value={contextValue}>
          <NavigationContainer>
              <Tab.Navigator
                  screenOptions={{
                      tabBarActiveTintColor: '#C8102E',
                  }}
                  tabBarOptions={{
                      style: {
                          backgroundColor: '#F2F2F2',
                      }
                  }}
              >
                  <Tab.Screen
                      name="Main"
                      component={HomeContainer}
                      options={{
                          tabBarIcon: () => (
                              <Icon name="houseDoor" />
                          )
                      }}
                  />
                  <Tab.Screen
                      name="My Tickets"
                      component={MyTickets}
                      options={{
                          tabBarIcon: () => (
                              <Icon name="folder" />
                          )
                      }}
                  />
                  <Tab.Screen
                      name="Profile"
                      component={Profile}
                      options={{
                          tabBarIcon: () => (
                              <Icon name="gear" />
                          )
                      }}
                  />
              </Tab.Navigator>
          </NavigationContainer>
      </MyContext.Provider>
    );
}

export default App;
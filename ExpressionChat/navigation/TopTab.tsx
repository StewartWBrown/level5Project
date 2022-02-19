import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import * as React from 'react';
import { Pressable } from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ChatsScreen from '../screens/ChatScreen';
import TabOneScreen from '../screens/ChatScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { TopTabParamList, RootTabScreenProps } from '../types';
import { Auth } from 'aws-amplify';

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
 const TopTabs = createMaterialTopTabNavigator<TopTabParamList>();
 export function TopTabNavigator() {
   const colorScheme = useColorScheme();
 
   return (
     <TopTabs.Navigator
       initialRouteName="Chats"
       screenOptions={{
         tabBarActiveTintColor: Colors[colorScheme].background,
         tabBarStyle: {
           backgroundColor: Colors[colorScheme].tint,
         },
         tabBarIndicatorStyle:{
           backgroundColor: Colors[colorScheme].background,
           height: 5,
         },
         tabBarLabelStyle: {
           fontWeight: 'bold'
         },
         tabBarShowIcon: true,
       }}>
      <TopTabs.Screen
         name="Camera"
         component={TabTwoScreen}
         options={{
           tabBarIcon: ({ color: string }) => <FontAwesome name="camera" color="white" size={17}/>,
           tabBarShowLabel: false,
           
         }} />
       <TopTabs.Screen
         name="Chats"
         component={ChatsScreen}
         options={{
           title: 'CHATS',
         }} />
        <TopTabs.Screen
         name="Status"
         component={TabTwoScreen}
         options={{
           title: 'STATUS',
         }} />
        <TopTabs.Screen
         name="Calls"
         component={TabTwoScreen}
         options={{
           title: 'CALLS',
         }} />
     </TopTabs.Navigator>
   );
 }
 /**
  * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
  */
 function TabBarIcon(props: {
   name: React.ComponentProps<typeof FontAwesome>['name'];
   color: string;
 }) {
   return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
 }

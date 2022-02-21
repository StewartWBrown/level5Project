/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorPropType, ColorSchemeName, TouchableOpacity, View } from 'react-native';
import { AntDesign, Entypo, FontAwesome5, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { TopTabNavigator } from './TopTab';
import ChatRoomScreen from '../screens/ChatRoomScreen'
import ListOfUsers from '../screens/ListOfUsers';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { getUser } from '../src/graphql/queries';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {

  // this does not work lol
  const toLogOut = async () => {
    await Auth.currentAuthenticatedUser().then(user => user.signOut())
  }
  

  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: Colors.light.tint,
      },
      headerShadowVisible: false,
      headerTintColor: Colors.light.background,
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }}>
      <Stack.Screen name="Root" component={TopTabNavigator} options={{ 
        headerShown: true,
        // Name of app appearing at top of screen (May change down the line)
        title: "Glasgow Students' Nightline",
        // search picture and 3 dots
        headerRight: () => (
          <View style= {{flexDirection: 'row', width: 69, justifyContent: 'space-between', marginRight: 6}}> 
            <AntDesign name="search1" size={20} color="white" />
            <TouchableOpacity onPress={toLogOut}>
            <Entypo name="log-out" size={20} color="white" />
            </TouchableOpacity>
          </View>
        )
        
        }} />
      <Stack.Screen 
      name="ChatRoom" 
      component={ChatRoomScreen} 
      options={( {route }) => ({
        title: route.params.name,     
        // headerLeft: route.params.users[0].imageUri,
        //headerBackImageSource: route.params.users[0].imageUri,
        headerRight: () => (
          <View style={{
            flexDirection: 'row',
            width: 100,
            justifyContent:  `space-between`,
            marginRight: 10,
          }}>
            <MaterialIcons name="call" size={22} color={`white`} />
            <FontAwesome5 name="video" size={22} color={`white`} />
            <MaterialCommunityIcons name="dots-vertical" size={22} color={`white`} />
          </View>
        )
      })} /> 

      <Stack.Screen name="ListOfUsers" component={ListOfUsers}/>

      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}




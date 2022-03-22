/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<TopTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  ChatRoom: ChatRoom;
  ListOfUsers: undefined; 

};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type TopTabParamList = {
  Camera: undefined;
  Chats: undefined;
  Status: undefined;
  Calls: undefined;
};

export type RootTabScreenProps<Screen extends keyof TopTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<TopTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type User = {
  id: string;
  name: string; 
  imageUri: string;
}

export type Message = {
  id: string; 
  content: string;
  createdAt: string; 
  user: User;
  colour: string;
  facialExpression: string;
}

export type ChatRoom = {
  id: string;
  users: User[];
  lastMessage: Message;
}

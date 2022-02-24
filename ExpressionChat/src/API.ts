/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name: string,
  imageUri?: string | null,
  status?: string | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  imageUri?: string | null,
  status?: string | null,
  chatRooms?: ModelChatRoomUsersConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelChatRoomUsersConnection = {
  __typename: "ModelChatRoomUsersConnection",
  items:  Array<ChatRoomUsers | null >,
  nextToken?: string | null,
};

export type ChatRoomUsers = {
  __typename: "ChatRoomUsers",
  id: string,
  userID: string,
  chatRoomID: string,
  user: User,
  chatRoom: ChatRoom,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ChatRoom = {
  __typename: "ChatRoom",
  id: string,
  chatUsers?: ModelChatRoomUsersConnection | null,
  messages?: ModelMessageConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items:  Array<Message | null >,
  nextToken?: string | null,
};

export type Message = {
  __typename: "Message",
  id: string,
  content: string,
  createdAt: string,
  userID: string,
  user?: User | null,
  chatID: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  imageUri?: string | null,
  status?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateChatRoomInput = {
  id?: string | null,
};

export type ModelChatRoomConditionInput = {
  and?: Array< ModelChatRoomConditionInput | null > | null,
  or?: Array< ModelChatRoomConditionInput | null > | null,
  not?: ModelChatRoomConditionInput | null,
};

export type UpdateChatRoomInput = {
  id: string,
};

export type DeleteChatRoomInput = {
  id: string,
};

export type CreateMessageInput = {
  id?: string | null,
  content: string,
  createdAt?: string | null,
  userID: string,
  chatID: string,
};

export type ModelMessageConditionInput = {
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  chatID?: ModelIDInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateMessageInput = {
  id: string,
  content?: string | null,
  createdAt?: string | null,
  userID?: string | null,
  chatID?: string | null,
};

export type DeleteMessageInput = {
  id: string,
};

export type CreateChatRoomUsersInput = {
  id?: string | null,
  userID: string,
  chatRoomID: string,
};

export type ModelChatRoomUsersConditionInput = {
  userID?: ModelIDInput | null,
  chatRoomID?: ModelIDInput | null,
  and?: Array< ModelChatRoomUsersConditionInput | null > | null,
  or?: Array< ModelChatRoomUsersConditionInput | null > | null,
  not?: ModelChatRoomUsersConditionInput | null,
};

export type UpdateChatRoomUsersInput = {
  id: string,
  userID?: string | null,
  chatRoomID?: string | null,
};

export type DeleteChatRoomUsersInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelChatRoomFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelChatRoomFilterInput | null > | null,
  or?: Array< ModelChatRoomFilterInput | null > | null,
  not?: ModelChatRoomFilterInput | null,
};

export type ModelChatRoomConnection = {
  __typename: "ModelChatRoomConnection",
  items:  Array<ChatRoom | null >,
  nextToken?: string | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  chatID?: ModelIDInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
};

export type ModelChatRoomUsersFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  chatRoomID?: ModelIDInput | null,
  and?: Array< ModelChatRoomUsersFilterInput | null > | null,
  or?: Array< ModelChatRoomUsersFilterInput | null > | null,
  not?: ModelChatRoomUsersFilterInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUri?: string | null,
    status?: string | null,
    chatRooms?:  {
      __typename: "ModelChatRoomUsersConnection",
      items:  Array< {
        __typename: "ChatRoomUsers",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUri?: string | null,
    status?: string | null,
    chatRooms?:  {
      __typename: "ModelChatRoomUsersConnection",
      items:  Array< {
        __typename: "ChatRoomUsers",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUri?: string | null,
    status?: string | null,
    chatRooms?:  {
      __typename: "ModelChatRoomUsersConnection",
      items:  Array< {
        __typename: "ChatRoomUsers",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateChatRoomMutationVariables = {
  input: CreateChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type CreateChatRoomMutation = {
  createChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    chatUsers?:  {
      __typename: "ModelChatRoomUsersConnection",
      items:  Array< {
        __typename: "ChatRoomUsers",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        createdAt: string,
        userID: string,
        chatID: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateChatRoomMutationVariables = {
  input: UpdateChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type UpdateChatRoomMutation = {
  updateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    chatUsers?:  {
      __typename: "ModelChatRoomUsersConnection",
      items:  Array< {
        __typename: "ChatRoomUsers",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        createdAt: string,
        userID: string,
        chatID: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteChatRoomMutationVariables = {
  input: DeleteChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type DeleteChatRoomMutation = {
  deleteChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    chatUsers?:  {
      __typename: "ModelChatRoomUsersConnection",
      items:  Array< {
        __typename: "ChatRoomUsers",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        createdAt: string,
        userID: string,
        chatID: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    createdAt: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatRooms?:  {
        __typename: "ModelChatRoomUsersConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    chatID: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    createdAt: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatRooms?:  {
        __typename: "ModelChatRoomUsersConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    chatID: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    createdAt: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatRooms?:  {
        __typename: "ModelChatRoomUsersConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    chatID: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateChatRoomUsersMutationVariables = {
  input: CreateChatRoomUsersInput,
  condition?: ModelChatRoomUsersConditionInput | null,
};

export type CreateChatRoomUsersMutation = {
  createChatRoomUsers?:  {
    __typename: "ChatRoomUsers",
    id: string,
    userID: string,
    chatRoomID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatRooms?:  {
        __typename: "ModelChatRoomUsersConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      chatUsers?:  {
        __typename: "ModelChatRoomUsersConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateChatRoomUsersMutationVariables = {
  input: UpdateChatRoomUsersInput,
  condition?: ModelChatRoomUsersConditionInput | null,
};

export type UpdateChatRoomUsersMutation = {
  updateChatRoomUsers?:  {
    __typename: "ChatRoomUsers",
    id: string,
    userID: string,
    chatRoomID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatRooms?:  {
        __typename: "ModelChatRoomUsersConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      chatUsers?:  {
        __typename: "ModelChatRoomUsersConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteChatRoomUsersMutationVariables = {
  input: DeleteChatRoomUsersInput,
  condition?: ModelChatRoomUsersConditionInput | null,
};

export type DeleteChatRoomUsersMutation = {
  deleteChatRoomUsers?:  {
    __typename: "ChatRoomUsers",
    id: string,
    userID: string,
    chatRoomID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatRooms?:  {
        __typename: "ModelChatRoomUsersConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      chatUsers?:  {
        __typename: "ModelChatRoomUsersConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUri?: string | null,
    status?: string | null,
    chatRooms?:  {
      __typename: "ModelChatRoomUsersConnection",
      items:  Array< {
        __typename: "ChatRoomUsers",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatRooms?:  {
        __typename: "ModelChatRoomUsersConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetChatRoomQueryVariables = {
  id: string,
};

export type GetChatRoomQuery = {
  getChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    chatUsers?:  {
      __typename: "ModelChatRoomUsersConnection",
      items:  Array< {
        __typename: "ChatRoomUsers",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        createdAt: string,
        userID: string,
        chatID: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListChatRoomsQueryVariables = {
  filter?: ModelChatRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatRoomsQuery = {
  listChatRooms?:  {
    __typename: "ModelChatRoomConnection",
    items:  Array< {
      __typename: "ChatRoom",
      id: string,
      chatUsers?:  {
        __typename: "ModelChatRoomUsersConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    createdAt: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatRooms?:  {
        __typename: "ModelChatRoomUsersConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    chatID: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      content: string,
      createdAt: string,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        imageUri?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      chatID: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetChatRoomUsersQueryVariables = {
  id: string,
};

export type GetChatRoomUsersQuery = {
  getChatRoomUsers?:  {
    __typename: "ChatRoomUsers",
    id: string,
    userID: string,
    chatRoomID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatRooms?:  {
        __typename: "ModelChatRoomUsersConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      chatUsers?:  {
        __typename: "ModelChatRoomUsersConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListChatRoomUsersQueryVariables = {
  filter?: ModelChatRoomUsersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatRoomUsersQuery = {
  listChatRoomUsers?:  {
    __typename: "ModelChatRoomUsersConnection",
    items:  Array< {
      __typename: "ChatRoomUsers",
      id: string,
      userID: string,
      chatRoomID: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        imageUri?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      chatRoom:  {
        __typename: "ChatRoom",
        id: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MessagesByChatRoomQueryVariables = {
  chatID: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MessagesByChatRoomQuery = {
  messagesByChatRoom?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      content: string,
      createdAt: string,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        imageUri?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      chatID: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUri?: string | null,
    status?: string | null,
    chatRooms?:  {
      __typename: "ModelChatRoomUsersConnection",
      items:  Array< {
        __typename: "ChatRoomUsers",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUri?: string | null,
    status?: string | null,
    chatRooms?:  {
      __typename: "ModelChatRoomUsersConnection",
      items:  Array< {
        __typename: "ChatRoomUsers",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    imageUri?: string | null,
    status?: string | null,
    chatRooms?:  {
      __typename: "ModelChatRoomUsersConnection",
      items:  Array< {
        __typename: "ChatRoomUsers",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateChatRoomSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateChatRoomSubscription = {
  onCreateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    chatUsers?:  {
      __typename: "ModelChatRoomUsersConnection",
      items:  Array< {
        __typename: "ChatRoomUsers",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        createdAt: string,
        userID: string,
        chatID: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateChatRoomSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateChatRoomSubscription = {
  onUpdateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    chatUsers?:  {
      __typename: "ModelChatRoomUsersConnection",
      items:  Array< {
        __typename: "ChatRoomUsers",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        createdAt: string,
        userID: string,
        chatID: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteChatRoomSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteChatRoomSubscription = {
  onDeleteChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    chatUsers?:  {
      __typename: "ModelChatRoomUsersConnection",
      items:  Array< {
        __typename: "ChatRoomUsers",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        createdAt: string,
        userID: string,
        chatID: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateMessageSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    createdAt: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatRooms?:  {
        __typename: "ModelChatRoomUsersConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    chatID: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateMessageSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    createdAt: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatRooms?:  {
        __typename: "ModelChatRoomUsersConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    chatID: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteMessageSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    createdAt: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatRooms?:  {
        __typename: "ModelChatRoomUsersConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    chatID: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateChatRoomUsersSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateChatRoomUsersSubscription = {
  onCreateChatRoomUsers?:  {
    __typename: "ChatRoomUsers",
    id: string,
    userID: string,
    chatRoomID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatRooms?:  {
        __typename: "ModelChatRoomUsersConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      chatUsers?:  {
        __typename: "ModelChatRoomUsersConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateChatRoomUsersSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateChatRoomUsersSubscription = {
  onUpdateChatRoomUsers?:  {
    __typename: "ChatRoomUsers",
    id: string,
    userID: string,
    chatRoomID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatRooms?:  {
        __typename: "ModelChatRoomUsersConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      chatUsers?:  {
        __typename: "ModelChatRoomUsersConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteChatRoomUsersSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteChatRoomUsersSubscription = {
  onDeleteChatRoomUsers?:  {
    __typename: "ChatRoomUsers",
    id: string,
    userID: string,
    chatRoomID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      imageUri?: string | null,
      status?: string | null,
      chatRooms?:  {
        __typename: "ModelChatRoomUsersConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      chatUsers?:  {
        __typename: "ModelChatRoomUsersConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

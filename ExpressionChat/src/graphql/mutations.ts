/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      imageUri
      status
      chatRooms {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      imageUri
      status
      chatRooms {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      imageUri
      status
      chatRooms {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createChatRoom = /* GraphQL */ `
  mutation CreateChatRoom(
    $input: CreateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    createChatRoom(input: $input, condition: $condition) {
      id
      chatUsers {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      messages {
        items {
          id
          content
          createdAt
          userID
          chatID
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateChatRoom = /* GraphQL */ `
  mutation UpdateChatRoom(
    $input: UpdateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    updateChatRoom(input: $input, condition: $condition) {
      id
      chatUsers {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      messages {
        items {
          id
          content
          createdAt
          userID
          chatID
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteChatRoom = /* GraphQL */ `
  mutation DeleteChatRoom(
    $input: DeleteChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    deleteChatRoom(input: $input, condition: $condition) {
      id
      chatUsers {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      messages {
        items {
          id
          content
          createdAt
          userID
          chatID
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      content
      createdAt
      userID
      user {
        id
        name
        imageUri
        status
        chatRooms {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      chatID
      updatedAt
      owner
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      content
      createdAt
      userID
      user {
        id
        name
        imageUri
        status
        chatRooms {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      chatID
      updatedAt
      owner
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      content
      createdAt
      userID
      user {
        id
        name
        imageUri
        status
        chatRooms {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      chatID
      updatedAt
      owner
    }
  }
`;
export const createChatRoomUsers = /* GraphQL */ `
  mutation CreateChatRoomUsers(
    $input: CreateChatRoomUsersInput!
    $condition: ModelChatRoomUsersConditionInput
  ) {
    createChatRoomUsers(input: $input, condition: $condition) {
      id
      userID
      chatRoomID
      user {
        id
        name
        imageUri
        status
        chatRooms {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      chatRoom {
        id
        chatUsers {
          nextToken
        }
        messages {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateChatRoomUsers = /* GraphQL */ `
  mutation UpdateChatRoomUsers(
    $input: UpdateChatRoomUsersInput!
    $condition: ModelChatRoomUsersConditionInput
  ) {
    updateChatRoomUsers(input: $input, condition: $condition) {
      id
      userID
      chatRoomID
      user {
        id
        name
        imageUri
        status
        chatRooms {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      chatRoom {
        id
        chatUsers {
          nextToken
        }
        messages {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteChatRoomUsers = /* GraphQL */ `
  mutation DeleteChatRoomUsers(
    $input: DeleteChatRoomUsersInput!
    $condition: ModelChatRoomUsersConditionInput
  ) {
    deleteChatRoomUsers(input: $input, condition: $condition) {
      id
      userID
      chatRoomID
      user {
        id
        name
        imageUri
        status
        chatRooms {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      chatRoom {
        id
        chatUsers {
          nextToken
        }
        messages {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;

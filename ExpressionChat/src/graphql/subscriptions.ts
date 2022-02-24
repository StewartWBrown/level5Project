/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
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
export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom($owner: String) {
    onCreateChatRoom(owner: $owner) {
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
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom($owner: String) {
    onUpdateChatRoom(owner: $owner) {
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
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom($owner: String) {
    onDeleteChatRoom(owner: $owner) {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($owner: String) {
    onCreateMessage(owner: $owner) {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($owner: String) {
    onUpdateMessage(owner: $owner) {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($owner: String) {
    onDeleteMessage(owner: $owner) {
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
export const onCreateChatRoomUsers = /* GraphQL */ `
  subscription OnCreateChatRoomUsers($owner: String) {
    onCreateChatRoomUsers(owner: $owner) {
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
export const onUpdateChatRoomUsers = /* GraphQL */ `
  subscription OnUpdateChatRoomUsers($owner: String) {
    onUpdateChatRoomUsers(owner: $owner) {
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
export const onDeleteChatRoomUsers = /* GraphQL */ `
  subscription OnDeleteChatRoomUsers($owner: String) {
    onDeleteChatRoomUsers(owner: $owner) {
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

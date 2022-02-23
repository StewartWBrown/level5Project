export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
          chatRoom {
            id
                chatUsers {
                    items {
                        user {
                            id
                            name
                            imageUri
                            status
                        }
                    }
                }
        }
          
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
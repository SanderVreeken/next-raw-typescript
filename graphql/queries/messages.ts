export const CREATE_MESSAGE_QUERY = /* GraphQL */ `
    mutation($message: MessageInput!) {
        createMessage(message: $message)
    }
`
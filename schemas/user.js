module.exports = `
type User {
    uuid: ID!
    email: String
    password: String
    firstName: String
    lastName: String
}

input UserInput {
    email: String
    password: String
    firstName: String
    lastName: ID
}

extend type Query {
    userById(uuid: ID!): User
    users: [User]
}

extend type Mutation {
    createUser(input: UserInput!): User
    updateUser(uuid: ID!, input: UserInput!): User
    deleteUser(uuid: ID!): Boolean
}
`;

const { gql } = require("apollo-server");

const typeDefs = gql`
  type Owner {
    _id: ID!
    name: String!
    gender: String!
    phone: String!
    email: String!
    pets: [Pet!]
  }

  type Pet {
    _id: ID!
    name: String!
    species: String!
    race: String!
    date_of_birth: String!
    appointments: [Appointment]
  }

  type Appointment {
    _id: ID!
    pet_id: Pet!
    date_time: String!
    reason: String!
    status: String!
    notes: String
  }

  type Query {
    getOwners: [Owner]
    getOwnerById(_id: ID!): Owner

    getPets: [Pet]
    getPetById(_id: ID!): Pet

    getAppointments: [Appointment]
    getAppointmentById(_id: ID!): Appointment
  }

  type Mutation {
    createOwner(name: String!, gender: String!, phone: String!, email: String!, pets: [ID!]): Owner
    updateOwner(_id: ID!, name: String, phone: String, email: String, pets: [ID]): Owner
    deleteOwnerById(_id: ID!): DeleteResponse

    createPet(name: String!, species: String!, race: String!, date_of_birth: String!): Pet
    updatePet(_id: ID!, name: String, species: String, race: String, date_of_birth: String): Pet
    deletePetById(_id: ID!): DeleteResponse

    createAppointment(pet_id: ID!, date_time: String!, reason: String!): Appointment
    updateAppointment(
      _id: ID!
      date_time: String
      reason: String
      status: String
      notes: String
    ): Appointment
    deleteAppointmentById(_id: ID!): DeleteResponse
  }

  type DeleteResponse {
    message: String!
    success: Boolean!
  }
`;

module.exports = typeDefs;

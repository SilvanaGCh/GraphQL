const axios = require("axios");

const BASE_URL = "https://earnest-dream-production.up.railway.app";

const resolvers = {
  Query: {
    // Dueños
    getOwners: async (_, __, { token }) => {
      try {
        const response = await axios.get(`${BASE_URL}/owners`, {
          headers: { Authorization: `${token}` },
        });
        return response.data.data;
      } catch (error) {
        throw new Error(error.response?.data?.message || "Error fetching owners");
      }
    },
    getOwnerById: async (_, { _id }, { token }) => {
      try {
        const response = await axios.get(`${BASE_URL}/owners/${_id}`, {
          headers: { Authorization: `${token}` },
        });
        return response.data.data;
      } catch (error) {
        throw new Error(error.response?.data?.message || "Error fetching owner");
      }
    },

    // Mascotas
    getPets: async (_, __, { token }) => {
      try {
        const response = await axios.get(`${BASE_URL}/pets`, {
          headers: { Authorization: `${token}` },
        });
        return response.data.data;
      } catch (error) {
        throw new Error(error.response?.data?.message || "Error fetching pets");
      }
    },
    getPetById: async (_, { _id }, { token }) => {
      try {
        const response = await axios.get(`${BASE_URL}/pets/${_id}`, {
          headers: { Authorization: `${token}` },
        });
        return response.data.data;
      } catch (error) {
        throw new Error(error.response?.data?.message || "Error fetching pet");
      }
    },

    // Citas
    getAppointments: async (_, __, { token }) => {
      try {
        const response = await axios.get(`${BASE_URL}/appointments`, {
          headers: { Authorization: `${token}` },
        });
        return response.data.data;
      } catch (error) {
        throw new Error(
          error.response?.data?.message || "Error fetching appointments"
        );
      }
    },
    getAppointmentById: async (_, { _id }, { token }) => {
      try {
        const response = await axios.get(`${BASE_URL}/appointments/${_id}`, {
          headers: { Authorization: `${token}` },
        });
        return response.data.data;
      } catch (error) {
        throw new Error(
          error.response?.data?.message || "Error fetching appointment"
        );
      }
    },
  },

  Mutation: {
    // Dueños
    createOwner: async (_, { name, gender, phone, email }, { token }) => {
      try {
        const response = await axios.post(
          `${BASE_URL}/owners`,
          { name, gender, phone, email },
          {
            headers: { Authorization: `${token}` },
          }
        );
        return response.data.data;
      } catch (error) {
        throw new Error(error.response?.data?.message || "Error creating owner");
      }
    },
    updateOwner: async (_, { _id, name, phone, email, pets }, { token }) => {
      try {
        const updates = {};
        if (name) updates.name = name;
        if (phone) updates.phone = phone;
        if (email) updates.email = email;
        if (pets) updates.pets = pets;

        await axios.put(`${BASE_URL}/owners/${_id}`, updates, {
          headers: { Authorization: `${token}` },
        });

        const response = await axios.get(`${BASE_URL}/owners/${_id}`, {
          headers: { Authorization: `${token}` },
        });

        return response.data.data;
      } catch (error) {
        throw new Error(error.response?.data?.message || "Error updating owner");
      }
    },
    deleteOwnerById: async (_, { _id }, { token }) => {
      try {
        await axios.delete(`${BASE_URL}/owners/${_id}`, {
          headers: { Authorization: `${token}` },
        });

        return { message: "Owner deleted successfully", success: true };
      } catch (error) {
        throw new Error(error.response?.data?.message || "Error deleting owner");
      }
    },

    // Mascotas
    createPet: async (_, { name, species, race, date_of_birth }, { token }) => {
      try {
        const response = await axios.post(
          `${BASE_URL}/pets`,
          { name, species, race, date_of_birth },
          {
            headers: { Authorization: `${token}` },
          }
        );
        return response.data.data;
      } catch (error) {
        throw new Error(error.response?.data?.message || "Error creating pet");
      }
    },
    updatePet: async (_, { _id, name, species, race, date_of_birth }, { token }) => {
      try {
        const updates = {};
        if (name) updates.name = name;
        if (species) updates.species = species;
        if (race) updates.race = race;
        if (date_of_birth) updates.date_of_birth = date_of_birth;

        await axios.put(`${BASE_URL}/pets/${_id}`, updates, {
          headers: { Authorization: `${token}` },
        });

        const response = await axios.get(`${BASE_URL}/pets/${_id}`, {
          headers: { Authorization: `${token}` },
        });

        return response.data.data;
      } catch (error) {
        throw new Error(error.response?.data?.message || "Error updating pet");
      }
    },
    deletePetById: async (_, { _id }, { token }) => {
      try {
        await axios.delete(`${BASE_URL}/pets/${_id}`, {
          headers: { Authorization: `${token}` },
        });

        return { message: "Pet deleted successfully", success: true };
      } catch (error) {
        throw new Error(error.response?.data?.message || "Error deleting pet");
      }
    },

    // Citas
    createAppointment: async (_, { pet_id, date_time, reason }, { token }) => {
      try {
        const response = await axios.post(
          `${BASE_URL}/appointments`,
          { pet_id, date_time, reason },
          {
            headers: { Authorization: `${token}` },
          }
        );
        return response.data.data;
      } catch (error) {
        throw new Error(
          error.response?.data?.message || "Error creating appointment"
        );
      }
    },
    updateAppointment: async (_, { _id, date_time, reason, status, notes }, { token }) => {
      try {
        const updates = {};
        if (date_time) updates.date_time = date_time;
        if (reason) updates.reason = reason;
        if (status) updates.status = status;
        if (notes) updates.notes = notes;

        await axios.put(`${BASE_URL}/appointments/${_id}`, updates, {
          headers: { Authorization: `${token}` },
        });

        const response = await axios.get(`${BASE_URL}/appointments/${_id}`, {
          headers: { Authorization: `${token}` },
        });

        return response.data.data;
      } catch (error) {
        throw new Error(
          error.response?.data?.message || "Error updating appointment"
        );
      }
    },
    deleteAppointmentById: async (_, { _id }, { token }) => {
      try {
        await axios.delete(`${BASE_URL}/appointments/${_id}`, {
          headers: { Authorization: `${token}` },
        });

        return { message: "Appointment deleted successfully", success: true };
      } catch (error) {
        throw new Error(
          error.response?.data?.message || "Error deleting appointment"
        );
      }
    },
  },
};

module.exports = resolvers;

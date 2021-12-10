<template>
  <div class="container">
    <Header />
    <AddContact @add-contact="AddContact" />
    <Contacts
      @delete-contact="deleteContact"
      @update-contact="updateContact"
      :contacts="contacts"
    />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import AddContact from "./components/AddContact.vue";
import Contacts from "./components/Contacts.vue";
export default {
  name: "App",
  components: {
    Header,
    AddContact,
    Contacts,
  },
  data() {
    return {
      contacts: [],
    };
  },
  methods: {
    AddContact(contact) {
      this.contacts = [...this.contacts, contact];
    },
    updateContact(contact) {
      const Update = this.contacts.map((con) =>
        con.id === contact.id ? contact : con
      );
      this.contacts = [Update];
    },
    deleteContact(id) {
      this.contacts = this.contacts.filter((contact) => contact.id !== id);
    },
  },
  created() {
    this.contacts = [
      {
        id: 1,
        name: "Leanne Graham",
        phone: "1-770-736-8031 x56442",
      },

      {
        id: 2,
        name: "Ervin Howell",
        phone: "010-692-6593 x09125",
      },

      {
        id: 3,
        name: "Clementine Bauch",
        phone: "1-463-123-4447",
      },
      {
        id: 4,
        name: "Patricia Lebsack",
        phone: "493-170-9623 x156",
      },
      {
        id: 5,
        name: "Chelsey Dietrich",
        phone: "(254)954-1289",
      },
      {
        id: 6,
        name: "Mrs. Dennis Schulist",
        phone: "1-477-935-8478 x6430",
      },
      {
        id: 7,
        name: "Kurtis Weissnat",
        phone: "210.067.6132",
      },
      {
        id: 8,
        name: "Nicholas Runolfsdottir V",
        phone: "586.493.6943 x140",
      },
      {
        id: 9,
        name: "Glenna Reichert",
        phone: "(775)976-6794 x41206",
      },
      {
        id: 10,
        name: "Clementina DuBuque",
        phone: "024-648-3804",
      },
    ];
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Roboto Mono";
}

.container {
  max-width: 500px;
  margin: 30px;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
  background-color: #202242;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  color: white;
}

.btn {
  display: inline-block;
  background-color: black;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}

.btn-group {
  display: flex;
  justify-content: space-evenly;
  gap: 20px;
}

.btn-seprate {
  display: flex;
  gap: 25px;
}
.edit-btn {
  color: yellow;
}

.contact {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.contact.reminder {
  border-left: 5px solid green;
}

.contact h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.add-form {
  margin-bottom: 40px;
  color: white;
}

.form-control {
  margin: 20px 0;
}

.form-control label {
  display: block;
}

.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-control-check label {
  flex: 1;
}

.form-control-check input {
  flex: 2;
  height: 20px;
}

footer {
  margin-top: 30px;
  text-align: center;
}
</style>

<template>
  <div class="contact">
    <h3>
      {{ contact.name }}
      <div class="btn-seprate">
        <i @click="onDelete(contact.id)" class="fas fa-times"></i
        ><i @click="onEdit" class="fas fa-edit edit-btn"></i>
      </div>
    </h3>
    <p>{{ contact.phone }}</p>
    <div v-if="showEdit">
      <form @submit="upDate">
        <input
          type="text"
          v-model="contact.name"
          placeholder="Add Task"
          required
        />
        <input
          type="text"
          v-model="contact.phone"
          placeholder="Add Task"
          required
        />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  props: {
    contact: Object,
  },
  data() {
    return {
      showEdit: false,
    };
  },
  methods: {
    onDelete(id) {
      this.$emit("delete-contact", id);
    },
    upDate(e) {
      e.preventDefault();
      const upDatedContact = {
        id: this.contact.id,
        name: this.contact.name,
        phone: this.contact.phone,
      };

      this.$emit("update-task", upDatedContact);

      this.name = "";
      this.phone = "";
    },
    onEdit() {
      this.showEdit = !this.showEdit;
    },
  },
};
</script>

<style>
.fas {
  color: red;
}
</style>

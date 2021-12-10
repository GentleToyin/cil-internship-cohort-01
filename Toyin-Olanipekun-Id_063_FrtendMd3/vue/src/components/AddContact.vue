<template>
  <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>Name</label>
      <input type="text" v-model="name" placeholder="Add Full Name" required />
    </div>
    <div class="form-control">
      <label>Phone Number</label>
      <input
        type="text"
        v-model="phone"
        placeholder="Add Phone Number"
        required
      />
    </div>

    <input type="submit" value="Save Contact" className="btn btn-block" />
  </form>
</template>



<script>
export default {
  name: "AddContact",
  data() {
    return {
      name: "",
      phone: "",
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      const newContact = {
        id: Math.floor(Math.random() * 100000),
        name: this.name,
        phone: this.phone,
      };

      this.$emit("add-contact", newContact);

      this.name = "";
      this.phone = "";
    },
  },
};
</script>
<style scoped>
</style>
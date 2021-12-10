<template>
  <div :key="contact.id" v-for="contact in contacts">
    <Contact
      @delete-contact="$emit('delete-contact', contact.id)"
      @update-contact="$emit('update-contact', upDatedContact)"
      :contact="contact"
    />
  </div>
</template>





<script>
import Contact from "./Contact.vue";
export default {
  name: "Contacts",
  props: {
    contacts: Array,
  },
  components: {
    Contact,
  },
  emits: ["delete-contact", "update-contact"],
};
</script>
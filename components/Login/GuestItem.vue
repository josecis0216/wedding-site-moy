<template>
  <b-form-checkbox :value="name">{{ name }}</b-form-checkbox>
</template>
  
<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
  },
}
</script>
  
<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
  list-style-type: none;
}

a {
  color: #3d008d;
  text-decoration: none;
  font-weight: bold;
}

a:hover,
a:active {
  color: #8d007a;
}

p {
  margin: 0.5rem 0 0 0;
}
</style>
  
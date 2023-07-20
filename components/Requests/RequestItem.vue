<template>
  <b-col cols="6">
    <li>
      <div>
        <h2>{{ fullName }}</h2>
        <p>Guest of the {{ brideOrGroom[0] }}</p>
      </div>
      <p>Bringing these guests with them:</p>
      <p v-for="guest in guests" :key="guest">
        {{ guest }}
      </p>
    </li>
  </b-col>
</template>

<script>
export default {
  props: {
    fullName: {
      type: String,
      default: ''
    },
    brideOrGroom: {
      type: Array,
      default() {
        return []
      }
    },
    guests: {
      type: Array,
      default() {
        return []
      }
    }
  },
}
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
  list-style-type: none;
  min-height: 205px;
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

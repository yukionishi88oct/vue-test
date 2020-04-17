<template>
  <div>
    {{ greeting }}
  </div>
</template>

<script>
import Vue from 'vue'
export const Child = Vue.component("Child", {
  name: "Child",

  template: "<div>Child component</div>"
})
export const Parent = Vue.component("Parent", {
  name: "Parent",

  template: "<div><Child /></div>"
})

export default {
  name: 'Greeting',

  data () {
    return {
      greeting: 'Vue and TDD'
    }
  }
}
</script>

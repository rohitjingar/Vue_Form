<!-- App.vue -->
<template>
  <div id="app">
    <!-- Include your FormComponent here -->
    <FormComponent />
  </div>
</template>

<script>
import FormComponent from './components/FormComponent.vue';

export default {
  name: 'App',
  components: {
    FormComponent
  }
};
</script>

<style >
#app {
  font-family: Arial, sans-serif;
 
}
</style>

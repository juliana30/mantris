<template>
<div class="principal">
  <div class="container">
    <div><cc-header></cc-header></div>
    <div><cc-menu></cc-menu></div>
    <cc-sobre></cc-sobre>
    <cc-footer></cc-footer>
  </div>
  </div>
</template>

<script>
  import CcMenu from '@/Components/Menu'
  import CcHeader from '@/Components/Header'
  import CcSobre from '@/Components/Sobre'
  import CcFooter from '@/Components/Footer'

  export default {
    name: 'principal',
    components: {
      CcMenu,
      CcHeader,
      CcSobre,
      CcFooter
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    position: relative;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>

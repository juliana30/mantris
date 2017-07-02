<template>
<div class="header">
  <header>
    <div class="cabecalho">
      <img src="../../img/mantris.png">
    </div>

  </header>
  </div>
</template>

<script>
  export default {
    name: 'header'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .cabecalho{
    display: block;
    position: fixed;
    height: 40px;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #fafafa;
    text-align: center;
    padding: 20px 0;
    -webkit-box-shadow: 0 2px 4px rgba(0,0,0,.2);
    box-shadow: 0 2px 4px rgba(0,0,0,.2);
    z-index: 100;

  }
</style>

<template>
<div class="menu">
<nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Sobre</a></li>
    <li><a href="#">Contato</a></li>
  </ul>
</nav>
</div>
</template>

<script>
  export default {
    name: 'menu'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .menu{
    display: block;
    position: fixed;
    left: 0px;
    float: left;
    width: 10%;
    height: 100%;
    background-color: #f0f0f0;
    padding-top: 100px;
    
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    width: 150px;
    
  }
  ul li {
    position: relative;
    text-align: left;
  }
  
  li ul {
    position: absolute;
    left: 149px;
    top: 0;
    display: none;
  }
  ul li a {
    display: block;
    text-decoration: none;
    color: #000;
    padding: 10px 15px;
  }
  ul li a:hover {
    display: block;
    text-decoration: none;
    background: #ddd;
    color: #000;
    width: 100%;
  }
</style>

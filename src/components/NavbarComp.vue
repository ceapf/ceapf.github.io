<template>
    <nav>
      <ul>
        <li><router-link to="/">About</router-link></li>
        <li><router-link to="/analysis">Analysis</router-link></li>
        <li><router-link to="/ml">ML</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavbarComp'
  }
  </script>
  
  <style scoped>
  nav {
    background-color: #333;
    padding: 1rem;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 1rem;
  }
  li {
    color: white;
  }
  a {
    color: white;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  </style>
  
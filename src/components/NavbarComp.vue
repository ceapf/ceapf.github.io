<template>
    <nav>
      <ul>
        <li><router-link to="/">About</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
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
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #333;
    color: white;
    padding: 1rem;
    z-index: 1000; /* Ensures the navbar is on top of other elements */
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 1rem;
    justify-content: space-around;
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
  
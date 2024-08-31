<template>
    <div>
      <h1>Projects Page</h1>
      <p>This page contains an assortment of projects data-adjacent that i've worked on.</p>
      <h3><i>Table of Contents</i></h3>
      <a href="#olympic">How does a countries socioeconomic state influence its ability to produce olympic athletes?</a>
      <br>
      <a href="#darwin">AI teaches itself the Rubik's Cube</a>
      <iframe 
      src="https://ceapf.github.io/olympicanalysis.html" 
      width="100%" 
      height="800px" 
      style="border:none;" id="olympic"></iframe>

      <iframe
      src="https://ceapf.github.io/darwinscube.html"
      width="100%"
      height="800px"
      style="border:none;" id="darwin"
      ></iframe>
      
    </div>
  </template>
  
  <script>
  export default {
    name: 'AnalysisPage'
  }
  </script>
  
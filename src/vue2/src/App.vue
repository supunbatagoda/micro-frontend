<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">My App</a>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link to="/first" class="nav-link">First</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/second" class="nav-link">Second</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <main class="container mt-4">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* Global styles */
body {
  font-family: Arial, sans-serif;
}
</style>

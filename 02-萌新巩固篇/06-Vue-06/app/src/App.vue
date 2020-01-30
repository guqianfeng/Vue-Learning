<template>
  <div id="app">
    <ul id="nav">
      <router-link to="/">Home</router-link> | 
      <router-link to="/about">About</router-link> |
      <router-link to="/gqf">GQF</router-link> |
      <router-link to="/user">User List</router-link> | 
      <router-link to="/book">Book Choose</router-link> | 
      <router-link to="/login">Login</router-link> 
    </ul>
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.fade-enter-active{
    transition: opacity .5s;
}
.fade-leave-active{
    transition: none;
}
.fade-enter, .fade-leave-to{
    opacity: 0;
}
</style>

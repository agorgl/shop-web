<template>
  <div id="app">
    <div id="logo">
      <img @click="toggleSidebar" class="ui mini image" src="./assets/logo.png">
    </div>
    <transition name="sidebar-anim">
      <div id="sidebar" class="ui borderless vertical icon compact menu" v-show="sidebarVisible">
        <a class="item active teal">
          <i class="address book grey icon"/>
        </a>
        <a class="item">
          <i class="bell grey icon"/>
        </a>
        <a class="item">
          <i class="wrench grey icon"/>
        </a>
      </div>
    </transition>
    <div id="header">
      <div class="ui menu">
        <div class="item ui breadcrumb">
          <a class="section">Home</a>
            <div class="divider"> / </div>
          <a class="section">Store</a>
            <div class="divider"> / </div>
          <a class="active section">T-Shirt</a>
        </div>
        <div class="right menu">
          <div class="item">
            <div class="ui transparent icon input">
              <input type="text" placeholder="Search...">
              <i class="search link icon"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="content">
      <div id="vue">
        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data: function() {
    return {
      sidebarVisible: true,
    }
  },
  methods: {
    toggleSidebar: function() {
      this.sidebarVisible = !this.sidebarVisible;
    }
  }
}
</script>

<style>
#app {
  height: 100vh;
  display: grid;
  grid-template-rows: min-content auto;
  grid-template-columns: min-content auto;
  grid-template-areas: 'logo header' 'sidebar content';
  overflow: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#logo {
  min-width: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: logo;
  box-shadow: 0 1px 2px 0 rgba(34,36,38,.15);
}

#logo img {
  cursor: pointer;
}

#sidebar {
  border-radius: 0px;
  grid-area: sidebar;
}

#sidebar a.item.active {
  margin-left: -1px;
  border-left: 3px solid;
  border-radius: 3px 0px 0px 3px !important;
}

#sidebar a.item i.icon {
  margin: 6px 6px;
}

.sidebar-anim-enter-active, .sidebar-anim-leave-active {
  transition: transform 0.3s;
}

.sidebar-anim-enter, .sidebar-anim-leave-to {
  transform: translateX(-100%);
}

#header {
  grid-area: header;
}

#header .ui.menu {
  padding: 5px;
  border: 0px;
  border-radius: 0px;
}

#content {
  padding: 1rem;
  display: block;
  overflow: auto;
  grid-area: content;
}

#vue {
  text-align: center;
  color: #2c3e50;
}
</style>

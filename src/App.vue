<template>
  <div id="app">
    <div id="logo">
      <img @click="toggleSidebar" class="ui mini image" src="./assets/logo.png">
    </div>
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
    <transition name="sidebar-anim">
      <div id="sidebar" class="ui borderless vertical icon compact menu" v-show="sidebarVisible">
        <router-link v-for="item in sidebarItems"
                     :item="item" :key="item.to" :to="{ name: item.to }"
                     class="item" active-class="active teal">
          <i :class="item.icon" class="grey icon"/>
        </router-link>
      </div>
    </transition>
    <div id="content">
      <transition name="content-anim" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function() {
    return {
      sidebarVisible: true,
      sidebarItems: [
        {
          'to': 'Home',
          'icon': 'home',
        },
        {
          'to': 'Customers',
          'icon': 'address book',
        },
        {
          'to': 'Notifications',
          'icon': 'bell',
        },
        {
          'to': 'Settings',
          'icon': 'wrench',
        },
      ]
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
  grid-template-rows: min-content 1fr;
  grid-template-columns: min-content 1fr;
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
  box-shadow: 0 1px 2px 0 rgba(34,36,38,.15);
  grid-area: logo;
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
  width: 100%;
  padding: 1rem;
  display: block;
  overflow: auto;
  grid-area: content;
}

.content-anim-enter-active, .content-anim-leave-active {
  transition: opacity .2s ease;
}

.content-anim-enter, .content-anim-leave-to {
  opacity: 0;
}

#sidebar[style*="display: none;"] + #content,
#sidebar[class~="sidebar-anim-enter-active"] + #content {
  grid-column-start: 1;
}

#sidebar[class~="sidebar-anim-enter-active"] + #content,
#sidebar[class~="sidebar-anim-leave-active"] + #content {
  transition: width 0.3s ease,
              transform 0.3s ease;
}

#sidebar[class~="sidebar-anim-enter-to"] + #content {
  width: calc(100% - 64px);
  transform: translateX(64px);
}

#sidebar[class~="sidebar-anim-leave-to"] + #content {
  width: calc(100% + 64px);
  transform: translateX(-64px);
}
</style>

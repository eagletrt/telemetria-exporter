<template>
  <div id="app" class="d-flex align-items-center justify-content-center">
     <router-view />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

html, body {
  width: 100%;
  height: 100%;
}

::selection {
  background: #8EBAF0;
}
</style>

<style lang="scss" scoped>
#app {
  width: 100%;
  height: 100%;
}
</style>

<template>
  <div id="app">
    <div id="allCompontent" v-if="false" @click="active=true">
      <router-link to="/AllCompontent">
        <p>所有</p>
        <p>组件</p>
      </router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
import store from "./store";
export default {
  store,
  data() {
    return {
      active: false
    };
  },
  mounted() {}
};
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
}
#allCompontent {
  width: 50px;
  height: 50px;
  background: forestgreen;
  position: fixed;
  right: 100px;
  bottom: 100px;
  border-radius: 100%;
  z-index: 100000;
  a {
    color: #fff;
    text-decoration: none;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    p {
      padding: 0;
      margin: 0;
    }
  }
}
</style>

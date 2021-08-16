<template>
  <div class="contentInner">
    <div class="page-header">
      <h3>
        <i class="glyphicon glyphicon-cloud fa-lg"></i>系统设置
        <span>存储路径设置，挂载点设置等</span>
      </h3>
    </div>
    <div class="innerContent">
      <AllCompontent></AllCompontent>
    </div>
  </div>
</template>

<script>
import AllCompontent from "../../views/AllCompontent.vue";
export default {
  name: "A",
  components: {
    AllCompontent
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang='less'>
</style>
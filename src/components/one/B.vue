<template>
  <div class="contentInner">
    <div class="page-header">
      <h3>
        <i class="glyphicon glyphicon-cloud fa-lg"></i>系统设置
        <span>存储路径设置，挂载点设置等</span>
      </h3>
    </div>
    <div class="innerContent">
      <Tabel></Tabel>
    </div>
  </div>
</template>

<script>
import Tabel from "../public/Tabel.vue";
export default {
  components: { Tabel },
  data() {
    return {};
  }
};
</script>

<style scoped lang='less'>
</style>
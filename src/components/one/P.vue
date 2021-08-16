<template>
  <div class="contentInner">
    <div class="page-header">
      <h3>
        <i class="glyphicon glyphicon-cloud fa-lg"></i>系统设置
        <span>存储路径设置，挂载点设置等</span>
      </h3>
    </div>
    <div class="innerContent">
      <h1>
        <Select></Select>
      </h1>
    </div>
  </div>
</template>

<script>
import Select from "../public/Select.vue";
export default {
  components: {
    Select
  },
  data() {
    return {};
  },
  mounted() {}
};
</script>

<style scoped lang='less'>
</style>
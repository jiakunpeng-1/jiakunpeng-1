<template>
  <el-button @click="$emit('login')" type="primary" style="background:#33CCCC">
    <slot></slot>
  </el-button>
</template>

<script>
export default {
  props: {
    text: { type: String, default: "按钮" }
  }
};
</script>

<style lang='less' scoped>
</style>   
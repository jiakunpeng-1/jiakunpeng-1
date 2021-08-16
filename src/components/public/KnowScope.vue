<template>
  <div class="knowScope">
    <el-row>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane
          v-for="(item,index) in dataList"
          :key="index"
          :label="item.name"
          :name="item.name"
        >
          <h2>{{item.content}}</h2>
        </el-tab-pane>
      </el-tabs>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "knowScope",
  props: ["dataList"],
  data() {
    return {
      activeName: "sdfasdf"
    };
  },
  methods: {
    handleClick() {
      console.log(11111);
    }
  }
};
</script>
<style lang='less' scoped>
</style>
<template>
  <div class="compontentitem">
    <el-row>
      <div class="title" v-if="componentsItem">{{componentsItem.name}}</div>
    </el-row>
    <el-row class="demo">
      <slot></slot>
    </el-row>
    <el-row>
      <div class="attribute" v-if="componentsItem">
        属性：
        <el-table border :data="componentsItem.attribute" style="width: 100%">
          <el-table-column prop="name" label="属性名" width="180"></el-table-column>
          <el-table-column prop="value" label="属性说明" width="180"></el-table-column>
          <el-table-column prop="defaulte" label="默认值"></el-table-column>
          <el-table-column prop="type" label="数据类型"></el-table-column>
          <el-table-column prop="case" label="参数示例"></el-table-column>
        </el-table>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  props: ["title", "attribute", "componentsItem"],
  data() {
    return {};
  }
};
</script>

<style lang='less' scoped>
.compontentitem {
  .title {
    color: goldenrod;
  }
  .el-row {
    margin-bottom: 40px;
  }
  .demo {
    width: 50%;
    margin: 0 auto;
    border: 1px dashed #000;
    padding: 20px;
  }
}
</style>
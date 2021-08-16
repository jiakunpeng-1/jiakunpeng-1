<template>
  <div class="toast">
    <el-select
      v-model="selected"
      @change="selectChange"
      @visible-change="visibleChange"
      placeholder="请选择"
    >
      <el-option v-for="(item,index) in dataList" :key="item" :label="index" :value="index"></el-option>
    </el-select>
    <el-button type="success" size v-show="isAdd" @click="submit">确定修改</el-button>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      // 是否显示确定按钮
      isAdd: false,
      // 默认值
      selected: "0",
      // 数据列表
      dataList: [1, 2, 3, 4]
    };
  },
  methods: {
    // 选项改变时
    selectChange() {
      this.isAdd = true;
    },
    // 列表显示时
    visibleChange() {},
    // 提交
    submit() {
      // 消息提醒
      if (this.state) {
        this.$message({
          message: `修改成功`,
          type: "success"
        });
      } else {
        this.$message.error("修改失败");
      }
      this.isAdd = false;
    }
  },
  mounted() {}
};
</script>

<style>
</style>
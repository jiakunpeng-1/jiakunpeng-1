<template>
  <div class="timeRang">
    <el-row>
      <el-col :span="3">
        <div class="title">保密期限：</div>
      </el-col>
      <el-col class="content" :span="10">
        <el-select size="mini" v-model="termType" placeholder="请选择">
          <el-option
            v-for="item in termTypeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-select size="mini" v-model="year" placeholder="请选择">
          <el-option v-for="item in yearRangeList" :key="item" :label="item+'年'" :value="item"></el-option>
        </el-select>
        <el-select size="mini" v-model="mounth" placeholder="请选择">
          <el-option v-for="item in 12" :key="item" :label="item+'月'" :value="item"></el-option>
        </el-select>
        <el-select size="mini" v-model="day" placeholder="请选择">
          <el-option v-for="item in 30" :key="item" :label="item+'天'" :value="item"></el-option>
        </el-select>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: ["range"],
  data() {
    return {
      year: "0年",
      mounth: "0月",
      day: "0天",
      yearRangeList: [],
      termType: "固定期限",
      value1: true,
      value2: true,
      termTypeOptions: [
        {
          value: "0",
          label: "固定期限"
        },
        {
          value: "1",
          label: "不固定期限"
        }
      ]
    };
  },
  mounted() {
    this.yearRangeList = this.yearRangeTransformation(this.range);
  },
  methods: {
    yearRangeTransformation(str) {
      let start = str.split("-")[0];
      let end = str.split("-")[1];
      let arr = [];
      for (let i = start; i <= end; i++) {
        arr.push(i);
      }
      return arr;
    }
  }
};
</script>

<style lang='less' scoped>
.title {
  text-align: right;
}
.content {
  text-align: left;
  border-bottom: 1px solid #ccc;
  &:hover {
    border-bottom: 1px solid var(--hover-color);
  }
  /deep/ .el-select {
    width: 25%;
    position: relative;
    .el-input {
      input {
        border: none;
      }
    }
    &.el-select:nth-child(1) {
      background: rgb(165, 165, 165);
      // transition: all 0.6s;
      .el-input {
        input {
          color: #fff;
          background: rgba(0, 0, 0, 0.1);
        }
      }
      &.el-select:nth-child(1):hover {
        background: var(--hover-color);
      }
    }
  }
}
</style>